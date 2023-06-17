import { client } from 'core/api/baseApi';
import { api as generatedApi } from 'core/api/generated_types';

export const authApi = generatedApi.enhanceEndpoints({
  addTagTypes: ['auth'],
  endpoints: {
    Login: {
      async onQueryStarted(arg, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        client.setHeader('authorization', `Bearer ${data.login.accessToken}`);
      },
    },
    Registration: {
      async onQueryStarted(arg, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        client.setHeader(
          'authorization',
          `Bearer ${data.registration.accessToken}`,
        );
      },
    },
  },
});
