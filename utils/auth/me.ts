import { User } from "@/types/gql/graphql";
import graphqlRequest from "@/utils/graphQLRequest";
import { cookies } from "next/headers";
import handleRefreshToken from "@/utils/auth/refreshToken";

const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API as string;

export const USER_PART = `#graphql
id
firstName
lastName
picture
email
emailVerified
teams {
  id
  name
  slug
  description
  createdAt
  updatedAt
}
team {
  id
  name
  slug
  description
  createdAt
  updatedAt
}  
`;

const ME_QUERY = `#graphql
query Me {
  me {
   ${USER_PART}
    roles {
      id
      name
    }
  }
}
`;

const getMe = async ({ token }: { token?: string }, url?: string) => {
  const headers: { [key: string]: string } = {};

  try {
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    } else {
      const cookiesStore = await cookies();
      const accessToken = cookiesStore.get("accessToken")?.value;
      const refreshToken = cookiesStore.get("refreshToken")?.value;
      if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
      } else if (refreshToken) {
        const refreshedToken = await handleRefreshToken({
          token: refreshToken,
        });
        headers.Authorization = `Bearer ${refreshedToken.data?.accessToken}`;
      }
    }

    const data = await graphqlRequest<{ me: User }>(
      url || GRAPHQL_API,
      {
        query: ME_QUERY,
      },
      headers,
    );

    console.log("🚀 ~ file: me.ts ~ line 52 ~ getMe ~ data", data);

    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 ~ getMe error: ", error);
    throw new Error(error.message);
  }
};

export default getMe;
