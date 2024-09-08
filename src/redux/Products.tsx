import React, {useEffect, useState} from 'react';
import {FC} from 'react';
import {Image, View, ScrollView, Text, StyleSheet, Button} from 'react-native';
import {RfH, RfW} from '../utils/helpers'; // Import helpers if needed
import {useDispatch, useSelector} from 'react-redux';

import {addToCart} from './Action';
import {State} from 'react-native-gesture-handler';

// Define the Product type
interface Product {
  Name: string;
  id: number;
  Price: number;
  Image: string;
}

// Define the props for the Products component
interface ProductsProps {
  item: Product[]; // item is now an array of Product objects
}

// Products component definition
const Products: FC<ProductsProps> = ({item}: any) => {
  const [IsAdded, setIsAdded] = useState<any>(false);
  const [IsAddeds, setIsAddeds] = useState<any>(true);

  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cartItems || []);

  useEffect(() => {

    if (cartItems && cartItems.length) {
        cartItems.forEach((element: any) => {
        if(element.Name === item.Name) {
            setIsAdded(true);
        }
      });
    }
  }, [cartItems]);

  const handleAddtoCart = (product: Product) => {
    dispatch(addToCart(product));
    // console.warn("Added to cart", product);
  };

  return (
    <ScrollView>
      {item.map((product: any) => (
        <View key={product.id} style={styles.productContainer}>
          <Text style={styles.productText}>{product.Name}</Text>
          <Text style={styles.productText}>{product.id}</Text>
          <Text style={styles.productText}>{product.Price}</Text>
          <Image style={styles.Img} source={{uri: product.Image}} />

          {
  IsAdded
    ? <Button
        title="Remove from cart"
        onPress={() => {}}
      />
    : <Button
        title="Add to cart"
        onPress={() => handleAddtoCart(product)}
      />
}

        </View>
      ))}
    </ScrollView>
  );
};

// Define styles for Products component
const styles = StyleSheet.create({
  productContainer: {
    marginBottom: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  Img: {
    height: RfH(200), // Example height using helper
    width: RfW(200), // Example width using helper
  },
  productText: {
    fontSize: 22, // Apply consistent styling to text
  },
});

export default Products;
