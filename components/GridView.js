import React, { Component } from 'react';

import { StyleSheet, Text, TextInput } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import { colors, BORDER_RADIUS } from '../styles/common.style';

export default class GridView extends Component {
  constructor(props) {
    super(props);
    this._renderTextInput = this._renderTextInput.bind(this);
    this.inputs = new Map();
    const { stylesState } = this.props;
    this.state = {
      styles: stylesState || [0, 0, 0, 0, 0, 0],
    };
  }

  _renderTextInput = index => (
    <TextInput
      style={[
        styles.input,
        {
          backgroundColor: this.state.styles[index] === 0 ? 'transparent' : colors.system,
          color: this.state.styles[index] === 0 ? colors.black : 'white',
        },
      ]}
      maxLength={1}
      keyboardType="phone-pad"
      returnKeyType="done"
      onChangeText={text => this.props.onChanged(index, text)}
      ref={(input) => {
        this.inputs.set(index, input);
      }}
    />
  );

  render() {
    return (
      <Grid style={[this.props.style]}>
        <Row>
          <Col style={styles.square}>
            <Text
              style={[
                styles.sextantTitle,
                {
                  color: this.state.styles[0] === 0 ? colors.system : 'white',
                },
              ]}
            >
              S1
            </Text>
            {this._renderTextInput(0)}
          </Col>
          <Col style={styles.square}>
            <Text
              style={[
                styles.sextantTitle,
                {
                  color: this.state.styles[1] === 0 ? colors.system : 'white',
                },
              ]}
            >
              S2
            </Text>
            {this._renderTextInput(1)}
          </Col>
          <Col style={styles.square}>
            <Text
              style={[
                styles.sextantTitle,
                {
                  color: this.state.styles[2] === 0 ? colors.system : 'white',
                },
              ]}
            >
              S3
            </Text>
            {this._renderTextInput(2)}
          </Col>
        </Row>
        <Row>
          <Col style={styles.square}>
            <Text
              style={[
                styles.sextantTitle,
                {
                  color: this.state.styles[3] === 0 ? colors.system : 'white',
                },
              ]}
            >
              S6
            </Text>
            {this._renderTextInput(3)}
          </Col>
          <Col style={styles.square}>
            <Text
              style={[
                styles.sextantTitle,
                {
                  color: this.state.styles[4] === 0 ? colors.system : 'white',
                },
              ]}
            >
              S5
            </Text>
            {this._renderTextInput(4)}
          </Col>
          <Col style={styles.square}>
            <Text
              style={[
                styles.sextantTitle,
                {
                  color: this.state.styles[5] === 0 ? colors.system : 'white',
                },
              ]}
            >
              S4
            </Text>
            {this._renderTextInput(5)}
          </Col>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: '100%',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: 999,
  },
  sextantTitle: {
    position: 'absolute',
    top: 5,
    left: 5,
    zIndex: 1000,
    fontWeight: '500',
  },
  square: {
    margin: 5,
    height: 75,
    borderRadius: BORDER_RADIUS,
    borderColor: colors.system,
    borderWidth: 1,
    overflow: 'hidden',
  },
});
