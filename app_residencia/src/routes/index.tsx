import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from "react-native-elements";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Categorias from "../pages/Categorias";

const TabNavigation = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <TabNavigation.Navigator screenOptions={{
      tabBarHideOnKeyboard:true,
      headerShown: false,
      tabBarStyle: { backgroundColor: '#7054B6', borderBottomWidth: 0, },
    }}>
      <TabNavigation.Screen
        name='HomeTabScreen'
        options={{ tabBarShowLabel:false, tabBarIcon:({color,size})=>(<Icon name="home" color="#000" type="font-awesome" size={24} />)}}
        component={Home}  
         />
      <TabNavigation.Screen
        name='CategoriasTabScreen'
        options={{ tabBarShowLabel:false, tabBarIcon:({color,size})=>(<Icon name="search" color="#000" type="font-awesome" size={24} />)}}
        component={Categorias} 
        />
    </TabNavigation.Navigator>
  );
}
const DrawerNavigation = createDrawerNavigator();
const NavigationDrawer = () => {
  return (
    <DrawerNavigation.Navigator>
      <DrawerNavigation.Screen
        name="TabNavigationScreen"
        options={{ title: 'Home' }}
        component={BottomTabNavigator} />
      <DrawerNavigation.Screen
        name="CategoriasDrawerScreen"
        options={{ title: 'Categorias' }}
        component={Categorias} />
    </DrawerNavigation.Navigator>
  );
}

const StackNavigation = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator screenOptions={{
        headerShown: false
      }}>
        <StackNavigation.Screen
          name='Login'
          component={Login}
        />
        <StackNavigation.Screen
          name='HomeScreen'
          component={NavigationDrawer}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}

export default Routes;