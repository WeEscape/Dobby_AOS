// 앱 라우터
import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
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

const RegisterStack = ({ navigation, route }) => {
  //등록 페이지에서 아래의 탭 아나보이게 처리하는 로직
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log('routeName', routeName);
    if (routeName === '등록') {
      navigation.setOptions({ tabBarStyle: { display: 'none' } });
    }
  }, [navigation, route]);
  return (
    <Stack.Navigator initialRouteName="등록">
      <Stack.Screen name="등록" component={Register} options={{ headerShown: false }} />
      <Stack.Screen name="SecondView" component="" options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const AppStatck = ({ navigation, route }) => {
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
          component={RegisterStack}
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
