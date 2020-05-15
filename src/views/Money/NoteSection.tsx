import styled from 'styled-components';
import React, { ChangeEventHandler } from 'react';
import { InputItem } from 'components/InputItem';
const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 10px 16px;
  font-size: 14px;
`;
type Props = {
  value: string;
  onChange: (value: string) => void;
};
export const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <InputItem
        label='备注'
        type='text'
        placeholder='在这里添加备注'
        value={note}
        onChange={onChange}
      />
    </Wrapper>
  );
};
