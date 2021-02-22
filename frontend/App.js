import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useMemo, useRef, useState } from 'react';
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
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useAsyncStorage } from 'use-async-storage';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Card from './app/components/Card';
import Login from './app/screens/Login';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import { UserContext } from './app/components/UserContext';

const SSafeAreaView = styled(SafeAreaView)`
  flex: 1;
`;

const theme = {
  colors: {
    primary: '#DD5A4D',
    secondary: '#3D6E70',
    tertiary: '#8CC2C2',
    gray: '#7D7B7D',
  },
};

const SWrapper = styled(View)`
  background: #f9f6f7;
  flex: 1;
`;
const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: 'http://192.168.0.129:3000/api/graphql',
  cache: new InMemoryCache(),
});

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
  });

  const [user, setUser] = useAsyncStorage('user', null);
  const navigationRef = useRef(null);
  const userProviderValue = useMemo(() => ({ user, setUser }), [user, setUser]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ApolloProvider client={client}>
      <UserContext.Provider value={userProviderValue}>
        <ThemeProvider theme={theme}>
          <SSafeAreaView>
            <SWrapper>
              <NavigationContainer ref={navigationRef}>
                <Stack.Navigator>
                  <Stack.Screen name="Home" component={WelcomeScreen} />
                  <Stack.Screen name="Listings" component={ListingsScreen} />
                  <Stack.Screen
                    name="ListingDetails"
                    component={ListingDetailsScreen}
                  />
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="ViewImage" component={ViewImageScreen} />
                </Stack.Navigator>
              </NavigationContainer>
            </SWrapper>
          </SSafeAreaView>
        </ThemeProvider>
      </UserContext.Provider>
    </ApolloProvider>
  );
}
