import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import styled from 'styled-components';
import { SView } from '../components/styles/View';
import { SButton, SButtonText } from '../components/styles/Button';

const SBackground = styled(View)`
  background: ${(props) => props.theme.colors.primary};
  flex: 1;
`;
const SLogin = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px 60px;
`;

const SFormGroup = styled(View)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 30px;
`;
const SLabel = styled(Text)`
  font-family: 'OpenSans_600SemiBold';
  font-size: 20px;
  color: white;
  margin-bottom: 10px;
`;
const SInput = styled(TextInput)`
  width: 100%;
  height: 50px;
  border: 2px solid white;
  border-radius: 10px;
  font-size: 20px;
  padding: 0px 10px;
  color: white;
`;
export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SBackground>
      <SView>
        <SLogin>
          <SFormGroup>
            <SLabel>Email</SLabel>
            <SInput onChangeText={(value) => setEmail(value)} value={email} />
          </SFormGroup>
          <SFormGroup>
            <SLabel>Password</SLabel>
            <SInput
              onChangeText={(value) => setPassword(value)}
              value={password}
            />
          </SFormGroup>
          <SButton
            colorSecondary
            onPress={() => navigation.navigate('Listings')}
          >
            <SButtonText>Login</SButtonText>
          </SButton>
        </SLogin>
      </SView>
    </SBackground>
  );
}
