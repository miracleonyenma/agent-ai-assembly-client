import { AuthData, LoginInput } from "@/types/gql/graphql";
import graphqlRequest from "@/utils/graphQLRequest";

const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API as string;

const LOGIN_USER_QUERY = `#graphql
mutation Login($input: LoginInput!) {
  login(input: $input) {
    accessToken
    refreshToken
    user {
      id
      firstName
      lastName
      email
      emailVerified
      picture
      roles {
        id
        name
      }
    }
  }
}
`;

const loginUser = async (input: LoginInput, url?: string) => {
  const headers: { [key: string]: string } = {};

  try {
    const data = await graphqlRequest<{ login: AuthData }>(
      url || GRAPHQL_API,
      {
        query: LOGIN_USER_QUERY,
        variables: {
          input,
        },
      },
      headers,
    );
    console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ~ loginUser ~ data", data);
    if (data.errors) throw new Error(data.errors[0].message);
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 ~ loginUser error: ", error);
    throw new Error(error.message);
  }
};

export default loginUser;
