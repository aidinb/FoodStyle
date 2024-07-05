import React, {useCallback, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
  ListRenderItem,
} from 'react-native';
import {useStores} from '../stores';
import {observer} from 'mobx-react';
import {COLORS} from '../styles';
import FilterBox from '../components/FilterBox.tsx';
import ArrowLeft from '../assets/arrow-left.svg';
import CrossMark from '../assets/cross-mark.svg';
import CategoryItem from '../components/CategoryItem.tsx';

const {width} = Dimensions.get('window');

interface Category {
  id: number;
  parentId: number;
  imagePath: string;
  name: string;
}

const Home = () => {
  const {homeStore} = useStores();

  useEffect(() => {
    homeStore.getAllCategories();
  }, [homeStore]);

  const renderCat: ListRenderItem<Category> = useCallback(
    ({item}) => (
      <CategoryItem
        item={item}
        onPress={(id, parentId) => {
          homeStore.setActiveCat(id, parentId);
        }}
      />
    ),
    [homeStore],
  );

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.activeCatContainer,
          {
            backgroundColor:
              homeStore.activeCat !== null ? COLORS.yellow : COLORS.grey,
          },
        ]}>
        <View style={styles.activeCatInnerContainer}>
          <Image
            source={
              homeStore.activeCatImage === null
                ? require('../assets/browse-cuisines.png')
                : {uri: homeStore.activeCatImage}
            }
            style={styles.activeCatImage}
          />
          <Text style={styles.activeCatText}>{homeStore.activeCatName}</Text>
        </View>
        {homeStore.activeCat !== null ? (
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => homeStore.backStep()}>
              <ArrowLeft color={COLORS.fontColor} />
            </TouchableOpacity>
            <View style={styles.divider} />
            <TouchableOpacity onPress={() => homeStore.resetToRoot()}>
              <CrossMark color={COLORS.fontColor} />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>

      <View>
        <ScrollView
          horizontal
          contentContainerStyle={styles.filterBoxContainer}>
          {homeStore.filters.map(filter => (
            <FilterBox
              key={filter}
              onPress={() => homeStore.setActiveFilters(filter)}
              title={filter}
              enable={homeStore.activeFilters.includes(filter)}
            />
          ))}
        </ScrollView>
      </View>

      {homeStore.sortedCat.length > 0 ? (
        <ScrollView
          horizontal={homeStore.numColumn !== 1}
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}
          contentContainerStyle={styles.categoryListContainer}>
          <FlatList
            contentContainerStyle={styles.flatListContentContainer}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => item.id + index + '_cat'}
            key={homeStore.numColumn}
            numColumns={homeStore.numColumn}
            horizontal={homeStore.numColumn === 1}
            showsHorizontalScrollIndicator={false}
            data={homeStore.sortedCat}
            renderItem={renderCat}
            style={[
              styles.flatList,
              {marginTop: homeStore.numColumn === 1 ? 15 : 0},
            ]}
            columnWrapperStyle={
              homeStore.numColumn !== 1 ? styles.columnWrapper : null
            }
          />
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    backgroundColor: COLORS.white,
    flex: 1,
  },
  activeCatContainer: {
    width: width - 40,
    borderRadius: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  activeCatInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  activeCatImage: {
    height: 40,
    width: 40,
  },
  activeCatText: {
    color: COLORS.fontColor,
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 7,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 100,
  },
  divider: {
    width: 1,
    height: 30,
    backgroundColor: COLORS.darkYellow,
  },
  filterBoxContainer: {
    paddingTop: 15,
    paddingBottom: 5,
    paddingLeft: 20,
  },
  categoryListContainer: {
    paddingLeft: 20,
  },
  flatListContentContainer: {
    alignSelf: 'flex-start',
  },
  flatList: {
    marginTop: 15,
  },
  columnWrapper: {
    marginTop: 15,
  },
});

export default observer(Home);
