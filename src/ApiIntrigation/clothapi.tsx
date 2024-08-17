import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { responsiveFontSize, RfH, RfW } from '../utils/helpers';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Fonts from '../themes/Fonts';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const Clothapi: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const scrollX = new Animated.Value(0); // Define the scrollX animated value

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const URL = 'https://fakestoreapi.com/products';
    // const URL = "https://taobao-api.p.rapidapi.com/api";

    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Product[] = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorStyle}>Error: {error}</Text>
      </View>
    );
  }

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  return (
    <View> 
      <ScrollView
        horizontal
        style={styles.scrollView}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        pagingEnabled
        contentContainerStyle={styles.contentContainer}
      >
        {products.map((product) => (
          <View key={product.id} style={styles.cardContainer}>
            <Image source={{ uri: product.image }} style={styles.image} /> 
            {/* <Text style={{fontSize: 20}}>{product.id}</Text> */}
            <View>
              <Text style={{color:Colors.black, fontSize:12,fontWeight:'500', marginTop: 10}}>Bring your store to life with Lumia</Text>
              <TouchableOpacity style={styles.button}>
              <Text style={styles.btnText}>Now Available </Text>
            </TouchableOpacity>
            </View>
           
          </View>
          
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  // container2: {
  //   marginTop:-360
  //   // backgroundColor:'grey'
  // },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginHorizontal: 10,
    marginBottom: 20,
    width:RfW(174),
    height:RfW(209)
  },
  image: {
    height: RfH(137),
    width: RfW(174)
  },
  errorStyle: {
    color: 'red',
    fontSize: 18,
  },
  scrollView: {
    flexDirection: 'row',
  },
  contentContainer: {
    alignItems: 'center',
  },
  button: {
    borderRadius: 3,
    height: RfH(16),
    width: RfW(59),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5069',
    marginTop:10
    // marginTop: 10,
  },
  btnText: {
    color: Colors.white,
    fontSize: responsiveFontSize(8),
    fontFamily: Fonts.UextraBold,
    fontWeight: '700',
  },
});

export default Clothapi;

