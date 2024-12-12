import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
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

// Custom Drawer Content Component
const CustomDrawerContent = (props) => {
    return (
        <ScrollView style={styles.drawerContent}>
            <Image
                source={{ uri: 'https://via.placeholder.com/300x150.png?text=Your+Image' }} // Sample placeholder image URL
                style={styles.rectangleImage}
            />
            {props.state.routes.map((route, index) => (
                <TouchableOpacity key={index} style={styles.drawerItems}
                    onPress={() => props.navigation.navigate(route.name)}>
                    <Text style={styles.drawerItem}>
                        {route.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};


const MainMenuNavigation = () => {
    return (
        <Drawer.Navigator
            initialRouteName={Routes.Profile}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name={Routes.Home}
                component={Home}
                options={{
                    headerShown: true,
                    headerTitle: 'Dashbord',
                }}
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
            <Stack.Screen name={'Drawer'} component={MainMenuNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
};

export default MainNavigation;

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        // paddingTop: 20, // Adjust for space if needed
        // paddingHorizontal: 20,
    },
    rectangleImage: {
        width: '100%',
        height: 150,  // Adjust height and width as needed for a rectangle image
        marginBottom: 10,
    },
    drawerItems: {
        paddingTop: 0,
        paddingHorizontal: 20,
        marginTop: 5,
    },
    drawerItem: {
        fontSize: 18,
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
    },
});
