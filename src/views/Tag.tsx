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
export const Tag = () => {
  const { findTag } = useTags();
  const { id } = useParams<Params>();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name='arrow-left' />
        <span>编辑标签</span>
        <div className='space'></div>
      </Topbar>
      <div>
        <InputItem label='备注' placeholder='请输入备注' />
        <div>
          <Button>新增标签</Button>
        </div>
      </div>
    </Layout>
  );
};
