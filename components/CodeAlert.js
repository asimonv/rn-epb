import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { colors, BORDER_RADIUS } from '../styles/common.style';

export default function CodeAlert(props) {
  return (
    <View style={[styles.container, props.isWarning ? styles.warning : styles.alert]}>
      <Icon style={styles.icon} name="ios-alert" size={30} color="white" />
      <Text style={styles.title}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    borderRadius: BORDER_RADIUS*2,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  alert: {
    backgroundColor: colors.alert,
  },
  warning: {
    backgroundColor: colors.warning,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  icon: {
    marginRight: 15,
  }
});

CodeAlert.propTypes = {
  text: PropTypes.string.isRequired,
};
