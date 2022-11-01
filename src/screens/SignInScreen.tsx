import React, { useState } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { login, logout, getProfile as getKakaoProfile, unlink } from '@react-native-seoul/kakao-login';
import { Image, Text, Button, Icon } from '@rneui/themed';
import IconImage from '../assets/icon/logo.png';

const $colorWhite = '#ffffff';
const $TITLEFONTCOLOR = '#414141';

const SignInScreen = () => {
  const [result, setResult] = useState<string>('');

  const signInWithKakao = async (): Promise<void> => {
    try {
      const token = await login();
      setResult(JSON.stringify(token));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('login err', err);
    }
  };

  console.log('result', result);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={IconImage} />
      <Text style={styles.text}>가사 분담에서 해방하다</Text>
      <Text style={styles.EnText}>DOBBY</Text>
      <Button
        title="카카오로 계속하기"
        buttonStyle={{
          backgroundColor: 'rrgb(247, 230, 0)',
          borderRadius: 12,
        }}
        titleStyle={{ color: '#414141', fontFamily: 'Noto Sans KR', fontSize: 14, fontWeight: '700' }}
        containerStyle={{
          width: 300,
          marginHorizontal: 50,
          marginVertical: 15,
        }}
        onPress={() => {
          signInWithKakao();
        }}
      >
        {/* 카카오 아이콘 넣기 */}
        <Icon name="home" color="white" />
        카카오로 계속하기
      </Button>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  EnText: {
    color: $TITLEFONTCOLOR,
    fontFamily: 'OpenSans',
    fontSize: 44,
    fontWeight: '800',
  },
  container: {
    alignItems: 'center',
    backgroundColor: $colorWhite,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 100,
    marginBottom: 20,
    resizeMode: 'cover',
    width: 50,
  },
  text: {
    fontFamily: 'NotoSansKR_500Medium',
    fontWeight: '500',
  },
});
