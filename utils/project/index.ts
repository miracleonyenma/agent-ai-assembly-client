const PROJECT = `
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
`;

export { PROJECT };
