import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { Alert } from 'react-native';
import { NativeBaseProvider } from 'native-base';

import AppStatck from './AppStack';
import AuthStack from './AuthStack';

import userSlice from '../slices/user';
import { useAppDispatch } from '../store';
import { useSelector } from 'react-redux';
import EncryptedStorage from 'react-native-encrypted-storage';
import SplashScreen from 'react-native-splash-screen';
import { RootState } from 'store/reducer';

const Stack = createStackNavigator();

const Router = () => {
  //로그인 스토어에 로그인 정보 return 해주고 있으면 home 스크린 없으면 auth스크린으로 이동
  const [authData, setAuthData] = useState(false);
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.user.access_token);

  SplashScreen.hide();
  // const token = EncryptedStorage.getItem('refreshToken');
  console.log('router_token1', EncryptedStorage.getItem('refreshToken'));
  console.log('isLoggedIn', isLoggedIn);

  useEffect(() => {
    const getTokenAndRefresh = async () => {
      const token = EncryptedStorage.getItem('refreshToken');
      console.log('router_token2', token);
    };
    getTokenAndRefresh();
    // setAuthData;
  }, [dispatch, isLoggedIn]);

  //router단으로 올리기
  //router 단에서 스플레쉬 이미지 추가
  //앱 실행 시, 토큰이 있으면 토큰을 재발급 시키고 로그인하는 코드
  // useEffect(() => {
  //   const getTokenAndRefresh = async () => {
  //     try {
  //       const token = await EncryptedStorage.getItem('refreshToken');
  //       console.log('token', token);
  //       if (!token) {
  //         SplashScreen.hide();
  //         return;
  //       }
  //       const response = await axios.post(
  //         `${API_HOST}/auth/tokens`,
  //         {
  //           refresh_token: token,
  //         },
  //         {
  //           headers: {
  //             authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );

  //       dispatch(
  //         userSlice.actions.setUser({
  //           name: response.data.name,
  //           email: response.data.email,
  //           accessToken: response.data.accessToken,
  //         })
  //       );
  //       await EncryptedStorage.setItem('refreshToken', response.data.refreshToken);
  //     } catch (error) {
  //       console.log('err', error);
  //       if ((error as AxiosError).response?.data.code === 'expired') {
  //         Alert.alert('알림', '다시 로그인 해주세요.');
  //       }
  //     } finally {
  //       SplashScreen.hide();
  //       //TODO: 스플래시 스크린 없애기
  //     }
  //   };
  //   getTokenAndRefresh();
  // }, [dispatch]);

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator screenOptions={({ route }) => ({ headerShown: false })} initialRouteName="signIn">
          {/* {authData ? ( */}
          <Stack.Screen name="Root" component={AppStatck} options={{ headerShown: false }} />
          {/* ) : ( */}
          <Stack.Screen name="signIn" component={AuthStack} options={{ headerShown: false }} />
          {/* )} */}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default Router;
