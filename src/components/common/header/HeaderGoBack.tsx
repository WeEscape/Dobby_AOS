import React from 'react';
import styled from 'styled-components/native';
import { Icon } from '@rneui/base';

const Pressable = styled.Pressable``;
const IconContainer = styled.View<{ pressed: boolean }>`
  opacity: ${({ pressed }) => (pressed ? 0.55 : 1)};
`;

const HeaderGoBack = (navigation: any) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <Pressable onPress={goBack} hitSlop={8}>
      {({ presssed }) => (
        <IconContainer pressed={presssed}>
          <Icon size={30} name={'back'} color={'rgba(0,0,0,0.9)'} />
        </IconContainer>
      )}
    </Pressable>
  );
};

export default HeaderGoBack;
