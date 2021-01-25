import AppLoading from 'expo-app-loading';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import Card from '../components/Card';
import { SView } from '../components/styles/View';

const CardList = styled(View)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export default function Listings() {
  const [people, setPeople] = useState(null);
  const getUsers = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    const { data } = response;
    return data;
  };
  useEffect(() => {
    getUsers().then((data) => {
      setPeople(data);
    });
  }, []);
  if (!people) {
    return <AppLoading />;
  }
  return (
    <SView>
      <CardList>
        <FlatList
          data={people}
          renderItem={({ item }) => <Card data={item} />}
          keyExtractor={(item) => item.id}
        />
      </CardList>
    </SView>
  );
}
