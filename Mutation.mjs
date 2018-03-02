import * as React from 'react';
import * as PropTypes from 'prop-types';
const invariant = require('invariant');
const shallowEqual = require('fbjs/lib/shallowEqual');
import { parser, DocumentType } from './parser';
const initialState = {
    notCalled: true,
};
class Mutation extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.runMutation = (options = {}) => {
            this.onStartMutation();
            const mutationId = this.generateNewMutationId();
            return this.mutate(options)
                .then(response => {
                this.onCompletedMutation(response, mutationId);
                return response;
            })
                .catch(e => {
                this.onMutationError(e, mutationId);
            });
        };
        this.mutate = (options) => {
            const { mutation, optimisticResponse, refetchQueries, update } = this.props;
            const { variables } = options;
            return this.client.mutate({
                mutation,
                variables,
                optimisticResponse,
                refetchQueries,
                update,
            });
        };
        this.onStartMutation = () => {
            if (!this.state.loading) {
                this.setState({
                    loading: true,
                    error: undefined,
                    data: undefined,
                    notCalled: false,
                });
            }
        };
        this.onCompletedMutation = (response, mutationId) => {
            const { onCompleted } = this.props;
            const data = response.data;
            const callOncomplete = () => {
                if (onCompleted) {
                    onCompleted(data);
                }
            };
            if (this.isMostRecentMutation(mutationId)) {
                this.setState({
                    loading: false,
                    data,
                }, () => {
                    callOncomplete();
                });
            }
            else {
                callOncomplete();
            }
        };
        this.onMutationError = (error, mutationId) => {
            const { onError } = this.props;
            let apolloError = error;
            const callOnError = () => {
                if (onError) {
                    onError(apolloError);
                }
            };
            if (this.isMostRecentMutation(mutationId)) {
                this.setState({
                    loading: false,
                    error: apolloError,
                }, () => {
                    callOnError();
                });
            }
            else {
                callOnError();
            }
        };
        this.generateNewMutationId = () => {
            this.mostRecentMutationId = this.mostRecentMutationId + 1;
            return this.mostRecentMutationId;
        };
        this.isMostRecentMutation = (mutationId) => {
            return this.mostRecentMutationId === mutationId;
        };
        this.verifyDocumentIsMutation = (mutation) => {
            const operation = parser(mutation);
            invariant(operation.type === DocumentType.Mutation, `The <Mutation /> component requires a graphql mutation, but got a ${operation.type === DocumentType.Query ? 'query' : 'subscription'}.`);
        };
        this.verifyContext = (context) => {
            invariant(!!context.client, `Could not find "client" in the context of Mutation. Wrap the root component in an <ApolloProvider>`);
        };
        this.verifyContext(context);
        this.client = context.client;
        this.verifyDocumentIsMutation(props.mutation);
        this.mostRecentMutationId = 0;
        this.state = initialState;
    }
    componentWillReceiveProps(nextProps, nextContext) {
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
    }
    render() {
        const { children } = this.props;
        const { loading, data, error, notCalled } = this.state;
        const result = notCalled
            ? undefined
            : {
                loading,
                data,
                error,
            };
        return children(this.runMutation, result);
    }
}
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
export default Mutation;
