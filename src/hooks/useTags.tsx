import { useState, useEffect } from 'react';
import { createId } from 'lib/createId';
import { useUpdate } from './useUpdate';
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  const findTag = (id: number) => tags.filter((tag) => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };

  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        { id: createId(), name: '衣' },
        { id: createId(), name: '食' },
        { id: createId(), name: '住' },
        { id: createId(), name: '行' },
      ];
    }
    setTags(localTags);
  }, []);
  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);
  const updateTag = (id: number, { name }: { name: string }) => {
    setTags(
      tags.map((tag) => {
        if (id === tag.id) {
          return {
            id,
            name,
          };
        } else {
          return tag;
        }
      })
    );
  };
  const deleteTag = (id: number) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1);
    setTags(tagsClone);
  };
  const addTag = () => {
    const tagName = window.prompt('请输入新的标签名字');
    console.log(tagName);
    if (tagName !== null && tagName !== '') {
      setTags([...tags, { id: createId(), name: tagName }]);
    }
  };
  return {
    tags,
    setTags,
    findTag,
    updateTag,
    deleteTag,
    addTag,
  };
};
export { useTags };
