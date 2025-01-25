import { Query, QueryProjectArgs } from "@/types/gql/graphql";
import executeGraphQL from "../executeGraphQL";

const GET_PROJECT_QUERY = `#graphql
query Project($slug: String, $projectId: ID) {
  project(slug: $slug, id: $projectId) {
    id
    name
    slug
    description
    repository {
      fullName
      url
      owner
    }
    visibility
    team {
      id
      name
      slug
      description
      createdAt
      updatedAt
    }
    createdAt
    updatedAt
  }
}`;

const getProject = async (
  input: QueryProjectArgs,
  tokens?: {
    accessToken?: string;
    apiKey?: string;
  },
  url?: string,
) => {
  const headers: { Authorization?: string } = {
    ...(tokens?.accessToken
      ? { Authorization: `Bearer ${tokens.accessToken}` }
      : {}),
    ...(tokens?.apiKey ? { "x-api-key": tokens.apiKey } : {}),
  };

  return executeGraphQL<{ project: Query["project"] }, QueryProjectArgs>({
    url,
    query: GET_PROJECT_QUERY,
    variables: input,
    headers,
  });
};

export default getProject;
