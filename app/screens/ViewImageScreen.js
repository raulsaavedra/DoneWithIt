import React from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components';
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
  background: red;
  top: 30px;
  left: 30px;
`;
const SDeleteIcon = styled(View)`
  width: 50px;
  height: 50px;
  position: absolute;
  background: blue;
  top: 30px;
  right: 30px;
`;
const SFullImage = styled(Image)`
  width: 100%;
  height: 100%;
`;
export default function ViewImageScreen() {
  return (
    <SViewImage>
      <SCloseIcon />
      <SDeleteIcon />
      <SFullImage
        resizeMode="contain"
        source={require('../assets/chair.jpg')}
      />
    </SViewImage>
  );
}
