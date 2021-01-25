import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styled from 'styled-components';
import { SButton, SButtonText } from '../components/styles/Button';
import { SView } from '../components/styles/View';

const SImageBackground = styled(ImageBackground)`
  flex: 1;
`;

const SButtonGroup = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  margin-bottom: 20px;
`;

const SImageContainer = styled(View)`
  margin-top: 100px;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const SImage = styled(Image)`
  width: 200px;
  height: 200px;
`;

export default function WelcomeScreen({ navigation }) {
  return (
    <SImageBackground source={require('../assets/background.jpg')}>
      <SView>
        <SImageContainer>
          <SImage source={require('../assets/logo-red.png')} />
        </SImageContainer>
        <SButtonGroup>
          <SButton colorPrimary>
            <SButtonText onPress={() => navigation.navigate('Login')}>
              Login
            </SButtonText>
          </SButton>
          <SButton colorSecondary>
            <SButtonText>Register</SButtonText>
          </SButton>
        </SButtonGroup>
      </SView>
    </SImageBackground>
  );
}
