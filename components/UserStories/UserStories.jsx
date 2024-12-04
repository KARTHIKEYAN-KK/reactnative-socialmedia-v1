import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style';
import UserProfile from '../UserProfile/UserProfile';
import { scaleFontSize } from '../../assets/styles/scaling';

const UserStories = (props) => {
  return (
    <View style={style.storyContainer}>
      <UserProfile profileImage={props.profileImage} size={scaleFontSize(75)}/>
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStories.propsTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.object.isRequired,
};

export default UserStories;
