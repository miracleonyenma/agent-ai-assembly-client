import { SendOtpInput } from "@/types/gql/graphql";
import graphqlRequest from "@/utils/graphQLRequest";
const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API as string;

const SEND_VERIFICATION_OTP_QUERY = `#graphql
mutation SendOTP($input: SendOTPInput!) {
  sendOTP(input: $input)
}`;

const sendVerificationOTP = async (input: SendOtpInput, url?: string) => {
  const headers: { [key: string]: string } = {};

  try {
    const data = await graphqlRequest<{
      sendOTP: string;
    }>(
      url || GRAPHQL_API,
      {
        query: SEND_VERIFICATION_OTP_QUERY,
        variables: {
          input,
        },
      },
      headers,
    );
    console.log(
      "🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 ~ sendVerificationOTP ~ data",
      data,
    );
    if (data.errors) throw new Error(data.errors[0].message);
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 ~ sendVerificationOTP error: ", error);
    throw error.message;
  }
};

export default sendVerificationOTP;
