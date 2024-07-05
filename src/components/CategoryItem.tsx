import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  ViewStyle,
  ImageStyle,
  Dimensions,
} from 'react-native';

interface CategoryItemProps {
  item: {
    id: number;
    parentId: number;
    imagePath: string;
    name: string;
  };
  onPress: (id: number, parentId: number) => void;
}

const {width} = Dimensions.get('window');

const CategoryItem: React.FC<CategoryItemProps> = ({item, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress(item.id, item.parentId);
      }}
      style={styles.container}>
      <Image source={{uri: item.imagePath}} style={styles.image} />
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: width / 2 - 50,
    marginRight: 20,
  } as ViewStyle,
  image: {
    height: 50,
    width: 50,
    marginRight: 10,
  } as ImageStyle,
});

export default React.memo(CategoryItem);
