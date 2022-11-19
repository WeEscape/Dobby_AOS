import React, { useLayoutEffect, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Button } from 'react-native';
import styled from 'styled-components/native';
import HeaderGoBack from '../components/common/header/HeaderGoBack';

// const ButtonTest = styled.Button`
//   width: "100",
//   height: "100"
// `;

const Register = ({ navigation, router }) => {
  useEffect(() => {
    console.log('===register', navigation.navigate);
  }, [navigation, router]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      {/* <HeaderGoBack /> */}
      <Text> test</Text>
      <Button title="go back test" onPress={() => navigation.goBack()}></Button>
      {/* <Button>test</Button> */}
    </View>
  );
};

export default Register;
