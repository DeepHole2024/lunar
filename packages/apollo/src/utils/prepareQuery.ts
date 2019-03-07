import { DocumentNode } from 'graphql';
// eslint-disable-next-line import/no-extraneous-dependencies
import { DataProxy } from 'apollo-cache';

export default function prepareQuery<Vars = {}>(
  docOrQuery: DocumentNode | DataProxy.Query<Vars>,
): DataProxy.Query<Vars> {
  let query = docOrQuery;

  if ((query as DocumentNode).kind) {
    query = { query } as any;
  }

  return query as DataProxy.Query<Vars>;
}
