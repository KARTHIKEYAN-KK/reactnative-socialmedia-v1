import React from 'react';
import { ScrollView, SafeAreaView, View, Text } from 'react-native';
import UserProfile from '../../components/UserProfile/UserProfile';
import { horizontalScale } from '../../assets/styles/scaling';
import styles from './styles';
import { ProfileTabsNavigation } from '../../navigation/MainNavigation';
import globalStyles from '../../assets/styles/globalStyles';

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView style={globalStyles.global}>
            <ScrollView contentContainerStyle={styles.scrollViewCont}>
                <View style={styles.ProfileImageContainer}>
                    <UserProfile profileImage={require('../../assets/images/default_profile.png')} size={horizontalScale(100)} borderColor="#0150EC" />
                </View>
                <Text style={styles.userName}>Emmanuel Robertsen</Text>
                <View style={styles.statContainer}>
                    <View style={styles.statContent}>
                        <Text style={styles.statAmount}>45</Text>
                        <Text style={styles.statValue}>Following</Text>
                    </View>
                    <View style={styles.statBorder} />
                    <View style={styles.statContent}>
                        <Text style={styles.statAmount}>30M</Text>
                        <Text style={styles.statValue}>Followers</Text>
                    </View>
                    <View style={styles.statBorder} />
                    <View style={styles.statContent}>
                        <Text style={styles.statAmount}>100</Text>
                        <Text style={styles.statValue}>Posts</Text>
                    </View>
                </View>
                <View style={globalStyles.flex}>
                    <ProfileTabsNavigation />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
