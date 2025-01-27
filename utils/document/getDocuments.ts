import executeGraphQL from "../executeGraphQL";
import { Query, QueryProjectDocumentsArgs } from "@/types/gql/graphql";

const GET_PROJECT_DOCUMENTS_QUERY = `#graphql
query ProjectDocuments($filter: ProjectDocumentFilter, $pagination: Pagination) {
  projectDocuments(filter: $filter, pagination: $pagination) {
    data {
      id
      markdown
      project {
        id
        name
        description
        status
        createdAt
        updatedAt
      }
      member {
        id
        name
        email
        role
        projectRole
        createdAt
        updatedAt
      }
      html
      createdAt
      updatedAt
    }
    meta {
      page
      limit
      pages
      total
      hasNextPage
      hasPrevPage
    }
  }
}`;

const getProjectDocuments = (
  input: QueryProjectDocumentsArgs,
  tokens?: {
    accessToken?: string;
    apiKey?: string;
  },
  url?: string
) => {
  const headers: { Authorization?: string } = {
    ...(tokens?.accessToken
      ? { Authorization: `Bearer ${tokens.accessToken}` }
      : {}),
    ...(tokens?.apiKey ? { "x-api-key": tokens.apiKey } : {}),
  };

  return executeGraphQL<
    { projectDocuments: Query["projectDocuments"] },
    QueryProjectDocumentsArgs
  >({
    url,
    query: GET_PROJECT_DOCUMENTS_QUERY,
    variables: {
      ...input,
    },
    headers,
  });
};

export default getProjectDocuments;
