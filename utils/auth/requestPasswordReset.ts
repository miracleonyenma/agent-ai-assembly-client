import graphqlRequest from "@/utils/graphQLRequest";
const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API as string;

const REQUEST_PASSWORD_RESET_QUERY = `#graphql
mutation RequestPasswordReset($email: String!) {
  requestPasswordReset(email: $email)
}
`;

const requestPasswordReset = async (input: { email: string }, url?: string) => {
  // const headers: { [key: string]: string } = {};
  // token && (headers.Authorization = `Bearer ${token}`);

  try {
    const data = await graphqlRequest<{
      requestPasswordReset: boolean;
    }>(
      url || GRAPHQL_API,
      {
        query: REQUEST_PASSWORD_RESET_QUERY,
        variables: { ...input },
      },
      // headers,
    );

    return data;
  } catch (error: any) {
    console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 ~ RequestPasswordReset error: ", error);
    throw new Error(error.message);
  }
};

export default requestPasswordReset;
