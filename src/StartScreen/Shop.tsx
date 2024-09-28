import React, {useEffect, useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {
  ImageBackground,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Animated,
  ImageSourcePropType,
} from 'react-native';
import {RfH, RfW} from '../utils/helpers';
import Images from '../themes/Images';
import Head from '../Header/Head';
import {Colors} from 'react-native/Libraries/NewAppScreen';

interface ShopProps {
  navigation: NavigationProp<any>;
}

interface DataItem {
  id: number;
  name: string;
  image: ImageSourcePropType;
}

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  liked: boolean; // Added the 'liked' property to track like status
};

const list = [
  {id: 1, name: 'Kids', image: Images.kids},
  {id: 2, name: 'Mens', image: Images.man},
  {id: 3, name: 'Womens', image: Images.girl},
  {id: 4, name: 'Banjara Bazar', image: Images.kids},
];

const Shop: React.FC<ShopProps> = ({navigation}:any) => {
  const Api = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const scrollX = new Animated.Value(0);

    useEffect(() => {
      getProducts();
    }, []);

    const getProducts = async () => {
      const URL = 'https://fakestoreapi.com/products';
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Product[] = await response.json();

        // Add the 'liked' property to each product and set them in state
        const updatedData = data.map(product => ({
          ...product,
          liked: false, // Initialize 'liked' to false
        }));

        setProducts(updatedData);
        setIsLoading(false);
      } catch (error: any) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    // Handle like/unlike toggle
    const handleLikeToggle = (id: number) => {
      const updatedProducts = products.map(product =>
        product.id === id ? {...product, liked: !product.liked} : product,
      );
      setProducts(updatedProducts);
    };

    if (isLoading) {
      return (
        <View style={styles.APicontainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.APicontainer}>
          <Text style={styles.errorStyle}>Error: {error}</Text>
        </View>
      );
    }

    return (
      <View>
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={styles.cardContainer}>
              <Image source={{uri: item.image}} style={styles.APimage} />
              <View style={styles.productInfo}>
                <Text style={styles.ApiPriceTXT}>$ {item.price}</Text>
                <TouchableOpacity onPress={() => handleLikeToggle(item.id)}>
                  <Image
                    source={
                      item.liked ? Images.heartFilled : Images.heart // Toggle between like and unlike images
                    }
                    style={styles.likeImage}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    );
  };

  const Item = ({item}: {item: DataItem}) => (
    <TouchableOpacity onPress={() => {}} style={styles.itemContainer}>
      <Image source={item.image} style={styles.imageStyle} />
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Head />
      <View style={styles.content}>
        <ImageBackground
          source={Images.shopping}
          style={styles.backgroundImage}>
          <View style={styles.overlay}>
          <TouchableOpacity onPress={() => navigation.navigate('shoppingproduct')}> 
            <Text style={styles.text}>Top Brands</Text>
            </TouchableOpacity>
            <Image style={styles.right} source={Images.right} />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.line}></View>
      <View style={{flex:1, marginTop: 20}}> 
      <FlatList
        data={list}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
     
      </View>
      <View style={{height: RfH(402), flexDirection: 'row', marginBottom: 80}}>
        <Api/>
        <Api />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... your styles here ...
  APimage: {
    height: RfH(148),
    width: RfW(160),
    borderRadius: 10,
  },
  likeImage: {
    width: 30,
    height: 30,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
  },
  itemText: {
    fontSize: 18,
  },
  scrollView: {
    flexDirection: 'row',
  },
  ApiPriceTXT: {
    color: Colors.black,
    fontSize: 12,
    fontWeight: '500',
    marginTop: 10,
  },
  errorStyle: {
    color: 'red',
    fontSize: 18,
  },
  APicontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  contentContainer: {
    alignItems: 'center',
  },
  line: {
    marginTop: 20,
    height: RfH(1),
    width: RfW(334),
    borderBottomColor: '#FF50694D',
    borderBottomWidth: 1,
  },

  container: {
    flex: 1,
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  backgroundImage: {
    width: RfW(334),
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
  right: {
    height: RfH(10),
    width: RfW(10),
    marginTop: 6,
  },
  itemContainer: {
    // marginTop: 10,
    // marginBottom: 30,
    width: RfW(100),
    height: RfH(24), // Set width for each item box
    // padding: 10,
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    flexDirection: 'row',
    marginHorizontal: 5, // Add spacing between items
  },
  imageStyle: {
    height: RfH(20),
    width: RfW(20),
    flexDirection: 'row',
  },
  cardContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    // padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    marginHorizontal: 10,
    width: RfW(160),
    height: RfW(194),
  },
  heartIcon: {
    height: 20,
    width: 20,
  },
});

export default Shop;
