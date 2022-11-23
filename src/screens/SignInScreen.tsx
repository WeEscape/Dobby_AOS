import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { StyleSheet, ActivityIndicator, View, Alert } from 'react-native';
import { login, loginWithKakaoAccount, logout, getProfile as getKakaoProfile, unlink, KakaoProfile } from '@react-native-seoul/kakao-login';
import { Image, Text, Button, Icon } from '@rneui/themed';
import EncryptedStorage from 'react-native-encrypted-storage';
import IconImage from '../assets/icon/logo.png';
import KakaoLogoImage from '../assets/icon/kakao_logo.png';
import { API_HOST } from '@env';
import userSlice from '../slices/user';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../store';

const $colorWhite = '#ffffff';
const $TITLEFONTCOLOR = '#414141';

const SignInScreen = () => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(false);
  const [errorStatus, setErrorStatus] = useState(0);
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);

  const signInWithKakao = async (): Promise<void> => {
    // if (loading) {
    //   return;
    // }
    try {
      const token = await getKakaoProfile();

      setResult(token);
      console.log('token', token);

      setLoading(true);
      const response = await axios.post(`${API_HOST}/api/auth/login`, {
        social_id: token?.id,
        social_type: 'kakao',
      });

      console.log('response', response);

      // setLoading(false);

      dispatch(
        userSlice.actions.setToken({
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        })
      );

      await EncryptedStorage.setItem('refreshToken', response.data.refreshToken);
      Alert.alert('알림', '로그인에 성공했습니다.');
    } catch (err) {
      const axiosError = err as AxiosError;
      if (axiosError.response) {
        setErrorStatus(axiosError.response.status);

        console.log('error', axiosError.response);
        Alert.alert('알림', axiosError.response.data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // console.log('result', result);
    // // const profile = await getProfile();
    // console.log('error로 분기 처리1', errorStatus);

    if (errorStatus === 404) {
      const COLOR = ['Blue', 'Cyan', 'Green', 'Pink', 'Purple', 'Red', 'Orange', 'Yellow', 'Brown', 'Black'];
      const PICKCOLOR = Math.floor(Math.random() * COLOR.length);
      const response = axios.post(`${API_HOST}/api/auth/register`, {
        social_id: result?.id,
        social_type: 'kakao',
        user_name: result?.nickname,
        profile_image_url: result?.profileImageUrl,
        profile_color: COLOR[PICKCOLOR],
        // authorize_code: 'kakao',
      });
      console.log('회원가입response', response);
      dispatch(
        userSlice.actions.setUser({
          user_id: response.data.user_id,
          social_id: response.data.social_id,
          social_type: response.data.social_type,
          user_name: response.data.name,
          profile_image_url: response.data.profileImageUrl,
          profile_color: response.data.profile_color,
          accessToken: response.data.accessToken,
          is_connect: response.data.is_connect,
          last_connected_at: response.data.last_connected_at,
          created_at: response.data.created_at,
          updated_at: response.data.updated_at,
          deleted_at: response.data.deleted_at,
          group_ids: response.data.group_ids,
        })
      );
    }
  }, [errorStatus]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={IconImage} />
      <Text style={styles.text}>가사 분담에서 해방하다</Text>
      <Text style={styles.EnText}>DOBBY</Text>
      <Button
        title="카카오로 계속하기"
        buttonStyle={{
          backgroundColor: 'rgb(247, 230, 0)',
          borderRadius: 12,
        }}
        titleStyle={{ color: '#414141', fontFamily: 'Noto Sans KR', fontSize: 14, fontWeight: '700' }}
        containerStyle={{
          width: 300,
          marginHorizontal: 50,
          marginVertical: 15,
        }}
        disabled={loading}
        onPressIn={() => {
          signInWithKakao();
        }}
      >
        <Image style={styles.kakaoIcon} source={KakaoLogoImage} />
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
  kakaoIcon: {
    width: 16,
    height: 14,
    paddingRight: 10,
  },
  text: {
    paddingLeft: 20,
    fontFamily: 'NotoSansKR_500Medium',
    fontWeight: '500',
  },
});
