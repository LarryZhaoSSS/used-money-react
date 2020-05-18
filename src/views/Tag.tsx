import React from 'react';
import { useTags } from 'useTags';
import { useParams, useHistory } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { Icon } from 'components/Icon';
import { Button } from 'components/Button';
import styled from 'styled-components';
import { InputItem } from 'components/InputItem';
type Params = {
  id: string;
};
const Topbar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: #fff;
  .space {
    height: 16px;
    width: 16px;
  }
`;
const InputWrapper = styled.div`
  background: #fff;
  padding: 0 16px;
  margin-top: 16px;
`;
const CenterButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;
export const Tag = () => {
  const { findTag, updateTag, deleteTag } = useTags();
  const { id: idString } = useParams<Params>();
  const tag = findTag(parseInt(idString));
  const tagContent = (tag: { id: number; name: string }) => {
    return (
      <div>
        <InputWrapper>
          <InputItem
            onChange={(e) => {
              updateTag(tag.id, { name: e.target.value });
            }}
            value={tag.name}
            label='标签名'
            type='text'
            placeholder='请输入备注'
          />
        </InputWrapper>
        <CenterButtonWrapper>
          <Button
            onClick={() => {
              deleteTag(tag.id);
            }}
          >
            删除标签
          </Button>
        </CenterButtonWrapper>
      </div>
    );
  };
  const history = useHistory();
  const onClickBack = () => {
    history.goBack();
  };
  return (
    <Layout>
      <Topbar>
        <span onClick={() => onClickBack()}>
          <Icon name='arrow-left' />
        </span>

        <span>编辑标签</span>
        <div className='space'></div>
      </Topbar>
      {tag ? tagContent(tag) : <div>tag不存在</div>}
    </Layout>
  );
};
