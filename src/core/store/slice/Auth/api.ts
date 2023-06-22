import { client } from 'core/api/baseApi';
import { api as generatedApi } from 'core/api/generated_types';

export const authApi = generatedApi.enhanceEndpoints({
  endpoints: {
    Login: {
      async onQueryStarted(arg, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        localStorage.setItem('token', `Bearer ${data.login.accessToken}`);
        // dispatch<AppDispatch>(setToken(data.login.a))
        // dispatch<AppDispatch>(removeSignInDataAction())
        client.setHeader('authorization', `Bearer ${data.login.accessToken}`);
      },
    },
    Registration: {
      async onQueryStarted(arg, { queryFulfilled }) {
        const { data } = await queryFulfilled;
        localStorage.setItem(
          'token',
          `Bearer ${data.registration.accessToken}`,
        );
        // dispatch<AppDispatch>(setToken(data.login.a))
        // dispatch<AppDispatch>(removeSignInDataAction())
        client.setHeader(
          'authorization',
          `Bearer ${data.registration.accessToken}`,
        );
      },
    },
  },
});
