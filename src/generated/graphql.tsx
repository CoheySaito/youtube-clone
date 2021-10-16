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
  uuid: string;
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
  /** delete data from the table: "videos" */
  delete_videos?: Maybe<Videos_Mutation_Response>;
  /** delete single row from the table: "videos" */
  delete_videos_by_pk?: Maybe<Videos>;
  /** insert data into the table: "videos" */
  insert_videos?: Maybe<Videos_Mutation_Response>;
  /** insert a single row into the table: "videos" */
  insert_videos_one?: Maybe<Videos>;
  /** update data of the table: "videos" */
  update_videos?: Maybe<Videos_Mutation_Response>;
  /** update single row of the table: "videos" */
  update_videos_by_pk?: Maybe<Videos>;
};


/** mutation root */
export type Mutation_RootDelete_VideosArgs = {
  where: Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Videos_By_PkArgs = {
  id: Scalars['uuid'];
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
export type Mutation_RootUpdate_VideosArgs = {
  _set?: Maybe<Videos_Set_Input>;
  where: Videos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Videos_By_PkArgs = {
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
  /** fetch data from the table: "videos" */
  videos: Array<Videos>;
  /** fetch aggregated fields from the table: "videos" */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
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
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "videos" */
  videos: Array<Videos>;
  /** fetch aggregated fields from the table: "videos" */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
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
  id: Scalars['uuid'];
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

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "videos" */
export type Videos = {
  __typename?: 'videos';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
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
  count: Scalars['Int'];
  max?: Maybe<Videos_Max_Fields>;
  min?: Maybe<Videos_Min_Fields>;
};


/** aggregate fields of "videos" */
export type Videos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Videos_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "videos". All fields are combined with a logical 'AND'. */
export type Videos_Bool_Exp = {
  _and?: Maybe<Array<Videos_Bool_Exp>>;
  _not?: Maybe<Videos_Bool_Exp>;
  _or?: Maybe<Array<Videos_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "videos" */
export enum Videos_Constraint {
  /** unique or primary key constraint */
  VideosPkey = 'videos_pkey'
}

/** input type for inserting data into table "videos" */
export type Videos_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Videos_Max_Fields = {
  __typename?: 'videos_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Videos_Min_Fields = {
  __typename?: 'videos_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
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
  id?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: videos */
export type Videos_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "videos" */
export enum Videos_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "videos" */
export type Videos_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "videos" */
export enum Videos_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type GetVideosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVideosQuery = { __typename?: 'query_root', videos: Array<{ __typename?: 'videos', created_at: string, description?: string | null | undefined, id: string, title: string, updated_at?: string | null | undefined }> };


export const GetVideosDocument = gql`
    query GetVideos {
  videos {
    created_at
    description
    id
    title
    updated_at
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