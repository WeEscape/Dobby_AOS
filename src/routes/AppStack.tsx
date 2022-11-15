// 앱 라우터
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet } from 'react-native';
import { Image } from '@rneui/themed';
import Daily from '../screens/Daily';
import Weekly from '../screens/Weekly';
import Register from '../screens/Register';
import Monthly from '../screens/Monthly';
import More from '../screens/More';

//이미지 import
import Daily_OFF from '../assets/icon/daily_off.png';
import Daily_ON from '../assets/icon/daily_on.png';
import Weekly_OFF from '../assets/icon/weekly_off.png';
import Weekly_ON from '../assets/icon/weekly_on.png';
import Monthly_OFF from '../assets/icon/monthly_off.png';
import Monthly_ON from '../assets/icon/monthly_on.png';
import Register_OFF from '../assets/icon/register_off.png';
import Register_ON from '../assets/icon/register_on.png';
import More_OFF from '../assets/icon/more_off.png';
import More_ON from '../assets/icon/more_on.png';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppStatck = () => {
  // 탭스크린 추가
  return (
    <>
      <Tab.Navigator initialRouteName="주간">
        <Tab.Screen
          name="일간"
          component={Daily}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return <Image style={styles.tabLogo} source={focused ? Daily_ON : Daily_OFF} />;
            },
          }}
        />
        <Tab.Screen
          name="주간"
          component={Weekly}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return <Image style={styles.tabLogo} source={focused ? Weekly_ON : Weekly_OFF} />;
            },
          }}
        />
        <Tab.Screen
          name="등록"
          component={Register}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return <Image style={styles.tabLogo} source={focused ? Register_ON : Register_OFF} />;
            },
          }}
        />
        <Tab.Screen
          name="월간"
          component={Monthly}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return <Image style={styles.tabLogo} source={focused ? Monthly_ON : Monthly_OFF} />;
            },
          }}
        />
        <Tab.Screen
          name="더보기"
          component={More}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return <Image style={styles.tabLogo} source={focused ? More_ON : More_OFF} />;
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  tabLogo: {
    width: 24,
    height: 24,
  },
});

export default AppStatck;
