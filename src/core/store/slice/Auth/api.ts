import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { client } from 'core/api/baseApi';
import { api as generatedApi } from 'core/api/generated_types';


export const authApi = generatedApi.enhanceEndpoints({
    addTagTypes:['auth'],
    endpoints:{
        Login: {
            async onQueryStarted(arg, { queryFulfilled }) {
                const { data } = await queryFulfilled
                client.setHeader("authorization", `Bearer ${data.login.accessToken}`)
              }
        },
        Registration: {
          async onQueryStarted(arg, { queryFulfilled }) {
              const { data } = await queryFulfilled
              client.setHeader("authorization", `Bearer ${data.registration.accessToken}`)
            }
      }
      }
})

// const graphqlBaseQuery =
//     (token: string) =>
//         async ({ body }: { body: string }) => {
//             try {
//                 //   const result = await client.request(body)

//                 const result = await request({
//                     url: 'http://localhost:5000/graphql',
//                     document: body,
//                     // requestHeaders: {
//                     //     authorization: token
//                     // }
//                 })
//                 return { data: result }
//             } catch (error) {
//                 if (error instanceof ClientError) {
//                     return { error: error.response.errors?.[0].message }
//                 }
//                 return { error: { statusCode: 500, message: "Server Error" } }
//             }
//         }

// export const userApi = createApi({
//     reducerPath: 'userApi',
//     baseQuery: graphqlBaseQuery(''),
//     endpoints: (build) => ({
//         getAllUsers: build.query({
//             query: () => ({
//                 body: FETCH_USERS,
//             })
//         }),
//         login: build.query({
//             query: () => ({
//                 body: gql`
//                 {
//                     login(loginInput: {
//                         email: "ssss@yandex.ru",
//                         password: "123456"
//                     }){
//                         user{
//                             id
//                             email
//                             firstName
//                             lastName
//                             isActivated
//                             }
//                         accessToken
//                         refreshToken
//                     }
//                 }
//                 `,
//             })
//         }),
//         reg: build.mutation({
//             query: () => ({
//                 body: gql`
//                 mutation{
//   registration(registrationUserInput:{
//     firstName: "Пываыва",
//     lastName: "ЫЫЫЫЫ",
//     email: "ere@yandex.ru",
//     password: "123456"
//   }){
//     user{
//       id
//       email
//      	firstName
//       lastName
//       isActivated
//     }
//     accessToken
//     refreshToken
//   }
// }
//                 `,
//             })
//         })
//     })
// })