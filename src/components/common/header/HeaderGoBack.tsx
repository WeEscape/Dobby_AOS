import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { Image } from '@rneui/base';
import GoBack from '../../../assets/icon/Left_button.png';

const ImageBox = styled.Image`
  margin-left: 22px;
  width: 20px;
  height: 20px;
  background-color: 'transparent';
`;

const Pressable = styled.Pressable``;
const IconContainer = styled.View<{ pressed: boolean }>`
  opacity: ${({ pressed }) => (pressed ? 0.55 : 1)};
`;

const HeaderGoBack = () => {
  return (
    // <View>
    <ImageBox source={GoBack} />
    // </View>
  );
};

export default HeaderGoBack;
