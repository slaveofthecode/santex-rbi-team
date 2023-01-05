import { gql } from '@apollo/client';

export const GET_ALL = gql`
  query (
    $options: ProductListOptions
  ) {
    products(options: $options) {
      items {
        id
        name
        description
        assets {
          id
          fileSize
          height
          width
          type
          mimeType
          preview
          source
        }
        variants {
          id
          currencyCode
          updatedAt
          price        
        }
      }
      totalItems
    }
  }   
`;

export const GET_ACTIVE_ORDER = gql`
  query {
    activeOrder {
      id
      updatedAt
      code
      state
      active
      
      subTotal
      subTotalWithTax
      
      total
      totalWithTax
      totalQuantity
  
      lines {      
        unitPrice
        quantity
      }

      history {
        items {
          id
        }
      }
    }
  } 
`;