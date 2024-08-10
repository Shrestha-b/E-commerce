import React, { useEffect, useRef, useState } from 'react';
import { NavigationProp } from '@react-navigation/native';
import {
  Button,
  ImageBackground,
  Animated,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RfH, RfW, responsiveFontSize } from '../utils/helpers';
import Fonts from '../themes/Fonts';
import Images from '../themes/Images';
import Head from '../Header/Head';
import Clothapi from '../ApiIntrigation/clothapi';
import { FlatList } from 'react-native-gesture-handler';

interface ShopProps {
  navigation: NavigationProp<any>;
}

interface DataItem {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Shop: React.FC<ShopProps> = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const [data, setData] = useState<DataItem[]>([]);

  const MensCloth = async (): Promise<void> => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const result = await fetch(url);
    const data = await result.json();
    setData(data);
  };

  useEffect(() => {
    MensCloth();
  }, []);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / 335); // Assuming the width of each item is 335
    setActiveIndex(index);
  };

  return (
    <View>
      <Head />
      <View style={styles.container}>
        <View style={styles.box}>
          <ImageBackground
            source={Images.shopping}
            style={styles.backgroundImage}>
            <View style={styles.overlay}>
              <Text style={styles.text}>Top Brands</Text>
              <Image style={styles.right} source={Images.right} />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.line} />

        <View style={styles.type}>
          <View style={styles.type1}>
            <Image source={Images.kids} />
            <TouchableOpacity>
              <Text style={styles.txt}>Kids</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.type2}>
            <Image source={Images.man} />
            <Text style={styles.txt}>Men's</Text>
          </View>
          <View style={styles.type3}>
            <Image source={Images.girl} />
            <Text style={styles.txt}>Women's</Text>
          </View>
          <View style={styles.type4}>
            <Image source={Images.wedding} />
            <Text style={styles.txt}>Banjara Bazaar</Text>
          </View>
        </View>
      </View>
      
      {data.map((item: DataItem, index: number) => (
        <View key={index}>
          {/* <Image source={{ uri: item.url }} style={styles.image} /> */}
          <Text style={{ fontSize: 30 }}>{item.id}</Text>

        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: '#FF5069',
    width: RfW(334),
    marginTop: 20,
  },
  image:{ 
  height:RfH(148),
  width: RfW(160),
  marginTop:10

  },
  right: {
    height: RfH(10),
    width: RfW(10),
    marginTop: 6,
  },
  txt: {
    fontSize: 10,
    fontWeight: '400',
    color: Colors.black,
  },
  type: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    gap: 14,
    marginTop: 20,
    width: RfW(334),
  },
  type1: {
    height: RfH(28),
    width: RfW(54),
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#C9BFC0',
  },
  type2: {
    height: RfH(28),
    width: RfW(61),
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#C9BFC0',
  },
  type3: {
    height: RfH(28),
    width: RfW(75),
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#C9BFC0',
  },
  type4: {
    height: RfH(28),
    width: RfW(101),
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#C9BFC0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    width: 335,
    marginBottom: RfH(20),
    marginLeft: RfW(20),
    marginTop: RfW(20),
  },
  input: {
    color: Colors.black,
  },
  scrollView: {
    margin: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: RfW(335),
    height: RfH(100),
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 114,
    borderRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: RfW(335),
    borderRadius: 10,
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    marginBottom: 30,
    marginLeft: 70,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 120,
  },

  btnText: {
    color: Colors.white,
    fontSize: responsiveFontSize(14),
    fontFamily: Fonts.UextraBold,
    fontWeight: '700',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  dot: {
    width: RfW(30),
    height: RfH(5),
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#FF5069',
  },
});

export default Shop;
