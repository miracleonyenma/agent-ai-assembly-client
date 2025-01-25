import { VerifyOtpInput } from "@/types/gql/graphql";
import graphqlRequest from "@/utils/graphQLRequest";
const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API as string;

const VERIFY_OTP_QUERY = `#graphql
mutation VerifyOTP($input: VerifyOTPInput!) {
  verifyOTP(input: $input)
}`;

const verifyOTP = async (input: VerifyOtpInput, url?: string) => {
  const headers: { [key: string]: string } = {};

  try {
    const data = await graphqlRequest<{
      verifyOTP: boolean;
    }>(
      url || GRAPHQL_API,
      {
        query: VERIFY_OTP_QUERY,
        variables: {
          input,
        },
      },
      headers,
    );
    console.log("🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ~ verifyOTP ~ data", data);
    if (data.errors) throw new Error(data.errors[0].message);
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 ~ verifyOTP error: ", error);
    throw new Error(error.message);
  }
};

export default verifyOTP;
