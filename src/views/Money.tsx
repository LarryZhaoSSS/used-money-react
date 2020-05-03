import React from 'react';
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
export const Money = () => {
  return (
    <MyLayout>
      <TagsSection />
      <NoteSection />
      <CategorySection>
       
      </CategorySection>
      <NumberPadSection>
        
      </NumberPadSection>
    </MyLayout>
  );
};
