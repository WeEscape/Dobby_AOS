// 앱 라우터
import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { Image, Button } from '@rneui/themed';
import Daily from '../screens/Daily';
import Weekly from '../screens/Weekly';
import Register from '../screens/Register';
import Monthly from '../screens/Monthly';
import More from '../screens/More';
import HeaderGoBack from '../components/common/header/HeaderGoBack';
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

const DailyStack = () => {
  return (
    <Stack.Navigator initialRouteName="dalyStack" screenOptions={{ cardStyle: { backgroundColor: '#fff' } }}>
      <Stack.Screen name="dalyStack" component={Daily} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
const WeeklyStack = () => {
  return (
    <Stack.Navigator initialRouteName="weeklyStack" screenOptions={{ cardStyle: { backgroundColor: '#fff' } }}>
      <Stack.Screen name="weeklyStack" component={Weekly} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
const RegisterStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="registerStack" screenOptions={{ cardStyle: { backgroundColor: '#fff' } }}>
      <Stack.Screen
        name="registerStack"
        component={Register}
        options={{
          headerTitle: '집안일 등록',
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: '900',
          },
          headerStyle: {
            height: 50,
          },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => (
            <Button color="#fff" onPress={() => navigation.goBack()}>
              <HeaderGoBack />
            </Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
const MonthlyStack = () => {
  return (
    <Stack.Navigator initialRouteName="monthlyStack" screenOptions={{ cardStyle: { backgroundColor: '#fff' } }}>
      <Stack.Screen name="monthlyStack" component={Monthly} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const MoreStack = () => {
  return (
    <Stack.Navigator initialRouteName="moreStack" screenOptions={{ cardStyle: { backgroundColor: '#fff' } }}>
      <Stack.Screen name="moreStack" component={More} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

const AppStatck = ({ navigation, router }) => {
  console.log('===rotuer_app', router);
  return (
    // <NavigationContainer independent={true}>
    <Tab.Navigator screenOptions={({ route }) => ({ headerShown: false, tabBarActiveTintColor: '#1056FB', unmountOnBlur: true })} initialRouteName="일간">
      <Tab.Screen
        name="일간"
        component={DailyStack}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return <Image style={styles.tabLogo} source={focused ? Daily_ON : Daily_OFF} />;
          },
        }}
      />
      <Tab.Screen
        name="주간"
        component={WeeklyStack}
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
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tab.Screen
        name="월간"
        component={MonthlyStack}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return <Image style={styles.tabLogo} source={focused ? Monthly_ON : Monthly_OFF} />;
          },
        }}
      />
      <Tab.Screen
        name="더보기"
        component={MoreStack}
        options={{
          tabBarIcon: ({ size, focused, color }) => {
            return <Image style={styles.tabLogo} source={focused ? More_ON : More_OFF} />;
          },
        }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabLogo: {
    width: 24,
    height: 24,
  },
});

export default AppStatck;
// export default createAppContainer(AppStatck);
