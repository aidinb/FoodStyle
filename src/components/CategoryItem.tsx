import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {CategoryItemProps} from '../utils/types.ts';

const {width} = Dimensions.get('window');

const CategoryItem: React.FC<CategoryItemProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(item.id, item.parentId);
      }}
      style={styles.container}>
      <Image source={{uri: item.imagePath}} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: width / 2 - 40,
    marginRight: 20,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  title: {
    fontFamily: 'ProximaNovaAlt-Regular',
  },
});

export default React.memo(CategoryItem);
