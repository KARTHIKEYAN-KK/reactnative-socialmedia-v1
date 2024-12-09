import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Button } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainMenuNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName={Routes.Home}>
            <Drawer.Screen
                name={Routes.Home}
                component={Home}
            />
            <Drawer.Screen
                name={Routes.Profile}
                component={Profile}
                options={{
                    headerShown: true,
                    headerTitle: 'My Profile',
                }}
            />
        </Drawer.Navigator>
    );
};
const MainNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Drawer">
            <Stack.Screen name={'Drawer'} component={MainMenuNavigation} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default MainNavigation;
