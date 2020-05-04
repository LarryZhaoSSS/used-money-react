import styled from 'styled-components';
import React from 'react';
const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 10px 16px;
  font-size: 14px;
  > label {
    display: flex;
    align-items: center;
    > span {
      margin-right: 16px;
      white-space: nowrap;
    }
    > input {
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
type Props = {
  value: string;
  onChange: (value: string) => void;
};
export const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input
          value={note}
          onChange={(e) => {
            props.onChange(e.target.value.trim());
          }}
          type='text'
          placeholder='在这里添加备注'
        />
      </label>
    </Wrapper>
  );
};
