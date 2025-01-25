// graphql request options type

// this is the type of the options parameter in the graphqlRequest function
export interface GraphQLRequestOptions {
  query: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variables?: Record<string, any>;
}

// graphql error type
// this is the type of the errors field in the GraphQLResponse type
export interface GraphQLError {
  message: string;
  locations?: { line: number; column: number }[];
  path?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extensions?: Record<string, any>;
}

// graphql response type
// this is the type of the response body in the graphqlRequest function
export interface GraphQLResponse<T> {
  data?: T;
  errors?: GraphQLError[];
}
