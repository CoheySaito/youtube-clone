import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "videos" */
  delete_videos?: Maybe<Videos_Mutation_Response>;
  /** delete single row from the table: "videos" */
  delete_videos_by_pk?: Maybe<Videos>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "videos" */
  insert_videos?: Maybe<Videos_Mutation_Response>;
  /** insert a single row into the table: "videos" */
  insert_videos_one?: Maybe<Videos>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "videos" */
  update_videos?: Maybe<Videos_Mutation_Response>;
  /** update single row of the table: "videos" */
  update_videos_by_pk?: Maybe<Videos>;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_VideosArgs = {
  where: Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Videos_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VideosArgs = {
  objects: Array<Videos_Insert_Input>;
  on_conflict?: Maybe<Videos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Videos_OneArgs = {
  object: Videos_Insert_Input;
  on_conflict?: Maybe<Videos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_VideosArgs = {
  _inc?: Maybe<Videos_Inc_Input>;
  _set?: Maybe<Videos_Set_Input>;
  where: Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Videos_By_PkArgs = {
  _inc?: Maybe<Videos_Inc_Input>;
  _set?: Maybe<Videos_Set_Input>;
  pk_columns: Videos_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  videos: Array<Videos>;
  /** An aggregate relationship */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootVideosArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};


export type Query_RootVideos_AggregateArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};


export type Query_RootVideos_By_PkArgs = {
  id: Scalars['String'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** An array relationship */
  videos: Array<Videos>;
  /** An aggregate relationship */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootVideosArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};


export type Subscription_RootVideos_AggregateArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};


export type Subscription_RootVideos_By_PkArgs = {
  id: Scalars['String'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  number_of_subscribers?: Maybe<Scalars['Int']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  videos: Array<Videos>;
  /** An aggregate relationship */
  videos_aggregate: Videos_Aggregate;
};


/** columns and relationships of "users" */
export type UsersVideosArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersVideos_AggregateArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  number_of_subscribers?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  number_of_subscribers?: Maybe<Int_Comparison_Exp>;
  profile_photo_url?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  videos?: Maybe<Videos_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsesPkey = 'uses_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  number_of_subscribers?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  number_of_subscribers?: Maybe<Scalars['Int']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  videos?: Maybe<Videos_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  number_of_subscribers?: Maybe<Scalars['Int']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  number_of_subscribers?: Maybe<Scalars['Int']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  number_of_subscribers?: Maybe<Order_By>;
  profile_photo_url?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  videos_aggregate?: Maybe<Videos_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NumberOfSubscribers = 'number_of_subscribers',
  /** column name */
  ProfilePhotoUrl = 'profile_photo_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  number_of_subscribers?: Maybe<Scalars['Int']>;
  profile_photo_url?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  number_of_subscribers?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  number_of_subscribers?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  number_of_subscribers?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  number_of_subscribers?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  NumberOfSubscribers = 'number_of_subscribers',
  /** column name */
  ProfilePhotoUrl = 'profile_photo_url',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  number_of_subscribers?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  number_of_subscribers?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  number_of_subscribers?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "videos" */
export type Videos = {
  __typename?: 'videos';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  id: Scalars['String'];
  owner_id?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  /** An object relationship */
  user?: Maybe<Users>;
  video_url?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "videos" */
export type Videos_Aggregate = {
  __typename?: 'videos_aggregate';
  aggregate?: Maybe<Videos_Aggregate_Fields>;
  nodes: Array<Videos>;
};

/** aggregate fields of "videos" */
export type Videos_Aggregate_Fields = {
  __typename?: 'videos_aggregate_fields';
  avg?: Maybe<Videos_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Videos_Max_Fields>;
  min?: Maybe<Videos_Min_Fields>;
  stddev?: Maybe<Videos_Stddev_Fields>;
  stddev_pop?: Maybe<Videos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Videos_Stddev_Samp_Fields>;
  sum?: Maybe<Videos_Sum_Fields>;
  var_pop?: Maybe<Videos_Var_Pop_Fields>;
  var_samp?: Maybe<Videos_Var_Samp_Fields>;
  variance?: Maybe<Videos_Variance_Fields>;
};


/** aggregate fields of "videos" */
export type Videos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Videos_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "videos" */
export type Videos_Aggregate_Order_By = {
  avg?: Maybe<Videos_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Videos_Max_Order_By>;
  min?: Maybe<Videos_Min_Order_By>;
  stddev?: Maybe<Videos_Stddev_Order_By>;
  stddev_pop?: Maybe<Videos_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Videos_Stddev_Samp_Order_By>;
  sum?: Maybe<Videos_Sum_Order_By>;
  var_pop?: Maybe<Videos_Var_Pop_Order_By>;
  var_samp?: Maybe<Videos_Var_Samp_Order_By>;
  variance?: Maybe<Videos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "videos" */
export type Videos_Arr_Rel_Insert_Input = {
  data: Array<Videos_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Videos_On_Conflict>;
};

/** aggregate avg on columns */
export type Videos_Avg_Fields = {
  __typename?: 'videos_avg_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "videos" */
export type Videos_Avg_Order_By = {
  duration?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "videos". All fields are combined with a logical 'AND'. */
export type Videos_Bool_Exp = {
  _and?: Maybe<Array<Videos_Bool_Exp>>;
  _not?: Maybe<Videos_Bool_Exp>;
  _or?: Maybe<Array<Videos_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  duration?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  owner_id?: Maybe<String_Comparison_Exp>;
  thumbnail_url?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  video_url?: Maybe<String_Comparison_Exp>;
  views?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "videos" */
export enum Videos_Constraint {
  /** unique or primary key constraint */
  VideosPkey = 'videos_pkey'
}

/** input type for incrementing numeric columns in table "videos" */
export type Videos_Inc_Input = {
  duration?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "videos" */
export type Videos_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  video_url?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Videos_Max_Fields = {
  __typename?: 'videos_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_url?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "videos" */
export type Videos_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  thumbnail_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  video_url?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Videos_Min_Fields = {
  __typename?: 'videos_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_url?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "videos" */
export type Videos_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  thumbnail_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  video_url?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** response of any mutation on the table "videos" */
export type Videos_Mutation_Response = {
  __typename?: 'videos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Videos>;
};

/** on conflict condition type for table "videos" */
export type Videos_On_Conflict = {
  constraint: Videos_Constraint;
  update_columns?: Array<Videos_Update_Column>;
  where?: Maybe<Videos_Bool_Exp>;
};

/** Ordering options when selecting data from "videos". */
export type Videos_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  duration?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  owner_id?: Maybe<Order_By>;
  thumbnail_url?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  video_url?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** primary key columns input for table: videos */
export type Videos_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "videos" */
export enum Videos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoUrl = 'video_url',
  /** column name */
  Views = 'views'
}

/** input type for updating data in table "videos" */
export type Videos_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  video_url?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Videos_Stddev_Fields = {
  __typename?: 'videos_stddev_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "videos" */
export type Videos_Stddev_Order_By = {
  duration?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Videos_Stddev_Pop_Fields = {
  __typename?: 'videos_stddev_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "videos" */
export type Videos_Stddev_Pop_Order_By = {
  duration?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Videos_Stddev_Samp_Fields = {
  __typename?: 'videos_stddev_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "videos" */
export type Videos_Stddev_Samp_Order_By = {
  duration?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Videos_Sum_Fields = {
  __typename?: 'videos_sum_fields';
  duration?: Maybe<Scalars['Int']>;
  views?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "videos" */
export type Videos_Sum_Order_By = {
  duration?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** update columns of table "videos" */
export enum Videos_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  ThumbnailUrl = 'thumbnail_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  VideoUrl = 'video_url',
  /** column name */
  Views = 'views'
}

/** aggregate var_pop on columns */
export type Videos_Var_Pop_Fields = {
  __typename?: 'videos_var_pop_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "videos" */
export type Videos_Var_Pop_Order_By = {
  duration?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Videos_Var_Samp_Fields = {
  __typename?: 'videos_var_samp_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "videos" */
export type Videos_Var_Samp_Order_By = {
  duration?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Videos_Variance_Fields = {
  __typename?: 'videos_variance_fields';
  duration?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "videos" */
export type Videos_Variance_Order_By = {
  duration?: Maybe<Order_By>;
  views?: Maybe<Order_By>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: string, name: string, email?: string | null | undefined, profile_photo_url?: string | null | undefined, updated_at: string, created_at: string }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetUserByIdQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', created_at: string, email?: string | null | undefined, id: string, name: string, profile_photo_url?: string | null | undefined } | null | undefined };

export type GetVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVideosQuery = { __typename?: 'query_root', videos: Array<{ __typename?: 'videos', id: string, title: string, description?: string | null | undefined, created_at: string, thumbnail_url?: string | null | undefined, video_url?: string | null | undefined, views?: number | null | undefined, user?: { __typename?: 'users', name: string, profile_photo_url?: string | null | undefined } | null | undefined }> };

export type GetVideoByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetVideoByIdQuery = { __typename?: 'query_root', videos_by_pk?: { __typename?: 'videos', created_at: string, description?: string | null | undefined, id: string, thumbnail_url?: string | null | undefined, title: string, video_url?: string | null | undefined, views?: number | null | undefined, user?: { __typename?: 'users', name: string, number_of_subscribers?: number | null | undefined, profile_photo_url?: string | null | undefined } | null | undefined } | null | undefined };

export type CreateVideoMutationVariables = Exact<{
  id: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  thumbnail_url?: Maybe<Scalars['String']>;
  video_url?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
}>;


export type CreateVideoMutation = { __typename?: 'mutation_root', insert_videos_one?: { __typename?: 'videos', id: string, title: string, created_at: string, description?: string | null | undefined, duration?: number | null | undefined, thumbnail_url?: string | null | undefined, updated_at?: string | null | undefined, video_url?: string | null | undefined, views?: number | null | undefined } | null | undefined };

export type CreateUserMutationVariables = Exact<{
  id: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  profile_photo_url?: Maybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'mutation_root', insert_users_one?: { __typename?: 'users', created_at: string, email?: string | null | undefined, id: string, name: string, profile_photo_url?: string | null | undefined } | null | undefined };


export const GetUsersDocument = gql`
    query GetUsers {
  users(order_by: {created_at: desc}) {
    id
    name
    email
    profile_photo_url
    updated_at
    created_at
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: String!) {
  users_by_pk(id: $id) {
    created_at
    email
    id
    name
    profile_photo_url
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetVideosDocument = gql`
    query GetVideos {
  videos(order_by: {created_at: desc}) {
    id
    title
    description
    created_at
    thumbnail_url
    video_url
    views
    user {
      name
      profile_photo_url
    }
  }
}
    `;

/**
 * __useGetVideosQuery__
 *
 * To run a query within a React component, call `useGetVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVideosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVideosQuery(baseOptions?: Apollo.QueryHookOptions<GetVideosQuery, GetVideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVideosQuery, GetVideosQueryVariables>(GetVideosDocument, options);
      }
export function useGetVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVideosQuery, GetVideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVideosQuery, GetVideosQueryVariables>(GetVideosDocument, options);
        }
export type GetVideosQueryHookResult = ReturnType<typeof useGetVideosQuery>;
export type GetVideosLazyQueryHookResult = ReturnType<typeof useGetVideosLazyQuery>;
export type GetVideosQueryResult = Apollo.QueryResult<GetVideosQuery, GetVideosQueryVariables>;
export const GetVideoByIdDocument = gql`
    query GetVideoById($id: String!) {
  videos_by_pk(id: $id) {
    created_at
    description
    id
    thumbnail_url
    title
    video_url
    views
    user {
      name
      number_of_subscribers
      profile_photo_url
    }
  }
}
    `;

/**
 * __useGetVideoByIdQuery__
 *
 * To run a query within a React component, call `useGetVideoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVideoByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVideoByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVideoByIdQuery(baseOptions: Apollo.QueryHookOptions<GetVideoByIdQuery, GetVideoByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetVideoByIdQuery, GetVideoByIdQueryVariables>(GetVideoByIdDocument, options);
      }
export function useGetVideoByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVideoByIdQuery, GetVideoByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetVideoByIdQuery, GetVideoByIdQueryVariables>(GetVideoByIdDocument, options);
        }
export type GetVideoByIdQueryHookResult = ReturnType<typeof useGetVideoByIdQuery>;
export type GetVideoByIdLazyQueryHookResult = ReturnType<typeof useGetVideoByIdLazyQuery>;
export type GetVideoByIdQueryResult = Apollo.QueryResult<GetVideoByIdQuery, GetVideoByIdQueryVariables>;
export const CreateVideoDocument = gql`
    mutation CreateVideo($id: String!, $title: String!, $description: String, $thumbnail_url: String, $video_url: String, $views: Int, $duration: Int) {
  insert_videos_one(
    object: {id: $id, title: $title, description: $description, thumbnail_url: $thumbnail_url, video_url: $video_url, views: $views, duration: $duration}
  ) {
    id
    title
    created_at
    description
    duration
    thumbnail_url
    updated_at
    video_url
    views
  }
}
    `;
export type CreateVideoMutationFn = Apollo.MutationFunction<CreateVideoMutation, CreateVideoMutationVariables>;

/**
 * __useCreateVideoMutation__
 *
 * To run a mutation, you first call `useCreateVideoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVideoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVideoMutation, { data, loading, error }] = useCreateVideoMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      thumbnail_url: // value for 'thumbnail_url'
 *      video_url: // value for 'video_url'
 *      views: // value for 'views'
 *      duration: // value for 'duration'
 *   },
 * });
 */
export function useCreateVideoMutation(baseOptions?: Apollo.MutationHookOptions<CreateVideoMutation, CreateVideoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVideoMutation, CreateVideoMutationVariables>(CreateVideoDocument, options);
      }
export type CreateVideoMutationHookResult = ReturnType<typeof useCreateVideoMutation>;
export type CreateVideoMutationResult = Apollo.MutationResult<CreateVideoMutation>;
export type CreateVideoMutationOptions = Apollo.BaseMutationOptions<CreateVideoMutation, CreateVideoMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($id: String!, $email: String!, $name: String!, $profile_photo_url: String) {
  insert_users_one(
    object: {id: $id, name: $name, email: $email, profile_photo_url: $profile_photo_url}
  ) {
    created_at
    email
    id
    name
    profile_photo_url
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      email: // value for 'email'
 *      name: // value for 'name'
 *      profile_photo_url: // value for 'profile_photo_url'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;