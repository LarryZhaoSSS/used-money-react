import React from 'react';
import { useTags } from 'useTags';
import { useParams } from 'react-router-dom';
type Params = {
  id: string;
};
export const Tag = () => {
  const { findTag } = useTags();
  const { id } = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <div>
      tag edit {id} - {tag.name}
    </div>
  );
};
