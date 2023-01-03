import { gql } from '@apollo/client';
// Here we put queries. Remove next line
// export {};
export const GET_ALL = gql`
  query (
    $options: ProductListOptions
  ) {
    products(options: $options) {
      items {
        id
        createdAt
        updatedAt
        languageCode
        name
        slug
        description
        featuredAsset {
          id
        }
        customFields
      }
      totalItems
    }
  }   
`;