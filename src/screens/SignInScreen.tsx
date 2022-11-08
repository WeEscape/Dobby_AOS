import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { StyleSheet, ActivityIndicator, View, Alert } from 'react-native';
import { login, logout, getProfile as getKakaoProfile, unlink } from '@react-native-seoul/kakao-login';
import { Image, Text, Button, Icon } from '@rneui/themed';
import EncryptedStorage from 'react-native-encrypted-storage';
import IconImage from '../assets/icon/logo.png';
import { API_HOST } from '@env';
import userSlice from '../slices/user';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';

const $colorWhite = '#ffffff';
const $TITLEFONTCOLOR = '#414141';

const SignInScreen = () => {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector((state: RootState) => !!state.user.accessToken);

  const signInWithKakao = async (): Promise<void> => {
    if (loading) {
      return;
    }
    try {
      const token = await login();
      setResult(JSON.stringify(token));
      console.log('token', token?.accessToken);
      console.log('env', API_HOST);
      setLoading(true);
      const response = await axios.post(`${API_HOST}/auth/login`, {
        social_access_token: token?.accessToken,
        social_type: 'kakao',
      });

      console.log('response', response);

      setLoading(false);

      dispatch(
        userSlice.actions.setToken({
          accessToken: response.data.accessToken,
          // refreshToken: response.data.refreshToken,
        })
      );

      await EncryptedStorage.setItem('refreshToken', response.data.refreshToken);
      Alert.alert('알림', '로그인에 성공했습니다.');
    } catch (err) {
      const axiosError = err as AxiosError;
      // console.error('login err', err.response);
      if (axiosError.response) {
        Alert.alert('알림', axiosError.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };
  //router단으로 올리기
  //router 단에서 스플레쉬 이미지 추가
  //앱 실행 시, 토큰이 있으면 토큰을 재발급 시키고 로그인하는 코드
  useEffect(() => {
    const getTokenAndRefresh = async () => {
      try {
        const token = await EncryptedStorage.getItem('refreshToken');
        console.log('token', token);
        if (!token) {
          return;
        }
        const response = await axios.post(
          `${API_HOST}/auth/tokens`,
          {
            refresh_token: token,
          },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );

        dispatch(
          userSlice.actions.setUser({
            name: response.data.name,
            email: response.data.email,
            accessToken: response.data.accessToken,
          })
        );
        await EncryptedStorage.setItem('refreshToken', response.data.refreshToken);
      } catch (error) {
        console.log('err', error);
        if ((error as AxiosError).response?.data.code === 'expired') {
          Alert.alert('알림', '다시 로그인 해주세요.');
        }
      } finally {
        //TODO: 스플래시 스크린 없애기
      }
    };
    getTokenAndRefresh();
  }, [dispatch]);

  // console.log('result', result);

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
        disabled={loading}
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
