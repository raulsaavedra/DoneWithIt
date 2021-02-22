import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';

export const SButton = styled(TouchableOpacity)`
  background-color: ${(props) =>
    props.colorPrimary
      ? props.theme.colors.primary
      : props.colorSecondary
      ? props.theme.colors.secondary
      : 'orangered'};
  padding: 10px 20px;
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const SButtonText = styled(Text)`
  color: white;
  font-size: 20px;
  font-family: 'OpenSans_400Regular';
`;
