import { View, Image } from 'react-native';
import React from 'react';
import style from './style';

const UserProfile = (props) => {
    return (
        <View style={[style.userImageCOntainer, { borderRadius: props.size, borderColor: props.borderColor || style.userImageCOntainer.borderColor }]}>
            <Image style={[style.profileImage, { width: props.size, height: props.size, borderRadius: props.size }]} source={props.profileImage} />
        </View>
    );
};

export default UserProfile;
