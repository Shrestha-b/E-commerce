import React, { useEffect, useState } from 'react';
import { FC } from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Button } from 'react-native';
import { RfH, RfW } from '../utils/helpers'; // Import helpers if needed
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './Action';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

// Define the parameter types for each screen in the stack
type StackParamList = {
  Home: undefined;
  Products: { item: Product[] }; // Assuming Products screen expects an array of Product as route params
  // Add other screen types here as needed
};

// Define props for the Products screen
type ProductsScreenProps = NativeStackScreenProps<StackParamList, 'Products'>;

// Define the Product type
interface Product {
  Name: string;
  id: number;
  Price: number;
  Image: string;
}

// Define the props for the Products component
interface ProductsProps {
  item: Product[]; // item is an array of Product objects
}

// Products component definition
const Products: FC<ProductsProps> = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState<{ [key: number]: boolean }>({}); // Track added status by product ID
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart.cartItems || []);

  useEffect(() => {
    const addedStatus: { [key: number]: boolean } = {};
    item.forEach((product) => {
      const isProductInCart = cartItems.some((cartItem: Product) => cartItem.id === product.id);
      addedStatus[product.id] = isProductInCart;
    });
    setAddedToCart(addedStatus);
  }, [cartItems, item]);

  const handleAddtoCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (productId: number) => {
    // Implement the logic to remove the product from the cart
    // For example: dispatch(removeFromCart(productId));
  };

  return (
    <ScrollView>
      {item.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <Text style={styles.productText}>{product.Name}</Text>
          <Text style={styles.productText}>{product.id}</Text>
          <Text style={styles.productText}>{product.Price}</Text>
          <Image style={styles.Img} source={{ uri: product.Image }} />

          {addedToCart[product.id] ? (
            <Button
              title="Remove from cart"
              onPress={() => handleRemoveFromCart(product.id)}
            />
          ) : (
            <Button
              title="Add to cart"
              onPress={() => handleAddtoCart(product)}
            />
          )}
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
