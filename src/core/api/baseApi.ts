import { createApi } from '@reduxjs/toolkit/query/react';
import { GraphQLClient } from 'graphql-request';
import { graphqlRequestBaseQuery } from './rtkGraphQlQuery';

export const client = new GraphQLClient('http://localhost:5000/graphql');

export const api = createApi({
  reducerPath: 'Auth',
  baseQuery: graphqlRequestBaseQuery({
    client,
  }),
  endpoints: () => ({}),
});
