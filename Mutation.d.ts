/// <reference types="react" />
import * as React from 'react';
import * as PropTypes from 'prop-types';
import ApolloClient, { PureQueryOptions, ApolloError } from 'apollo-client';
import { DataProxy } from 'apollo-cache';
import { DocumentNode, GraphQLError } from 'graphql';
import { OperationVariables } from './types';
export interface MutationResult<TData = Record<string, any>> {
    data?: TData;
    error?: ApolloError;
    loading?: boolean;
}
export interface MutationContext {
    client: ApolloClient<Object>;
}
export interface ExecutionResult<T = Record<string, any>> {
    data?: T;
    extensions?: Record<string, any>;
    errors?: GraphQLError[];
}
export declare type MutationUpdaterFn<T = {
    [key: string]: any;
}> = (proxy: DataProxy, mutationResult: FetchResult<T>) => void;
export declare type FetchResult<C = Record<string, any>, E = Record<string, any>> = ExecutionResult<C> & {
    extensions?: E;
    context?: C;
};
export declare type MutationOptions<TVariables = OperationVariables> = {
    variables?: TVariables;
};
export interface MutationProps<TData = any, TVariables = OperationVariables> {
    mutation: DocumentNode;
    optimisticResponse?: Object;
    refetchQueries?: string[] | PureQueryOptions[];
    update?: MutationUpdaterFn<TData>;
    children: (mutateFn: (options?: MutationOptions<TVariables>) => Promise<void | FetchResult>, result?: MutationResult<TData>) => React.ReactNode;
    onCompleted?: (data: TData) => void;
    onError?: (error: ApolloError) => void;
}
export interface MutationState<TData = any> {
    notCalled: boolean;
    error?: ApolloError;
    data?: TData;
    loading?: boolean;
}
declare class Mutation<TData = any, TVariables = OperationVariables> extends React.Component<MutationProps<TData, TVariables>, MutationState<TData>> {
    static contextTypes: {
        client: PropTypes.Validator<any>;
    };
    static propTypes: {
        mutation: PropTypes.Validator<any>;
        variables: PropTypes.Requireable<any>;
        optimisticResponse: PropTypes.Requireable<any>;
        refetchQueries: PropTypes.Requireable<any>;
        update: PropTypes.Requireable<any>;
        children: PropTypes.Validator<any>;
        onCompleted: PropTypes.Requireable<any>;
        onError: PropTypes.Requireable<any>;
    };
    private client;
    private mostRecentMutationId;
    constructor(props: MutationProps<TData, TVariables>, context: any);
    componentWillReceiveProps(nextProps: MutationProps<TData, TVariables>, nextContext: MutationContext): void;
    render(): React.ReactNode;
    private runMutation;
    private mutate;
    private onStartMutation;
    private onCompletedMutation;
    private onMutationError;
    private generateNewMutationId;
    private isMostRecentMutation;
    private verifyDocumentIsMutation;
    private verifyContext;
}
export default Mutation;
