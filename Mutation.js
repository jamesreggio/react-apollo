"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var invariant = require('invariant');
var shallowEqual = require('fbjs/lib/shallowEqual');
var parser_1 = require("./parser");
var initialState = {
    notCalled: true,
};
var Mutation = (function (_super) {
    __extends(Mutation, _super);
    function Mutation(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.runMutation = function (options) {
            if (options === void 0) { options = {}; }
            _this.onStartMutation();
            var mutationId = _this.generateNewMutationId();
            return _this.mutate(options)
                .then(function (response) {
                _this.onCompletedMutation(response, mutationId);
                return response;
            })
                .catch(function (e) {
                _this.onMutationError(e, mutationId);
            });
        };
        _this.mutate = function (options) {
            var _a = _this.props, mutation = _a.mutation, optimisticResponse = _a.optimisticResponse, refetchQueries = _a.refetchQueries, update = _a.update;
            var variables = options.variables;
            return _this.client.mutate({
                mutation: mutation,
                variables: variables,
                optimisticResponse: optimisticResponse,
                refetchQueries: refetchQueries,
                update: update,
            });
        };
        _this.onStartMutation = function () {
            if (!_this.state.loading) {
                _this.setState({
                    loading: true,
                    error: undefined,
                    data: undefined,
                    notCalled: false,
                });
            }
        };
        _this.onCompletedMutation = function (response, mutationId) {
            var onCompleted = _this.props.onCompleted;
            var data = response.data;
            var callOncomplete = function () {
                if (onCompleted) {
                    onCompleted(data);
                }
            };
            if (_this.isMostRecentMutation(mutationId)) {
                _this.setState({
                    loading: false,
                    data: data,
                }, function () {
                    callOncomplete();
                });
            }
            else {
                callOncomplete();
            }
        };
        _this.onMutationError = function (error, mutationId) {
            var onError = _this.props.onError;
            var apolloError = error;
            var callOnError = function () {
                if (onError) {
                    onError(apolloError);
                }
            };
            if (_this.isMostRecentMutation(mutationId)) {
                _this.setState({
                    loading: false,
                    error: apolloError,
                }, function () {
                    callOnError();
                });
            }
            else {
                callOnError();
            }
        };
        _this.generateNewMutationId = function () {
            _this.mostRecentMutationId = _this.mostRecentMutationId + 1;
            return _this.mostRecentMutationId;
        };
        _this.isMostRecentMutation = function (mutationId) {
            return _this.mostRecentMutationId === mutationId;
        };
        _this.verifyDocumentIsMutation = function (mutation) {
            var operation = parser_1.parser(mutation);
            invariant(operation.type === parser_1.DocumentType.Mutation, "The <Mutation /> component requires a graphql mutation, but got a " + (operation.type === parser_1.DocumentType.Query ? 'query' : 'subscription') + ".");
        };
        _this.verifyContext = function (context) {
            invariant(!!context.client, "Could not find \"client\" in the context of Mutation. Wrap the root component in an <ApolloProvider>");
        };
        _this.verifyContext(context);
        _this.client = context.client;
        _this.verifyDocumentIsMutation(props.mutation);
        _this.mostRecentMutationId = 0;
        _this.state = initialState;
        return _this;
    }
    Mutation.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        if (shallowEqual(this.props, nextProps) &&
            this.client === nextContext.client) {
            return;
        }
        if (this.props.mutation !== nextProps.mutation) {
            this.verifyDocumentIsMutation(nextProps.mutation);
        }
        if (this.client !== nextContext.client) {
            this.client = nextContext.client;
            this.setState(initialState);
        }
    };
    Mutation.prototype.render = function () {
        var children = this.props.children;
        var _a = this.state, loading = _a.loading, data = _a.data, error = _a.error, notCalled = _a.notCalled;
        var result = notCalled
            ? undefined
            : {
                loading: loading,
                data: data,
                error: error,
            };
        return children(this.runMutation, result);
    };
    Mutation.contextTypes = {
        client: PropTypes.object.isRequired,
    };
    Mutation.propTypes = {
        mutation: PropTypes.object.isRequired,
        variables: PropTypes.object,
        optimisticResponse: PropTypes.object,
        refetchQueries: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.arrayOf(PropTypes.object),
        ]),
        update: PropTypes.func,
        children: PropTypes.func.isRequired,
        onCompleted: PropTypes.func,
        onError: PropTypes.func,
    };
    return Mutation;
}(React.Component));
exports.default = Mutation;
//# sourceMappingURL=Mutation.js.map