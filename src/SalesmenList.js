import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when it is ready
const SalesmenList = ({ data: {loading, salesmen} }) => {
  if (loading) {
    return <div>Loading</div>;
  } else {
    return (
      <ul>
        {salesmen.map(salesman =>
          <li key={salesman.id}>
            {salesman.name}
            <ul>
              {salesman.phones.map(phone =>
                <li>{phone.name}</li>
              )}
            </ul>
          </li>
        )}
      </ul>
    );
  }
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList here)
export default graphql(gql`
  query {
    salesmen {
      id
      name
      phones {
        name
      }
    }
  }
`)(SalesmenList);

   