import { View, Text } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const Title = (props) => {
  return (
    <View>
      <Text style={style.title}>{props.title}</Text>
    </View>
  );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Title;
