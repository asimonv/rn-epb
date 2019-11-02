import React from 'react';
import {
  View, StyleSheet, Animated, ActivityIndicator,
} from 'react-native';

const styles = StyleSheet.create({
  imageOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

class AsyncImage extends React.Component {
  imageAnimated = new Animated.Value(0);

  constructor(props) {
    super(props);
    this.onImageLoad = this.onImageLoad.bind(this);
  }

  onImageLoad = () => {
    Animated.timing(this.imageAnimated, {
      toValue: 1,
    }).start();
    this.spinner.animating = false;
  };

  render() {
    const { source, style, ...props } = this.props;

    return (
      <View style={[style, styles.container]}>
        <ActivityIndicator ref={spinner => (this.spinner = spinner)} size="large" color="gray" />
        <Animated.Image
          {...props}
          source={source}
          style={[styles.imageOverlay, { opacity: this.imageAnimated }, style]}
          onLoad={this.onImageLoad}
        />
      </View>
    );
  }
}

export default AsyncImage;
