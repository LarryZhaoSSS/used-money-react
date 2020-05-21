import React, { useState } from 'react';
import { Layout } from 'components/Layout';
import styled from 'styled-components';
import { TagsSection } from './Money/TagsSection';
import { NoteSection } from './Money/NoteSection';
import { CategorySection } from './Money/CategorySection';
import { NumberPadSection } from './Money/NumberPadSection';
import { useRecords } from '../hooks/useRecords';

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const CategoryWrapper = styled.div`
  background: #c4c4c4;
`;
type Category = '-' | '+';
const defaultFormData = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0,
};
function Money() {
  const [selected, setSelected] = useState(defaultFormData);
  type Selected = typeof selected;
  const onChange = (obj: Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj,
    });
  };
  const { addRecord } = useRecords();
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
    }

    setSelected(defaultFormData);
  };
  return (
    <MyLayout scrollTop={9999}>
      <TagsSection
        value={selected.tagIds}
        onChange={(tags) =>
          onChange({
            tagIds: tags,
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
      <CategoryWrapper>
        <CategorySection
          value={selected.category}
          onChange={(category) => {
            onChange({
              category,
            });
          }}
        ></CategorySection>
      </CategoryWrapper>

      <NumberPadSection
        value={selected.amount}
        onChange={(amount) => {
          onChange({
            amount,
          });
        }}
        onOk={() => {
          submit();
        }}
      ></NumberPadSection>
    </MyLayout>
  );
}
export { Money };
