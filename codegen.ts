import type { CodegenConfig } from '@graphql-codegen/cli'
 
const config: CodegenConfig = {
  schema: 'https://task-manager-back.up.railway.app/graphql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/core/api/generated_types.ts': {
      plugins: ['typescript',
      'typescript-operations',
        'typescript-rtk-query'
      ],
      config:{
        importBaseApiFrom: 'core/api/baseApi',
          exportHooks: true
      }
    },
  },
}
 
export default config