import React from 'react';
import PropTypes from 'prop-types';

import {
  Dimensions, SectionList, StyleSheet, Button, View, Text,
} from 'react-native';

import Carousel, { Pagination } from 'react-native-snap-carousel';
import SliderEntry from './SliderEntry';
import CodeAlert from './CodeAlert';

import OptionButton from './OptionButton';
import AsyncImage from './AsyncImage';
import { itemWidth } from '../styles/SliderEntry.style';
import { colors } from '../styles/common.style';

const window = Dimensions.get('window');
const sliderWidth = window.width;
const aspect = sliderWidth / window.height;

export default class OptionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this._renderHeader = this._renderHeader.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this._renderSeparator = this._renderSeparator.bind(this);

    console.log(this.props.sections);
  }

  _renderHeader = title => <Text style={styles.header}>{title}</Text>;

  _renderItem({ item, index }) {
    return <SliderEntry data={item} even />;
  }

  __renderListHeader = () => <Text>{this.props.listHeader.title}</Text>;

  _renderSeparator = () => (
    <View
      style={{
        height: 1,
        backgroundColor: '#D1D1D4',
      }}
    />
  );

  pagination(entries) {
    const { activeSlide } = this.state;
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'white', paddingVertical: 18 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'gray',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  render() {
    const { sections, listHeader } = this.props;
    return (
      <SectionList
        contentContainerStyle={styles.container}
        sections={sections}
        ItemSeparatorComponent={this._renderSeparator}
        ListHeaderComponent={() => (listHeader ? this._renderListHeader() : null)}
        renderSectionHeader={({ section: { title, showHeader } }) => (showHeader ? this._renderHeader(title) : null)
        }
        renderItem={({ item, index, section }) => (
          <View>
            {item.image && <AsyncImage style={styles.image} source={item.image} />}
            {section.isAlert && <CodeAlert isWarning={section.isWarning} text={item.key} />}
            {!section.isCarousel && !item.image && !section.isAlert && (
              <OptionButton
                showChevron={section.showChevron}
                item={item}
                isList={section.isList}
                style={{ ...section.style }}
                index={index}
                onPress={this.props.onPress}
              />
            )}
            {section.isCarousel && (
              <View>
                <Carousel
                  ref={(c) => {
                    this._carousel = c;
                  }}
                  data={item.images}
                  renderItem={this._renderItem}
                  sliderWidth={sliderWidth}
                  itemWidth={sliderWidth}
                  hasParallaxImages={false}
                  onSnapToItem={index => this.setState({ activeSlide: index })}
                />
                {this.pagination(item.images)}
              </View>
            )}
          </View>
        )}
      />
    );
  }
}

OptionsList.propTypes = {
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  header: {
    padding: 10,
    color: 'gray',
    fontWeight: '500',
    fontSize: 17,
    backgroundColor: '#F7F7F7',
  },
  image: {
    alignSelf: 'stretch',
    height: window.height * aspect,
    width: sliderWidth,
    resizeMode: 'cover',
  },
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
});
