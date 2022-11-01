import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStatck from './AppStack';
import AuthStack from './AuthStack';

const Router = () => {
  //로그인 스토어에 로그인 정보 return 해주고 있으면 home 스크린 없으면 auth스크린으로 이동
  const [authData, setAuthData] = useState(false);

  return <NavigationContainer>{authData ? <AppStatck /> : <AuthStack />}</NavigationContainer>;
};

export default Router;
