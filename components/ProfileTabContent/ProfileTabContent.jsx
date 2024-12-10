import { View, ScrollView, Image } from 'react-native';
import React from 'react';
import styles from './styles';

const ProfileTabContent = (props) => {
    console.log(props.tabName);
    const arr = Array(25).fill(0);
    return (
        <ScrollView style={styles.profileTabContentconainer}>
            <View style={styles.profileTabconainer}>
                {arr.map((_, value) => (
                    <Image key={value} style={styles.image} source={require('../../assets/images/default_post.png')} />
                ))}
            </View>
        </ScrollView>
    );
};

export default ProfileTabContent;
