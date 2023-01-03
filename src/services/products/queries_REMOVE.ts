import { gql } from "@apollo/client";

export const GET_ALL = gql`
  query (
    $options: {}
  ) {
    products(
        options: $options
    ) {
        items {
            id
            createdAt
            updatedAt
            languageCode
            name
            slug
            description
            featuredAsset{
              id
            }
            # assets {  
            # }
            # variants
            # variantList(options: {})
            # optionGroups
            # facetValues
            # translations
            # collections
            customFields
          }
        totalItems
    }
  }
`;