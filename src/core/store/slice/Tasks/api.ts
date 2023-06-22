import { api as generatedApi } from 'core/api/generated_types';

export const usersApi = generatedApi.enhanceEndpoints({
  addTagTypes: ['users'],
  endpoints: {
    SearchUsers: {
      invalidatesTags: () => ['users'],
    },
    GetUsers: {
      providesTags: ['users'],
    },
  },
});
