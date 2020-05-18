import React from 'react';
import { useTags } from 'useTags';
import { useParams } from 'react-router-dom';
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
  const { findTag, updateTag } = useTags();
  const { id: idString } = useParams<Params>();
  const tag = findTag(parseInt(idString));
  return (
    <Layout>
      <Topbar>
        <Icon name='arrow-left' />
        <span>编辑标签</span>
        <div className='space'></div>
      </Topbar>
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
          <Button>删除标签</Button>
        </CenterButtonWrapper>
      </div>
    </Layout>
  );
};
