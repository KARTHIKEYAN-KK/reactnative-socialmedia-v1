import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabsNav = createMaterialTopTabNavigator();

const Tab1 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is tab 1</Text>
        </View>
    );
};

const Tab2 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>This is tab 2</Text>
        </View>
    );
};

const Tab3 = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <Text>This is tab 3</Text>
        </View>
    );
};


const renderTabLabel = (title) => ({ focused }) => (
    <ProfileTabTitle title={title} isFocused={focused} />
);

export const ProfileTabsNavigation = () => {
    return (
        <ProfileTabsNav.Navigator
            screenOptions={{
                tabBarIndicatorStyle: {
                    backgroundColor: 'transparent',
                },
                tabBarStyle: {
                    elevation: 0,
                    zIndex: 0,
                },
            }}>
            <ProfileTabsNav.Screen
                name="Tab1"
                options={{
                    tabBarLabel: renderTabLabel('Photos'),
                }}>
                {(props) => <ProfileTabContent {...props} tabName={'Tab1'} />}
            </ProfileTabsNav.Screen>
            <ProfileTabsNav.Screen
                name="Tab2"
                options={{
                    tabBarLabel: renderTabLabel('Videos'),
                }}>
                {(props) => <ProfileTabContent {...props} tabName={'Tab2'} />}
            </ProfileTabsNav.Screen>
            <ProfileTabsNav.Screen
                name="Tab3"
                options={{
                    tabBarLabel: renderTabLabel('Saved'),
                }}>
                {(props) => <ProfileTabContent {...props} tabName={'Tab3'} />}
            </ProfileTabsNav.Screen>
        </ProfileTabsNav.Navigator>
    );
};


const MainMenuNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName={Routes.Profile}>
            <Drawer.Screen
                name={Routes.Home}
                component={Home}
                options={{
                    headerShown: false,
                    headerTitle: 'Dashbord',
                }}
            />
            <Drawer.Screen
                name={Routes.Profile}
                component={Profile}
                options={{
                    headerShown: false,
                    headerTitle: 'My Profile',
                }}
            />
        </Drawer.Navigator>
    );
};
const MainNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Drawer">
            <Stack.Screen name={'Drawer'} component={MainMenuNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default MainNavigation;
