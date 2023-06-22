import { api as generatedApi } from 'core/api/generated_types';

export const projectMembersApi = generatedApi.enhanceEndpoints({
  addTagTypes: ['projects'],
  endpoints: {
    AddMemberInProject: {
      invalidatesTags: ['projects'],
    },
    GetProjectById: {
      providesTags: ['projects'],
    },
    DeleteMemberInProject: {
      invalidatesTags: ['projects'],
    },
  },
});
