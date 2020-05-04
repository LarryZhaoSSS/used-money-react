import React from 'react';
import { Layout } from 'components/Layout';
import { useTags } from 'useTags';

export const Tags = () => {
  const { tags, setTags } = useTags();
  return (
    <Layout>
      <ol>
        {tags.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
      </ol>
    </Layout>
  );
};
