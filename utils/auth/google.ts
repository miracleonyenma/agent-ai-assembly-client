import { User } from "@/types/gql/graphql";
import graphqlRequest from "@/utils/graphQLRequest";
const GRAPHQL_API = process.env.NEXT_PUBLIC_GRAPHQL_API as string;
const API_KEY = process.env.API_KEY as string;

type GoogleAuthResponse = {
  data: {
    googleAuth: {
      accessToken: string;
      refreshToken: string;
      user: User;
    };
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
};

const GOOGLE_AUTH_QUERY = `#graphql
mutation GoogleAuth($code: String!) {
  googleAuth(code: $code) {
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

const getGoogleAuthURL = () => {
  const rootURL = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    redirect_uri: process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REDIRECT_URI as string,
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ].join(" "),
  };

  // console.log("options", options);

  const qs = new URLSearchParams(options).toString();

  // console.log("qs", qs);

  return `${rootURL}?${qs}`;
};

const handleGetGoogleSession = async (
  input: { code: string },
  url?: string,
) => {
  console.log("🪵🪵🪵🪵🪵 ~ handleGetGoogleSession code", input);
  console.log("🗣️🗣️🗣️🗣️🗣️🗣️ ~ GRAPHQL_API:", GRAPHQL_API);

  try {
    const data = await graphqlRequest<GoogleAuthResponse>(
      url || GRAPHQL_API,
      {
        query: GOOGLE_AUTH_QUERY,
        variables: {
          ...input,
        },
      },
      {
        "x-api-key": API_KEY,
      },
    );

    console.log("🪵🪵🪵🪵🪵 ~ data", data);

    return data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("🚨🚨🚨🚨🚨 ~ error", error);
    return error;
  }
};

export { getGoogleAuthURL, handleGetGoogleSession };
