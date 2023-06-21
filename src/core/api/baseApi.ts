import { createApi } from '@reduxjs/toolkit/query/react';
import { GraphQLClient } from 'graphql-request';
import { graphqlRequestBaseQuery } from './rtkGraphQlQuery';

export const client = new GraphQLClient('https://task-manager-back.up.railway.app/graphql');

export const api = createApi({
  reducerPath: 'BaseApi',
  baseQuery: graphqlRequestBaseQuery({
    client,
  }),
  endpoints: () => ({}),
});
