import { RefreshPayload } from "@/types/gql/graphql";
import graphqlRequest from "@/utils/graphQLRequest";
const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API as string;

const REFRESH_TOKEN_QUERY = `
mutation RefreshToken($token: String!) {
  refreshToken(token: $token) {
    accessToken
  }
}
`;

const refreshToken = async (
  {
    token,
  }: {
    token: string;
  },
  url?: string,
) => {
  const headers: { [key: string]: string } = {};
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const data = await graphqlRequest<RefreshPayload>(
      url || GRAPHQL_API,
      {
        query: REFRESH_TOKEN_QUERY,
        variables: {
          token,
        },
      },
      headers,
    );

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 ~ refreshToken error: ", error);
    throw new Error(error.message);
  }
};

export default refreshToken;
