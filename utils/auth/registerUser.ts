import { RegisterData, RegisterInput } from "@/types/gql/graphql";
import graphqlRequest from "@/utils/graphQLRequest";

const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API as string;

const REGISTER_USER_QUERY = `#graphql
mutation Register($input: RegisterInput!) {
  register(input: $input) {
    user {
      id
      firstName
      lastName
      picture
      email
      emailVerified
    }
  }
}`;

const registerUser = async (input: RegisterInput, url?: string) => {
  const headers: { [key: string]: string } = {};

  try {
    const data = await graphqlRequest<RegisterData>(
      url || GRAPHQL_API,
      {
        query: REGISTER_USER_QUERY,
        variables: {
          input,
        },
      },
      headers,
    );
    console.log(
      "🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ~ registerUser ~ data",
      data,
    );
    if (data.errors) throw new Error(data.errors[0].message);
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 ~ registerUser error: ", error);
    throw new Error(error.message);
  }
};

export default registerUser;
