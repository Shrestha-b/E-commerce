import React, {useRef, useState} from 'react';
import {
  ScrollView,
  SafeAreaView,
  FlatList,
  Image,
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  ImageSourcePropType,
} from 'react-native';
import Images from '../../themes/Images';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {RfH, RfW} from '../../utils/helpers';

interface SliderItem {
  id: string;
  title: string;
  image: ImageSourcePropType | null; // Define as ImageSourcePropType or null if image is not available
  subtitle: string;
  addskip: string | null;
  arrow: ImageSourcePropType | null;
}

interface SlideProps {
  item: SliderItem;
  navigation: any;  // Add navigation to SlideProps interface
}

const sliders: SliderItem[] = [
  {
    id: '1',
    title: 'Welcome to Banjara World',
    image: Images.fistImg,
    subtitle: 'Explore our platform ',
    addskip: 'skip',
    arrow: null,
  },
  {
    id: '2',
    title: 'Find Your Banjara Soulmate',
    image: Images.fistImg, // Since there's no image, you can set this as null
    subtitle: 'Join Banjara World Matrimony',
    addskip: 'skip',
    arrow: Images.backarrow,
  },
  {
    id: '3',
    title: 'Embrace Banjara',
    image: Images.thirdImg,
    subtitle: 'Dive into',
    addskip: 'skip',
    arrow: Images.backarrow,
  },
];

interface SlideProps {
  item: SliderItem;
}

const Slide: React.FC<SlideProps> = ({item, navigation}:any ) => {
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: RfW(335),
          marginTop: 8,
        }}>
        {item.image && (
          <Image
            source={item.arrow}
            style={{height: 24, width: 24, resizeMode: 'contain'}}
          />
        )}
        <TouchableOpacity onPress={() => navigation.navigate('mainlogin')}>
        <Text style={{fontSize: 14, color:Colors.black, textDecorationLine:'underline'}}>{item.addskip}</Text>
        </TouchableOpacity>
      
      </View>
      {item.image && (
        <Image
          source={item.image}
          style={{
            height: '75%',
            width: Dimensions.get('window').width,
            resizeMode: 'contain',
          }}
        />
      )}
       <View style={styles.footerBox}>
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <Text numberOfLines={3} adjustsFontSizeToFit>
        {item.subtitle}
      </Text>
      </View>
    </View>
  );
};

const HorizontalScrollView: React.FC = ({navigation}:any) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const {height, width} = Dimensions.get('window');
  const Footer = () => {
    return (
      <View
        style={{
        height: height * 0.25,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: "white",
      }}>
        <View
        style={{
          flexDirection:'row',
          justifyContent: 'center',
          marginTop:80
        }}>
          {
            sliders.map((_,index) =>(
              <View key={index} style={[styles.indicator,currentSlideIndex == index && {
                backgroundColor:"#F64775",
                width:50
              }]}/>
            ))
          }
        </View>
      </View>
    );
  };

const UpdateCurrentSlideIndex = (e: any) => {
  const contentOffsetX = e.nativeEvent.contentOffset.x;
  const currentIndex = Math.round(contentOffsetX / width);
  setCurrentSlideIndex(currentIndex);
};
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.AppColor} />
      <FlatList
      onMomentumScrollEnd={UpdateCurrentSlideIndex}
        pagingEnabled
        data={sliders}
        keyExtractor={item => item.id}
        contentContainerStyle={{height: height * 0.75}}
        horizontal
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Slide item={item} navigation={navigation}/>}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.AppColor,
  },
  title: {
    color: Colors.black,
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
    paddingHorizontal: 10, // Add horizontal padding to limit width
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: 'gray',
    paddingHorizontal: 10, // Add horizontal padding to limit width
    flexShrink: 1,
  },
  indicator:{
    height:5,
    width:30,
    backgroundColor: Colors.White,
    marginHorizontal:3,
    borderRadius: 10,
  },
  footerBox:{
    justifyContent:'center',
    flex:1,
    height:RfH(234),
    width:RfW(278)
  }
});

export default HorizontalScrollView;
