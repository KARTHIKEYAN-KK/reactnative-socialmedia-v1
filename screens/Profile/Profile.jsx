import React from 'react';
import { ScrollView, SafeAreaView, View } from 'react-native';
import UserProfile from '../../components/UserProfile/UserProfile';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

const Profile = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: verticalScale(30)}}>
                    <UserProfile profileImage={require('../../assets/images/default_profile.png')} size={horizontalScale(100)} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;
