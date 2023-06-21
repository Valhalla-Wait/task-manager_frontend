import { api } from 'core/api/baseApi';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
};

export type AddUserGroupInput = {
  assignedBy: Scalars['String']['input'];
  groupId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type CreateGroupInput = {
  assignedBy: Scalars['String']['input'];
  leadId: Scalars['Int']['input'];
  membersIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  name: Scalars['String']['input'];
  projectId: Scalars['Int']['input'];
};

export type CreateProjectInput = {
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  ownerId: Scalars['Int']['input'];
};

export type CreateStatusInput = {
  /** Example field (placeholder) */
  exampleField: Scalars['Int']['input'];
};

export type CreateTagInput = {
  color: Scalars['String']['input'];
  name: Scalars['String']['input'];
  taskId: Scalars['Int']['input'];
};

export type CreateTaskInput = {
  authorId: Scalars['Int']['input'];
  deadline: Scalars['DateTime']['input'];
  description: Scalars['String']['input'];
  executorIds: Array<Scalars['Int']['input']>;
  groupId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  projectId: Scalars['Int']['input'];
  tagIds: Array<Scalars['Int']['input']>;
};

export type CreateUserInput = {
  activationLink: Scalars['String']['input'];
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type DeleteMembersGroupInput = {
  groupId: Scalars['Int']['input'];
  userId: Scalars['Int']['input'];
};

export type GetProjectsInput = {
  ownerId: Scalars['Int']['input'];
};

export type Group = {
  __typename?: 'Group';
  id: Scalars['ID']['output'];
  leadId: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  projectId: Scalars['Int']['output'];
};

export type GroupData = {
  __typename?: 'GroupData';
  id: Scalars['ID']['output'];
  lead: User;
  members: Array<User>;
  name: Scalars['String']['output'];
  projectId: Scalars['Int']['output'];
};

export type LoginInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type LoginUser = {
  __typename?: 'LoginUser';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActivated: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
};

export type LoginUserData = {
  __typename?: 'LoginUserData';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: LoginUser;
};

export type LogoutData = {
  __typename?: 'LogoutData';
  message: Scalars['String']['output'];
};

export type LogoutInput = {
  userId: Scalars['Int']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addLeadInGroup: GroupData;
  addMembersInGroup: GroupData;
  createGroup: GroupData;
  createProject: Project;
  createStatus: Status;
  createTag: TaskData;
  createTask: TaskData;
  createUser: User;
  deleteMembersInGroup: GroupData;
  deleteProject: Project;
  deleteTask: TaskData;
  login: LoginUserData;
  registration: RegistratedUserData;
  removeStatus: Status;
  removeTag: TaskData;
  renameGroup: Group;
  searchUsers: Array<User>;
  updateProject: Project;
  updateStatus: Status;
  updateTag: TaskData;
  updateTask: TaskData;
};

export type MutationAddLeadInGroupArgs = {
  addLeadInGroup: AddUserGroupInput;
};

export type MutationAddMembersInGroupArgs = {
  addMembersGroupInput: AddUserGroupInput;
};

export type MutationCreateGroupArgs = {
  createGroupInput: CreateGroupInput;
};

export type MutationCreateProjectArgs = {
  createProjectInput: CreateProjectInput;
};

export type MutationCreateStatusArgs = {
  createStatusInput: CreateStatusInput;
};

export type MutationCreateTagArgs = {
  createTagInput: CreateTagInput;
};

export type MutationCreateTaskArgs = {
  createTaskInput: CreateTaskInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationDeleteMembersInGroupArgs = {
  deleteMembersGroupInput: DeleteMembersGroupInput;
};

export type MutationDeleteProjectArgs = {
  deleteProjectInput: Scalars['Float']['input'];
};

export type MutationDeleteTaskArgs = {
  id: Scalars['Int']['input'];
};

export type MutationLoginArgs = {
  loginInput: LoginInput;
};

export type MutationRegistrationArgs = {
  registrationUserInput: RegistrationUserInput;
};

export type MutationRemoveStatusArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRemoveTagArgs = {
  id: Scalars['Int']['input'];
};

export type MutationRenameGroupArgs = {
  renameGroupInput: RenameGroupInput;
};

export type MutationSearchUsersArgs = {
  searchInput: Scalars['String']['input'];
};

export type MutationUpdateProjectArgs = {
  updateProjectInput: UpdateProjectInput;
};

export type MutationUpdateStatusArgs = {
  updateStatusInput: UpdateStatusInput;
};

export type MutationUpdateTagArgs = {
  updateTagInput: UpdateTagInput;
};

export type MutationUpdateTaskArgs = {
  updateTaskInput: UpdateTaskInput;
};

export type Project = {
  __typename?: 'Project';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  ownerId: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getCurrentUser: User;
  getTagsByTaskId: Array<Tag>;
  groupById: GroupData;
  groupsByProjectId: Array<GroupData>;
  logout: LogoutData;
  projectAnalytics: Array<TasksAnalyticByStatus>;
  projectAnalyticsByGroupId: TasksAnalyticByGroups;
  projectAnalyticsByGroups: Array<TasksAnalyticByGroups>;
  projectAnalyticsByUsers: Array<TasksAnalyticByUsers>;
  projectAnalyticsGroupByUsers: Array<TasksAnalyticByUsers>;
  projectsListById: Project;
  projectsListByOwnerId: Array<Project>;
  refresh: LoginUserData;
  status: Status;
  statuses: Array<Status>;
  tag: Tag;
  taskById: TaskData;
  tasksByProjectId: Array<TaskData>;
  usersList: Array<User>;
};

export type QueryGetTagsByTaskIdArgs = {
  taskId: Scalars['Int']['input'];
};

export type QueryGroupByIdArgs = {
  groupId: Scalars['Float']['input'];
};

export type QueryGroupsByProjectIdArgs = {
  projectId: Scalars['Float']['input'];
};

export type QueryLogoutArgs = {
  logoutInput: LogoutInput;
};

export type QueryProjectAnalyticsArgs = {
  projectId: Scalars['Int']['input'];
};

export type QueryProjectAnalyticsByGroupIdArgs = {
  getGroupAnalyticByIdInput: GetGroupAnalyticInput;
};

export type QueryProjectAnalyticsByGroupsArgs = {
  projectId: Scalars['Int']['input'];
};

export type QueryProjectAnalyticsByUsersArgs = {
  projectId: Scalars['Int']['input'];
};

export type QueryProjectAnalyticsGroupByUsersArgs = {
  getGroupAnalyticByIdInput: GetGroupAnalyticInput;
};

export type QueryProjectsListByIdArgs = {
  getProjectByIdInput: Scalars['Float']['input'];
};

export type QueryProjectsListByOwnerIdArgs = {
  getProjectsInput: GetProjectsInput;
};

export type QueryRefreshArgs = {
  refreshInput: RefreshInput;
};

export type QueryStatusArgs = {
  id: Scalars['Int']['input'];
};

export type QueryTagArgs = {
  id: Scalars['Int']['input'];
};

export type QueryTaskByIdArgs = {
  id: Scalars['Int']['input'];
};

export type QueryTasksByProjectIdArgs = {
  projectId: Scalars['Int']['input'];
};

export type RefreshInput = {
  refreshToken: Scalars['String']['input'];
  userId: Scalars['Int']['input'];
};

export type RegistratedUser = {
  __typename?: 'RegistratedUser';
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActivated: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
};

export type RegistratedUserData = {
  __typename?: 'RegistratedUserData';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: RegistratedUser;
};

export type RegistrationUserInput = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type RenameGroupInput = {
  groupId: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type Status = {
  __typename?: 'Status';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  color: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  taskId: Scalars['Int']['output'];
};

export type TaskData = {
  __typename?: 'TaskData';
  authorId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  deadline: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  executors: Array<User>;
  groupId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  projectId: Scalars['Int']['output'];
  status: Status;
  statusId: Scalars['Int']['output'];
  tags: Array<TaskTag>;
};

export type TaskTag = {
  __typename?: 'TaskTag';
  color: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type TasksAnalyticByGroups = {
  __typename?: 'TasksAnalyticByGroups';
  analytic: Array<TasksAnalyticByStatus>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type TasksAnalyticByStatus = {
  __typename?: 'TasksAnalyticByStatus';
  percent: Scalars['String']['output'];
  tasksCount: Scalars['Int']['output'];
  tasksStatus: Scalars['String']['output'];
};

export type TasksAnalyticByUsers = {
  __typename?: 'TasksAnalyticByUsers';
  analytic: Array<TasksAnalyticByStatus>;
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
};

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateStatusInput = {
  /** Example field (placeholder) */
  exampleField?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
};

export type UpdateTagInput = {
  color?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  taskId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateTaskInput = {
  authorId?: InputMaybe<Scalars['Int']['input']>;
  deadline?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  executorIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  groupId?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['Int']['input']>;
  statusId: Scalars['Int']['input'];
  tagIds?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type User = {
  __typename?: 'User';
  activationLink: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isActivated: Scalars['Boolean']['output'];
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type GetGroupAnalyticInput = {
  groupId: Scalars['Int']['input'];
  projectId: Scalars['Int']['input'];
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type LoginMutation = {
  __typename?: 'Mutation';
  login: {
    __typename?: 'LoginUserData';
    accessToken: string;
    user: {
      __typename?: 'LoginUser';
      id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
  };
};

export type RegistrationMutationVariables = Exact<{
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type RegistrationMutation = {
  __typename?: 'Mutation';
  registration: {
    __typename?: 'RegistratedUserData';
    accessToken: string;
    user: {
      __typename?: 'RegistratedUser';
      id: string;
      email: string;
      firstName: string;
      lastName: string;
    };
  };
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  __typename?: 'Query';
  usersList: Array<{
    __typename?: 'User';
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }>;
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = {
  __typename?: 'Query';
  getCurrentUser: {
    __typename?: 'User';
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
};

export type SearchUsersMutationVariables = Exact<{
  email: Scalars['String']['input'];
}>;

export type SearchUsersMutation = {
  __typename?: 'Mutation';
  searchUsers: Array<{
    __typename?: 'User';
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  }>;
};

export const LoginDocument = `
    mutation Login($email: String!, $password: String!) {
  login(loginInput: {email: $email, password: $password}) {
    user {
      id
      firstName
      lastName
      email
    }
    accessToken
  }
}
    `;
export const RegistrationDocument = `
    mutation Registration($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  registration(
    registrationUserInput: {firstName: $firstName, lastName: $lastName, email: $email, password: $password}
  ) {
    user {
      id
      email
      firstName
      lastName
    }
    accessToken
  }
}
    `;
export const GetUsersDocument = `
    query GetUsers {
  usersList {
    id
    firstName
    lastName
    email
  }
}
    `;
export const GetCurrentUserDocument = `
    query GetCurrentUser {
  getCurrentUser {
    id
    firstName
    lastName
    email
  }
}
    `;
export const SearchUsersDocument = `
    mutation SearchUsers($email: String!) {
  searchUsers(searchInput: $email) {
    id
    firstName
    lastName
    email
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    Login: build.mutation<LoginMutation, LoginMutationVariables>({
      query: (variables) => ({ document: LoginDocument, variables }),
    }),
    Registration: build.mutation<
      RegistrationMutation,
      RegistrationMutationVariables
    >({
      query: (variables) => ({ document: RegistrationDocument, variables }),
    }),
    GetUsers: build.query<GetUsersQuery, GetUsersQueryVariables | void>({
      query: (variables) => ({ document: GetUsersDocument, variables }),
    }),
    GetCurrentUser: build.query<
      GetCurrentUserQuery,
      GetCurrentUserQueryVariables | void
    >({
      query: (variables) => ({ document: GetCurrentUserDocument, variables }),
    }),
    SearchUsers: build.mutation<
      SearchUsersMutation,
      SearchUsersMutationVariables
    >({
      query: (variables) => ({ document: SearchUsersDocument, variables }),
    }),
  }),
});

export { injectedRtkApi as api };
export const {
  useLoginMutation,
  useRegistrationMutation,
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useGetCurrentUserQuery,
  useLazyGetCurrentUserQuery,
  useSearchUsersMutation,
} = injectedRtkApi;
