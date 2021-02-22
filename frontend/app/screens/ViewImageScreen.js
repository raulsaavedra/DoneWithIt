import React from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SView } from '../components/styles/View';
import { SImage } from './WelcomeScreen';

const SViewImage = styled(View)`
  position: relative;
  width: 100%;
  height: 100%;
  background: black;
`;

const SCloseIcon = styled(View)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 30px;
  left: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const SDeleteIcon = styled(View)`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const SViewImageIcon = styled(MaterialCommunityIcons)`
  font-size: 40px;
`;
const SFullImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
const SViewImageNav = styled(View)`
  margin-bottom: 40px;
`;
export default function ViewImageScreen() {
  return (
    <SViewImage>
      <SViewImageNav>
        <SCloseIcon>
          <SViewImageIcon name="close" color="white" />
        </SCloseIcon>
        <SDeleteIcon>
          <SViewImageIcon name="trash-can-outline" color="white" />
        </SDeleteIcon>
      </SViewImageNav>
      <SFullImage
        resizeMode="contain"
        source={require('../assets/chair.jpg')}
      />
    </SViewImage>
  );
}
