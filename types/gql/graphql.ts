/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  JSON: { input: any; output: any; }
};

export type ApiKey = {
  __typename?: 'ApiKey';
  createdAt?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<User>;
};

export type AuthData = {
  __typename?: 'AuthData';
  accessToken?: Maybe<Scalars['String']['output']>;
  refreshToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Member = {
  __typename?: 'Member';
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  projectRole?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type MemberInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MembersData = {
  __typename?: 'MembersData';
  data?: Maybe<Array<Maybe<Member>>>;
  meta?: Maybe<Meta>;
};

export type Meta = {
  __typename?: 'Meta';
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createMember?: Maybe<Member>;
  createProject?: Maybe<Project>;
  createProjectDocument?: Maybe<ProjectDocument>;
  createRole?: Maybe<Role>;
  deleteMember?: Maybe<Member>;
  deleteProject?: Maybe<Project>;
  deleteProjectDocument?: Maybe<ProjectDocument>;
  deleteRole?: Maybe<Role>;
  deleteUser?: Maybe<User>;
  generateApiKey?: Maybe<ApiKey>;
  googleAuth?: Maybe<AuthData>;
  login?: Maybe<AuthData>;
  refreshToken: RefreshPayload;
  register?: Maybe<RegisterData>;
  requestPasswordReset?: Maybe<Scalars['Boolean']['output']>;
  resetPassword?: Maybe<Scalars['Boolean']['output']>;
  revokeApiKey?: Maybe<ApiKey>;
  sendOTP?: Maybe<Scalars['String']['output']>;
  updateMember?: Maybe<Member>;
  updateProject?: Maybe<Project>;
  updateProjectDocument?: Maybe<ProjectDocument>;
  updateUser?: Maybe<User>;
  verifyOTP?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateMemberArgs = {
  input: MemberInput;
};


export type MutationCreateProjectArgs = {
  input?: InputMaybe<ProjectInput>;
};


export type MutationCreateProjectDocumentArgs = {
  input?: InputMaybe<ProjectDocumentInput>;
};


export type MutationCreateRoleArgs = {
  name: Scalars['String']['input'];
};


export type MutationDeleteMemberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteProjectDocumentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGoogleAuthArgs = {
  code: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRefreshTokenArgs = {
  token: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRequestPasswordResetArgs = {
  email: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationRevokeApiKeyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendOtpArgs = {
  input: SendOtpInput;
};


export type MutationUpdateMemberArgs = {
  id: Scalars['ID']['input'];
  input: MemberInput;
};


export type MutationUpdateProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  project?: InputMaybe<ProjectInput>;
};


export type MutationUpdateProjectDocumentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  input?: InputMaybe<ProjectDocumentInput>;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};


export type MutationVerifyOtpArgs = {
  input: VerifyOtpInput;
};

export type Otp = {
  __typename?: 'OTP';
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  otp?: Maybe<Scalars['String']['output']>;
};

export type Owner = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type PasswordResetToken = {
  __typename?: 'PasswordResetToken';
  expires: Scalars['String']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  token: Scalars['String']['output'];
  userId: Scalars['ID']['output'];
};

export type Project = {
  __typename?: 'Project';
  createdAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  members?: Maybe<Array<Maybe<Member>>>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ProjectStatus>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ProjectData = {
  __typename?: 'ProjectData';
  data?: Maybe<Array<Maybe<Project>>>;
  meta?: Maybe<Meta>;
};

export type ProjectDocument = {
  __typename?: 'ProjectDocument';
  createdAt?: Maybe<Scalars['String']['output']>;
  html?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  markdown?: Maybe<Scalars['String']['output']>;
  member?: Maybe<Member>;
  project?: Maybe<Project>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type ProjectDocumentFilter = {
  member?: InputMaybe<Scalars['ID']['input']>;
  project?: InputMaybe<Scalars['ID']['input']>;
};

export type ProjectDocumentInput = {
  markdown: Scalars['String']['input'];
  member: Scalars['ID']['input'];
  project: Scalars['ID']['input'];
};

export type ProjectDocumentsData = {
  __typename?: 'ProjectDocumentsData';
  data?: Maybe<Array<Maybe<ProjectDocument>>>;
  meta?: Maybe<Meta>;
};

export type ProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Owner>;
  status?: InputMaybe<ProjectStatus>;
};

export enum ProjectStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  InProgress = 'IN_PROGRESS',
  NotStarted = 'NOT_STARTED'
}

export type Query = {
  __typename?: 'Query';
  apiKey?: Maybe<ApiKey>;
  apiKeys?: Maybe<Array<Maybe<ApiKey>>>;
  me?: Maybe<User>;
  member?: Maybe<Member>;
  members?: Maybe<MembersData>;
  otp?: Maybe<Otp>;
  otps?: Maybe<Array<Maybe<Otp>>>;
  project?: Maybe<Project>;
  projectDocument?: Maybe<ProjectDocument>;
  projectDocuments?: Maybe<ProjectDocumentsData>;
  projects?: Maybe<ProjectData>;
  roles?: Maybe<Array<Maybe<Role>>>;
  user?: Maybe<User>;
  users?: Maybe<UserData>;
};


export type QueryApiKeyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMemberArgs = {
  id: Scalars['ID']['input'];
};


export type QueryMembersArgs = {
  pagination?: InputMaybe<Pagination>;
};


export type QueryOtpArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectDocumentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
  memberId?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectDocumentsArgs = {
  filter?: InputMaybe<ProjectDocumentFilter>;
  pagination?: InputMaybe<Pagination>;
};


export type QueryProjectsArgs = {
  memberId?: InputMaybe<Scalars['ID']['input']>;
  pagination?: InputMaybe<Pagination>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUsersArgs = {
  pagination?: InputMaybe<Pagination>;
};

export type RefreshPayload = {
  __typename?: 'RefreshPayload';
  accessToken: Scalars['String']['output'];
};

export type RegisterData = {
  __typename?: 'RegisterData';
  user?: Maybe<User>;
};

export type RegisterInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export type SendOtpInput = {
  email: Scalars['String']['input'];
};

export type UpdateUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  picture?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  lastName?: Maybe<Scalars['String']['output']>;
  picture?: Maybe<Scalars['String']['output']>;
  roles?: Maybe<Array<Maybe<Role>>>;
};

export type UserData = {
  __typename?: 'UserData';
  data?: Maybe<Array<Maybe<User>>>;
  meta?: Maybe<Meta>;
};

export type VerifyOtpInput = {
  email: Scalars['String']['input'];
  otp: Scalars['String']['input'];
};
