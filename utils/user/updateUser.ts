import { Query, UpdateUserInput } from "@/types/gql/graphql";
import graphqlRequest from "@/utils/graphQLRequest";

const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API as string;

const UPDATE_USER_QUERY = `#graphql
mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    firstName
    lastName
    picture
    email
    emailVerified
  }
}`;

const updateUser = async (
  input: UpdateUserInput,
  token?: string | null,
  url?: string,
) => {
  const headers: { [key: string]: string } = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  try {
    const data = await graphqlRequest<{ updateUser: Query["user"] }>(
      url || GRAPHQL_API,
      {
        query: UPDATE_USER_QUERY,
        variables: {
          input,
        },
      },
      headers,
    );

    console.log(
      "🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ~ updateUser ~ data",
      data,
    );
    if (data.errors) throw new Error(data.errors[0].message);
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 ~ updateUser error: ", error);
    throw new Error(error.message);
  }
};

export default updateUser;
