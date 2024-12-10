import { Text } from 'react-native';
import React from 'react';
import styles from './styles';

const ProfileTabTitle = (props) => {

  return (
      <Text style={[styles.title, !props.isFocused && styles.titleNotActive]}>{props.title}</Text>

  );
};

export default ProfileTabTitle;
