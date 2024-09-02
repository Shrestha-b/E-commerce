import React, { useEffect, useRef, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import {
  ImageBackground,
  Animated,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
  FlatList,
  ListRenderItem,
  Button
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RfH, RfW, responsiveFontSize } from '../utils/helpers';
import Fonts from '../themes/Fonts';
import Images from '../themes/Images';
import Head from '../Header/Head';
import ShopAPI from '../ApiIntrigation/ShopAP';
import Combo from '../redux/Combo';
import { StringConst } from '../utils/constants';

interface ShopProps {
  navigation: NavigationProp<any>;
}

interface DataItem {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Shop: React.FC<ShopProps> = ({ navigation }:any) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [data, setData] = useState<DataItem[]>([]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const itemWidth = RfW(160);

  const MensCloth = async (): Promise<void> => {
    try {
      const url = 'https://fakestoreapi.com/products';
      const result = await fetch(url);
      const fetchedData = (await result.json()) as DataItem[];
      setData(fetchedData);
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  };

  useEffect(() => {
    MensCloth();
  }, []);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / itemWidth);
    setActiveIndex(index);
  };

  const renderItem: ListRenderItem<DataItem> = ({item}:any) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.image} /> 
      <Text>{StringConst.priceUnit}{item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Head />
      <View style={styles.content}>
        <ImageBackground source={Images.shopping} style={styles.backgroundImage}>
          <View style={styles.overlay}>
            <Text style={styles.text}>Top Brands</Text>
            <Image style={styles.right} source={Images.right} />
          </View>
        </ImageBackground>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={handleScroll}
          snapToInterval={itemWidth}
          decelerationRate="fast"
          scrollEventThrottle={16}
        />
      </View>
      <Text>hello</Text>
       <Button title='hello' onPress={() => navigation.navigate(ShopAPI)}/>
       <Button title='Redux' onPress={() => navigation.navigate(Combo)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: RfH(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  overlay: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 120,
  },
  image: {
    height: RfH(148),
    width: RfW(100),
    marginTop: 10,
  },
  itemContainer: {
    width: RfW(160),
    padding: 10,
    // flexWrap:'wrap',
    // flexDirection:'column'
    flexDirection: "column",
    flexWrap: "wrap"
  },
  itemText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  dot: {
    width: RfW(8),
    height: RfH(8),
    borderRadius: 4,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#FF5069',
  },
  right: {
    height: RfH(10),
    width: RfW(10),
    marginTop: 6,
  },
});

export default Shop;
