import React from 'react';
import styled from 'styled-components';
const Label = styled.label`
  display: flex;
  align-items: center;
  > span {
    margin-right: 16px;
    white-space: nowrap;
  }
  > input {
    display: block;
    width: 100%;
    height: 44px;
    background: none;
    border: none;
  }
`;
type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
export const InputItem: React.FC<Props> = (props) => {
  const { type, label, placeholder, defaultValue, ...rest } = props;
  return (
    <Label>
      <span>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onBlur={props.onBlur}
        {...rest}
      />
    </Label>
  );
};
