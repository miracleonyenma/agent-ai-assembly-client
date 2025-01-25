// utils/graphqlRequest.ts
import { GraphQLRequestOptions, GraphQLResponse } from "@/types/graphql";
const API_KEY = process.env.API_KEY as string;

const graphqlRequest = async <T>(
  url: string,
  options: GraphQLRequestOptions,
  headers?: Record<string, string>,
): Promise<GraphQLResponse<T>> => {
  try {
    console.log({ API_KEY, headers, url, options });

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
        ...headers,
      },
      body: JSON.stringify(options),
      cache: "no-store",
    });

    const clonedResponse = response.clone();

    // If the response is not successful, parse and throw an error
    if (!response.ok) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let errorData: any = {};
      try {
        const data = await response.json();
        errorData = data;
      } catch {
        const text = await clonedResponse.text();
        errorData.error = text;
      }
      console.log("🚨🚨🚨🚨 ~ error data:", errorData); // Log error details

      throw (
        errorData?.error ||
        errorData?.message ||
        errorData?.error?.message ||
        response.statusText
      );
      // Throw the error with a message
    }

    const responseBody: GraphQLResponse<T> = await response.json();

    return responseBody;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨 ~ graphqlRequest ~ error", error);

    return {
      data: undefined,
      errors: [{ message: error || "An error occurred" }],
    };
  }
};

export default graphqlRequest;
