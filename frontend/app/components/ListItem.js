import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import styled from 'styled-components';
import { SCardContent, SCardImage } from './Card';
import { SCardTitle, SParagraph } from './styles/Typography';

const windowWidth = Dimensions.get('window').width;
const SListItem = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 20px;
`;
const SListItemImage = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: ${parseInt(windowWidth / 2)}px;
  margin-right: 20px;
`;
const SListItemContent = styled(View)`
  display: flex;
  flex-direction: column;
`;
export default function ListItem({ title, subtitle, photo }) {
  return (
    <SListItem>
      <SListItemImage source={{ uri: photo }} />
      <SListItemContent>
        <SCardTitle>{title}</SCardTitle>
        <SCardTitle colorGray>{subtitle}</SCardTitle>
      </SListItemContent>
    </SListItem>
  );
}
