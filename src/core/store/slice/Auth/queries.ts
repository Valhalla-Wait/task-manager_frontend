import { gql } from "@apollo/client";

export const FETCH_AUTH = gql`
    query Users{
        users{
            id
            firstName
            lastName
        }
    }
`

// query usersList(){
//     user(){
//         id
//         firstName
//         lastName
//     }