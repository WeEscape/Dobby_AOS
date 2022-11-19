import React, { useLayoutEffect, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, SafeAreaView, Text, View, Button, TextInput } from 'react-native';
import styled from 'styled-components/native';

const Register = ({ navigation, router }) => {
  useEffect(() => {
    console.log('===register1', navigation.navigate);
    console.log('===router', router);
  }, [navigation, router]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <TextInput></TextInput>
      <Text> test1</Text>
      <Text> test2</Text>
      <Text> test3</Text>
      <Text> test4</Text>
      <Text> test5</Text>
      {/* <Button title="go back test" onPress={() => navigation.goBack()}></Button> */}
      {/* <Button>test</Button> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    margin: 28,
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%',
  },
  input: {
    
  }
});
export default Register;
