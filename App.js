import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styled, { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';
import Listings from './app/screens/Listings';
import Login from './app/screens/Login';

const SSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

const theme = {
  colors: {
    primary: '#DD5A4D',
    secondary: '#3D6E70',
    tertiary: '#8CC2C2',
  },
};

const SWrapper = styled(View)`
  background: #f9f6f7;
  flex: 1;
`;
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <SSafeAreaView>
        <SWrapper>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={WelcomeScreen} />
              <Stack.Screen name="Listings" component={Listings} />
              <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
          </NavigationContainer>
        </SWrapper>
      </SSafeAreaView>
    </ThemeProvider>
  );
}
