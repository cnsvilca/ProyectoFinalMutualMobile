import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from './src/screens/profile/ProfileScreen';
import { PaymentListScreen } from './src/screens/payment-list/PaymentListScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS, SPACING } from './src/utils/theme'
import { UserProvider } from './src/contexts/UserContext';

const Tab = createBottomTabNavigator()

const TAB_ICON = {
  Profile: 'face-man-profile',
  Payment: 'calendar-clock'
}

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name]
  return {
    tabBarIcon: ({ size, color }) => (
      <MaterialCommunityIcons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar
  }
}

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name='Profile' options={{ title: 'Inicio' }} component={ProfileScreen}></Tab.Screen>
            <Tab.Screen name='Payment' options={{ title: 'Cuotas' }} component={PaymentListScreen}></Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBar style='auto'></StatusBar>
      </UserProvider>
    </>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: SPACING.xxxl,
    paddingBottom: SPACING.xs,
    paddingTop: SPACING.xs
  }
})
