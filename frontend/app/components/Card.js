import React from 'react';
import { View, Image, Text } from 'react-native';
import styled from 'styled-components';
import { SView } from './styles/View';

import { SCardTitle, SParagraph } from './styles/Typography';

const SCard = styled(View)`
  width: 100%;
  height: 350px;
  border-radius: 40px;
  margin-bottom: 50px;
  overflow: hidden;
  background: white;
`;

export const SCardImage = styled(Image)`
  width: 100%;
  height: 250px;
`;
export const SCardContent = styled(View)`
  padding: 15px 20px;
`;

export default function Card({ data }) {
  return (
    <SCard>
      <SCardImage
        resizeMode="cover"
        source={{ uri: data.photo.image.publicUrlTransformed }}
      />
      <SCardContent>
        <SCardTitle>{data.name}</SCardTitle>
        <SParagraph>${data.price}</SParagraph>
      </SCardContent>
    </SCard>
  );
}
