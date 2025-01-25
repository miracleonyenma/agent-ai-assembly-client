import { Query, QueryProjectsArgs } from "@/types/gql/graphql";
import executeGraphQL from "@/utils/executeGraphQL";
import { PROJECT } from "@/utils/project";

const GET_PROJECTS_QUERY = `#graphql
query Projects($pagination: Pagination, $filter: ProjectFilter) {
  projects(pagination: $pagination, filter: $filter) {
    data {
      ${PROJECT}
    }
    meta {
      page
      limit
      pages
      total
    }
  }
}`;

const getProjects = (
  input: QueryProjectsArgs,
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

  return executeGraphQL<{ projects: Query["projects"] }, QueryProjectsArgs>({
    url,
    query: GET_PROJECTS_QUERY,
    variables: input,
    headers,
  });
};

export default getProjects;
