import React from 'react';
import { Layout } from 'components/Layout';
import { useTags } from 'hooks/useTags';
import styled from 'styled-components';
import { Icon } from 'components/Icon';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button';

const TagList = styled.ol`
  font-size: 16px;
  background-color: white;
  > li {
    border-bottom: 1px solid #d5d5d9;
    line-height: 20px;
    margin-left: 16px;

    > a {
      padding: 12px 16px 12px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Space = styled.div`
  height: 16px;
`;
export const Tags = () => {
  const { tags, addTag } = useTags();
  return (
    <Layout>
      <TagList>
        {tags.map((tag) => {
          return (
            <li key={tag.id}>
              <Link to={`/tags/${tag.id}`}>
                <span className='oneLine'> {tag.name}</span>
                <Icon name='arrow-right' />
              </Link>
            </li>
          );
        })}
      </TagList>
      <Center>
        <Space />
        <Space />
        <Space />
        <Button
          onClick={() => {
            addTag();
          }}
        >
          新增标签
        </Button>
      </Center>
    </Layout>
  );
};
