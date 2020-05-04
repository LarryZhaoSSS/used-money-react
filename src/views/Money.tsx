import React, { useState } from 'react';
import { Layout } from 'components/Layout';
import styled from 'styled-components';
import { TagsSection } from './Money/TagsSection';
import { NoteSection } from './Money/NoteSection';
import { CategorySection } from './Money/CategorySection';
import { NumberPadSection } from './Money/NumberPadSection';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
type Category = '-' | '+';
function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0,
  });
  type Selected = typeof selected;
  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj,
    });
  };
  return (
    <MyLayout>
      <TagsSection
        value={selected.tags}
        onChange={(tags) =>
          onChange({
            tags,
          })
        }
      />
      <NoteSection
        value={selected.note}
        onChange={(note) => {
          onChange({
            note,
          });
        }}
      />
      <CategorySection
        value={selected.category}
        onChange={(category) => {
          onChange({
            category,
          });
        }}
      ></CategorySection>
      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => {
          onChange({
            amount,
          });
        }}
        onOk={() => {}}
      ></NumberPadSection>
    </MyLayout>
  );
}
export { Money };
