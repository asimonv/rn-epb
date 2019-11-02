import React from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { WebBrowser } from 'expo';
import { buttons } from '../styles/Button.style';
import { colors } from '../styles/common.style';

import ListNumber from './ListNumber';

export default function OptionButton(props) {
  return (
    <TouchableOpacity style={styles.button} onPress={e => props.onPress(e, props)}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        {props.isList && <ListNumber {...props} />}
        {props.item.icon && (
          <View style={styles.iconWrapper}>
            <Icon.Button
              iconStyle={styles.icon}
              style={styles.innerIcon}
              size={20}
              name={props.item.icon}
              backgroundColor={props.item.color}
            />
          </View>
        )}
        <View style={{ flex: 1, flexDirection: 'column' }}>
          {props.item.url && (
            <TouchableOpacity onPress={() => _handleOpenWithWebBrowser(props.item.url)}>
              <Text style={buttons.url}>{props.item.key}</Text>
            </TouchableOpacity>
          )}
          {!props.item.url && <Text style={styles.title}>{props.item.key}</Text>}
          {props.item.description && <Text style={styles.subtitle}>{props.item.description}</Text>}
        </View>
        {props.showChevron && (
          <FontAwesome
            style={styles.chevron}
            name="angle-right"
            size={24}
            color={colors.lightgray}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

OptionButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

const _handleOpenWithWebBrowser = (url) => {
  WebBrowser.openBrowserAsync(url);
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray,
  },
  title: {
    fontSize: 16,
    color: colors.black,
  },
  chevron: {
    marginLeft: 10,
  },
  iconWrapper: {
    marginRight: 10,
  },
  icon: {
    marginRight: 0,
    textAlign: 'center',
    width: 20,
    height: 20,
  },
  innerIcon: {
    padding: 5,
  },
});
