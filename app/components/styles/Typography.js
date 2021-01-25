import { Text } from 'react-native';
import styled from 'styled-components';

export const SCardTitle = styled(Text)`
  font-size: 20px;
  font-family: 'OpenSans_600SemiBold';
  color: black;
  box-shadow: 5px 5px 5px black;
  margin-bottom: 8px;
`;
export const SParagraph = styled(Text)`
  font-size: 22px;
  font-family: 'OpenSans_700Bold';
  color: ${(props) => props.theme.colors.tertiary};
`;
