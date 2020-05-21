import React, { useState } from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
  font-size: 24px;
  > ul {
    display: flex;
    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after {
        content: '';
        display: block;
        background: #333;
        height: 3px;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
      }
    }
  }
`;
type Props = {
  value: '-' | '+';
  onChange: (value: '-' | '+') => void;
};
export const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {
    '-': '支出',
    '+': '收入',
  };
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const category = props.value;

  return (
    <Wrapper>
      <ul>
        {categoryList.map((c) => (
          <li
            className={category === c ? 'selected' : ''}
            key={c}
            onClick={() => {
              props.onChange(c);
            }}
          >
            {categoryMap[c]}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};
