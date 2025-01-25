import executeGraphQL from "../executeGraphQL";
import { Query, QueryProjectDocumentArgs } from "@/types/gql/graphql";

const GET_PROJECT_DOCUMENT_QUERY = `#graphql
query ProjectDocument($id: ID, $memberId: ID) {
  projectDocument(id: $id, memberId: $memberId) {
    id
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
    markdown
    html
    createdAt
    updatedAt
  }
}`;

const getProjectDocument = (
  input: QueryProjectDocumentArgs,
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
    { projectDocument: Query["projectDocument"] },
    QueryProjectDocumentArgs
  >({
    url,
    query: GET_PROJECT_DOCUMENT_QUERY,
    variables: {
      ...input,
    },
    headers,
  });
};

export default getProjectDocument;
