import { gql } from "@apollo/client";

export const ADD_ITEM_TO_ORDER = gql`
mutation (
    $productVariantId: ID!,
    $quantity: Int!
) {
    addItemToOrder(
        productVariantId: $productVariantId,
        quantity: $quantity
    ) {
        ... on Order {
            id
            state
            total
            subTotal
          }
      
          ... on OrderLimitError {
            errorCode
            maxItems
            message
          }
      
          ... on OrderModificationError {
            message
          }
    }
}
`;