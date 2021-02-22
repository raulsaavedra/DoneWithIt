import AppLoading from 'expo-app-loading';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import {
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { gql, useQuery } from '@apollo/client';
import { useRoute } from '@react-navigation/native';
import Card from '../components/Card';
import { SView } from '../components/styles/View';
import { UserContext } from '../components/UserContext';
import { SButton, SButtonText } from '../components/styles/Button';

const CardList = styled(View)`
  display: flex;
  flex-direction: column;
`;
const SLogoutButton = styled(SButton)`
  margin-bottom: 50px;
`;

const GET_PRODUCT_QUERY = gql`
  query {
    allProducts {
      id
      name
      price
      photo {
        image {
          publicUrlTransformed
        }
      }
      owner {
        name
      }
    }
  }
`;
export default function ListingsScreen({ navigation }) {
  const { data: dataListings, loading, error } = useQuery(GET_PRODUCT_QUERY);
  const { user, setUser } = useContext(UserContext);
  const route = useRoute();
  useEffect(() => {
    if (user === null && route && route && route.name !== ('Home' || 'Login')) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }
  }, [user, route, navigation]);
  if (error) {
    return <Text>{JSON.stringify(error)}</Text>;
  }

  return (
    <SView>
      {loading || !dataListings ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <CardList>
            <FlatList
              data={dataListings.allProducts}
              renderItem={({ item }) => (
                <TouchableWithoutFeedback
                  onPress={() =>
                    navigation.navigate('ListingDetails', { id: item.id })
                  }
                >
                  <Card data={item} />
                </TouchableWithoutFeedback>
              )}
              ListHeaderComponent={
                <SLogoutButton onPress={() => setUser(null)}>
                  <SButtonText>Logout</SButtonText>
                </SLogoutButton>
              }
              keyExtractor={(item) => `${item.id}`}
            />
          </CardList>
        </View>
      )}
    </SView>
  );
}
