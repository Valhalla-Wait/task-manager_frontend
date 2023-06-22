import { createApi } from '@reduxjs/toolkit/query/react';
import { ClientError, GraphQLClient } from 'graphql-request';
import { graphqlRequestBaseQuery } from './rtkGraphQlQuery';

export const client = new GraphQLClient(
  'https://task-manager-back.up.railway.app/graphql',
);

export const api = createApi({
  reducerPath: 'BaseApi',
  baseQuery: graphqlRequestBaseQuery<
  Partial<ClientError & { errorCode: number }>
  >({
    client,
    customErrors: ({ name, stack, response }) => {
      // debugger
      const error = response?.errors?.length
        ? response?.errors[0]?.message
        : 'some error';

      return {
        name,
        message: error,
        errorCode: 400,
        stack,
      };
    },
  }),
  endpoints: () => ({}),
});
