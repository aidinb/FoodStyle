import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../styles';
import {FilterBoxProps} from '../utils/types.ts';

const FilterBox: React.FC<FilterBoxProps> = ({title, onPress, enable}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text
      style={[
        styles.title,
        {color: enable ? COLORS.fontColor : COLORS.darkGrey},
      ]}>
      {title ?? 'Filter'}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: COLORS.grey,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    paddingHorizontal: 10,
  },
  title: {
    color: COLORS.darkGrey,
    fontWeight: 'bold',
    fontSize: 12,
    fontFamily: 'ProximaNovaAlt-Bold',
  },
});

export default FilterBox;
