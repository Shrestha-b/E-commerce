import React, { useRef } from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Animated, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RfH, RfW } from '../../utils/helpers';
import Images from '../../themes/Images';

const { width: windowWidth } = Dimensions.get('window');

const HorizontalScrollView = ({navigation}:any) => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const sections = 3; // Number of pages in the ScrollView
  const dotPosition = Animated.divide(scrollX, windowWidth);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        pagingEnabled
        contentContainerStyle={styles.contentContainer}
      >
        <LinearGradient
          colors={['#FFFFFF','#FFFFFF', '#FF5069']}
          style={styles.linearGradient}>
          <Text style={styles.skipTxt}>skip</Text>
          <Image style={styles.fistImg} source={Images.fistImg} />
          <Text style={styles.text}>Welcome to {'\n'} Banjara World</Text>
          <Text style={styles.text1}>
            Explore our platform for a seamless {'\n'} experience in Banjara
            matrimony {'\n'}
            shopping.
          </Text>
        </LinearGradient>

        <LinearGradient
          colors={['#FFFFFF','#FFFFFF', '#FF5069']}
          style={styles.linearGradient}>
          <View style={styles.box}>
            <Text style={styles.skipTxt}>skip</Text>
            <Text style={styles.text}>Find Your {'\n'}Banjara Soulmate</Text>
            <Text style={styles.text1}>
              Join Banjara World Matrimony to{'\n'} discover meaningful
              connections{'\n'} rooted in Banjara culture and tradition.
            </Text>
          </View>
        </LinearGradient>

        <LinearGradient
          colors={['#FFFFFF','#FFFFFF', '#FF5069']}
          style={styles.linearGradient}>
          <View style={styles.box}>
           
            <View style={{flexDirection:'row', marginTop:-70, }}>
            <Image source={Images.backarrow2} />
            <TouchableOpacity onPress={()=>navigation.navigate('mainlogin')}>
            <Text style={styles.skipTxt}>skip</Text>
            </TouchableOpacity>
          
            </View>
           
            <Image style={styles.thirdImg} source={Images.thirdImg} />
            <Text style={styles.text}> 
              Embrace Banjara Traditions{'\n'} Through Shopping
            </Text>
            <Text style={styles.text1}>
              Dive into Banjara Shopping for{'\n'} authentic products inspired by
              Banjara{'\n'} heritage, from textiles to jewelry
            </Text>
          </View>
        </LinearGradient>
      </ScrollView>
      <View style={styles.indicatorContainer}>
        {Array.from({ length: sections }).map((_, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={index}
              style={[styles.dot, { opacity }]}
              />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginLeft: -6
  },
  scrollView: {
    flexDirection: 'row',
  },
  contentContainer: {
    paddingHorizontal: 10,
  },
  skipTxt: {
    fontWeight: '500',
    fontSize: 14,
    marginLeft: 306,
    marginBottom: 60,
  },
  box: {
    height: RfH(780),
    width: RfW(500),
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  linearGradient: {
    flex: 1,
    // width: windowWidth,
    width: RfW(375),
    // margin: 10,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  fistImg: {
    height: RfW(403),
    width: RfW(375),
    marginRight: 20,
    marginBottom: 100

  },
  thirdImg: {
    height: RfH(400),
    width: RfW(375),
    marginRight: 20,
    resizeMode: 'cover',
  },
  text1: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    marginTop: 30,
  },
  text: {
    color: 'black',
    paddingTop: 60,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: RfH(10),
    width: RfW(10),
    borderRadius: 5,
    backgroundColor: '#F64775', // Change this to your desired color
    marginHorizontal: 8,
    marginBottom: 30
  },
});

export default HorizontalScrollView;
