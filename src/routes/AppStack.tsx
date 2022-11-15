// 앱 라우터
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Image } from '@rneui/themed';
import Daily from '../screens/Daily';
import Weekly from '../screens/Weekly';
import Register from '../screens/Register';
import Monthly from '../screens/Monthly';
import More from '../screens/More';

// import Daily_OFF from '../assets/icon/daily_off.svg';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppStatck = () => {
  // 탭스크린 추가
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="일간"
          component={Daily}
          options={{
            title: '일간',
            tabBarIcon: ({ size, focused, color }) => {
              return <View>{/* <Daily_OFF width="100%" height="100%" /> */}</View>;
            },
          }}
        />
        <Tab.Screen name="주간" component={Weekly} />
        <Tab.Screen name="등록" component={Register} />
        <Tab.Screen name="월간" component={Monthly} />
        <Tab.Screen name="더보기" component={More} />
      </Tab.Navigator>
    </>
  );
};

export default AppStatck;
