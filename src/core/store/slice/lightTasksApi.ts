import { api as generatedApi } from 'core/api/generated_types';

export const lightTasksApi = generatedApi.enhanceEndpoints({
  addTagTypes: ['tasks'],
  endpoints: {
    CreateLightTask: {
      invalidatesTags: ['tasks'],
    },
    DeleteLightTask: {
      invalidatesTags: ['tasks'],
    },
    UpdateLightTask: {
      invalidatesTags: ['tasks'],
    },
    GetLighTasksByProjectId: {
      providesTags: ['tasks'],
    },
  },
});
