import React from 'react';
import { Dimensions, Image, View } from 'react-native';
import styled from 'styled-components';
import { gql, useQuery } from '@apollo/client';
import AppLoading from 'expo-app-loading';
import { SCardContent, SCardImage } from '../components/Card';
import { SCardTitle, SParagraph } from '../components/styles/Typography';
import ListItem from '../components/ListItem';

const SListingDetailsCard = styled(View)`
  margin-bottom: 20px;
`;
const GET_PRODUCT_QUERY = gql`
  query($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      photo {
        image {
          publicUrlTransformed
        }
      }
      owner {
        name
        photo {
          image {
            publicUrlTransformed
          }
        }
        _productsMeta {
          count
        }
      }
    }
  }
`;
export default function ListingDetailsScreen({ navigation, route }) {
  const { id } = route.params;
  const { data, loading } = useQuery(GET_PRODUCT_QUERY, {
    variables: { id },
  });
  return (
    <View>
      {loading && !data ? (
        <AppLoading />
      ) : (
        <>
          <SListingDetailsCard>
            <SCardImage
              source={{ uri: data.Product.photo.image.publicUrlTransformed }}
            />
            <SCardContent>
              <SCardTitle>{data.Product.name}</SCardTitle>
              <SParagraph>${data.Product.price}</SParagraph>
            </SCardContent>
          </SListingDetailsCard>
          {data.Product.owner ? (
            <ListItem
              title={data.Product.owner.name}
              subtitle={`${data.Product.owner._productsMeta.count} Listings`}
              photo={data.Product.owner.photo.image.publicUrlTransformed}
            />
          ) : null}
        </>
      )}
    </View>
  );
}
