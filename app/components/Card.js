import React from 'react';
import { View, Dimensions, Image, Text } from 'react-native';
import styled from 'styled-components';
import { SView } from './styles/View';

import { SCardTitle, SParagraph } from './styles/Typography';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SCard = styled(View)`
  width: 100%;
  height: 340px;
  border-radius: 40px;
  margin-bottom: 50px;
  overflow: hidden;
  background: white;
`;

const SCardImage = styled(Image)`
  width: 100%;
  height: 200px;
`;
const SCardContent = styled(View)`
  padding: 15px 20px;
`;

export default function Card({ data }) {
  return (
    <SCard>
      <SCardImage resizeMode="cover" source={require('../assets/couch.jpg')} />
      <SCardContent>
        <SCardTitle>Couch for sale!</SCardTitle>
        <SCardTitle>Seller: {data.name}</SCardTitle>
        <SParagraph>$100</SParagraph>
      </SCardContent>
    </SCard>
  );
}
