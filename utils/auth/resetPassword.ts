import { MutationResetPasswordArgs } from "@/types/gql/graphql";
import graphqlRequest from "@/utils/graphQLRequest";
const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API as string;

const RESET_PASSWORD_QUERY = `#graphql
mutation ResetPassword($token: String!, $password: String!) {
  resetPassword(token: $token, password: $password)
}
`;

const resetPassword = async (
  input: MutationResetPasswordArgs,
  url?: string,
) => {
  // const headers: { [key: string]: string } = {};
  // token && (headers.Authorization = `Bearer ${token}`);

  try {
    const data = await graphqlRequest<{ resetPassword: boolean }>(
      url || GRAPHQL_API,
      {
        query: RESET_PASSWORD_QUERY,
        variables: input,
      },
      // headers,
    );

    return data;
  } catch (error: any) {
    console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 ~ resetPassword error: ", error);
    throw new Error(error.message);
  }
};

export default resetPassword;
