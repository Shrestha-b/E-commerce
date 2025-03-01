import React, {FC, useRef, useState} from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TouchableHighlight,
  PixelRatio
} from 'react-native';
import Images from '../themes/Images';
import {RfH, RfW, responsiveFontSize} from '../utils/helpers';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Fonts from '../themes/Fonts';
import Clothapi from '../ApiIntrigation/clothapi';
import Head from '../Header/Head';

interface HomeScreens {
  navigation: any;

}

const HomeScreen: React.FC<HomeScreens> = ({ navigation }) => {
  // Child function to open the drawer
  
  return (
    <View style={styles.container}>
      <HomeScroll navigation={navigation} />
    </View>
  );
};

const HomeScroll = ({navigation}:any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const handleScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / 335); // Assuming the width of each item is 335
    setActiveIndex(index);
  };
  const handlePress = ({ navigation }:any) => {
    navigation.navigate('age');
  };
  return (
    
    <View>
    <Head onPress={handlePress}/>
    <View style={styles.maincontainer}>
    <Animated.ScrollView
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false, listener: handleScroll }
        )}
      >
        {/* Slide 1 */}
        <View style={styles.box}>
          <ImageBackground
            source={Images.SliderImg}
            style={styles.backgroundImage}
          >
            <View style={styles.overlay}>
              <Text style={styles.text}>“Find Your Perfect Match”</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('explorematrimony')}
              >
                <Text style={styles.btnText}>Explore Matrimony</Text>
              </TouchableOpacity>
              <View style={styles.dotContainer}>
                <View
                  style={[styles.dot, activeIndex === 0 && styles.activeDot]}
                />
                <View
                  style={[styles.dot, activeIndex === 1 && styles.activeDot]}
                />
                <View
                  style={[styles.dot, activeIndex === 2 && styles.activeDot]}
                />
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Slide 2 */}
        <View style={styles.box}>
          <ImageBackground
            source={Images.SliderImg}
            style={styles.backgroundImage}
          >
            <View style={styles.overlay}>
              <Text style={styles.text}>Box 2</Text>
              <View style={styles.dotContainer}>
                <View
                  style={[styles.dot, activeIndex === 0 && styles.activeDot]}
                />
                <View
                  style={[styles.dot, activeIndex === 1 && styles.activeDot]}
                />
                <View
                  style={[styles.dot, activeIndex === 2 && styles.activeDot]}
                />
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Slide 3 */}
        <View style={styles.box}>
          <ImageBackground
            source={Images.SliderImg}
            style={styles.backgroundImage}
          >
            <View style={styles.overlay}>
              <Text style={styles.text}>Box 3</Text>
              <View style={styles.dotContainer}>
                <View
                  style={[styles.dot, activeIndex === 0 && styles.activeDot]}
                />
                <View
                  style={[styles.dot, activeIndex === 1 && styles.activeDot]}
                />
                <View
                  style={[styles.dot, activeIndex === 2 && styles.activeDot]}
                />
              </View>
            </View>
          </ImageBackground>
        </View>
      </Animated.ScrollView>

      {/* Shop Button */}
      <View style={styles.productHeader}>
        <View style={{ flexDirection: 'row', alignItems: 'center', height: 17.5, width: 145, justifyContent: 'space-between' }}>
          <Image source={Images.shopbag} style={{ height: 17.25, width: 17.25 }} />
          <TouchableOpacity onPress={() => navigation.navigate('logout')}>
          <Text style={{ color: 'black' }}>Shop</Text>
          </TouchableOpacity>
          <Image style={{ height: 10, width: 10, marginTop: 3 }} source={Images.rightarrow} />
          <TouchableHighlight onPress={()=>{}}>
            <Text style={styles.Trending}>Trending Now</Text>
            </TouchableHighlight>
        </View>
        <View>
          <Image source={Images.circlearrow} style={styles.circlearrow} />
        </View>
      </View>
      <Clothapi />
      <Image style={styles.footerImg} source={Images.footerImg} />
    </View>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    // textAlign:'center'
  },
  maincontainer: {
    flex: 1,
    width: RfW(335),
  },
  productHeader: {
    flexDirection: 'row',
    width: RfW(335),
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    width: RfW(335),
    height: RfH(223),
    backgroundColor: 'lightblue',
    // justifyContent: 'center',
    // alignItems: 'center',
    borderRadius: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: RfW(335),
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 10,
    height: RfH(37),
    width: RfW(169),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5069',
    marginTop: 10,
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
    width: 30,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#FF5069',
  },
  Trending: {
    color: '#F64775',
    fontWeight: '500',
    fontSize: 12,
  },
  footerImg: {
    height: 162,
    width: RfW(335),
  },
  circlearrow: {
    height: RfH(18),
    width: RfW(18),
  },
});

export default HomeScreen;
