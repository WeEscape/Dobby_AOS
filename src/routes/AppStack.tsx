// 앱 라우터
import React, { useLayoutEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from 'react-navigation';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
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

const DailyStack = () => {
  return (
    <Stack.Navigator initialRouteName="dalyStack">
      <Stack.Screen name="dalyStack" component={Daily} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
const WeeklyStack = () => {
  return (
    <Stack.Navigator initialRouteName="weeklyStack">
      <Stack.Screen name="weeklyStack" component={Weekly} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
const RegisterStack = () => {
  return (
    <Stack.Navigator initialRouteName="registerStack">
      <Stack.Screen name="registerStack" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
const MonthlyStack = () => {
  return (
    <Stack.Navigator initialRouteName="monthlyStack">
      <Stack.Screen name="monthlyStack" component={Monthly} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

// const RegisterStack = ({ navigation, route }) => {
//   //등록 페이지에서 아래의 탭 아나보이게 처리하는 로직
//   useLayoutEffect(() => {
//     const routeName = getFocusedRouteNameFromRoute(route);
//     console.log('routeName1', route);
//     console.log('routeName2', routeName);
//     console.log('routeName3', navigation);
//     if (route === '등록') {
//       navigation.setOptions({ tabBarStyle: { display: 'none' } });
//     }
//   }, [navigation, route]);

//   return (
//     <Stack.Navigator initialRouteName="등록1">
//       <Stack.Screen name="등록1" component={Register} options={{ headerShown: false }} />
//       {/* <Stack.Screen name="SecondView" component={u} options={{ headerShown: false }} /> */}
//     </Stack.Navigator>
//   );
// };

const AppStatck = ({ navigation, router }) => {
  console.log('===rotuer_app', router);
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={({ route }) => ({ headerShown: false })} initialRouteName="weekly">
        <Tab.Screen
          name="daily"
          component={DailyStack}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return <Image style={styles.tabLogo} source={focused ? Daily_ON : Daily_OFF} />;
            },
          }}
        />
        <Tab.Screen
          name="weekly"
          component={WeeklyStack}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return <Image style={styles.tabLogo} source={focused ? Weekly_ON : Weekly_OFF} />;
            },
          }}
        />
        <Tab.Screen
          name="register"
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
          name="monthly"
          component={MonthlyStack}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return <Image style={styles.tabLogo} source={focused ? Monthly_ON : Monthly_OFF} />;
            },
          }}
        />
        <Tab.Screen
          name="more"
          component={More}
          options={{
            tabBarIcon: ({ size, focused, color }) => {
              return <Image style={styles.tabLogo} source={focused ? More_ON : More_OFF} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
