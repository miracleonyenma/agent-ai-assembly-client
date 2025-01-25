import graphqlRequest from "@/utils/graphQLRequest";

const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API as string;

interface GraphQLRequestParams<
  TVariables extends Record<string, unknown> | undefined,
> {
  query: string;
  variables: TVariables;
  headers?: { [key: string]: string };
  url?: string;
}

const executeGraphQL = async <
  TResponse,
  TVariables extends Record<string, unknown> | undefined,
>({
  query,
  variables,
  headers = {},
  url = GRAPHQL_API,
}: GraphQLRequestParams<TVariables>): Promise<TResponse> => {
  try {
    const response = await graphqlRequest<TResponse>(
      url,
      { query, variables },
      headers,
    );

    if (response.errors) {
      throw new Error(response.errors[0].message);
    }

    if (!response.data) {
      throw new Error("No data returned from GraphQL response.");
    }

    return response.data; // Extract and return only the `data` field
  } catch (error: unknown) {
    console.error("GraphQL request error:", error);
    throw new Error(
      (error as { message: string }).message || "Unknown error occurred.",
    );
  }
};

export default executeGraphQL;
