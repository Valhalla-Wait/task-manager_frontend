import { api as generatedApi } from 'core/api/generated_types';

export const projectsApi = generatedApi.enhanceEndpoints({
  addTagTypes: ['projects'],
  endpoints: {
    createProject: {
      invalidatesTags: ['projects'],
    },
    GetProjectsByOwnerId: {
      providesTags: ['projects'],
    },
    DeleteProject: {
      invalidatesTags: ['projects'],
    },
  },
});
