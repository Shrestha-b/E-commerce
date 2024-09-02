import React from 'react';
import { FC } from 'react';
import { Image, View, ScrollView, Text, StyleSheet ,Button} from 'react-native';
import { RfH, RfW } from '../utils/helpers'; // Import helpers if needed
import { useDispatch, UseDispatch } from 'react-redux';
import { AddToCart } from './Action';
import { ADD_TO_CART } from './Constant';
import { addTodo } from '../features/todo/todoslice';
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
const Products: React.FC<ProductsProps> = ({ item }) => {
    const dispatch = useDispatch()
    const handleAddtoCart = (item:any) => {
    dispatch(AddToCart(item));
    console.warn("Hello",item)
    }
    return (
        <ScrollView>
            {item.map((product) => (
                <View key={product.id} style={styles.productContainer}>
                    <Text style={{ fontSize: 22 }}>{product.Name}</Text>
                    <Text style={{ fontSize: 22 }}>{product.id}</Text>
                    <Text style={{ fontSize: 22 }}>{product.Price}</Text>
                    {/* <Image style={styles.Img} source={{ uri: product.Image }} /> */}
                    <Button title="Add to cart" onPress={()=>handleAddtoCart(item)} />
                </View>
            ))}
        </ScrollView>
    );
};

// Define styles for Products component
const styles = StyleSheet.create({
    productContainer: {
        marginBottom: 20,
        alignItems: 'center',
    },
    Img: {
        height: RfH(200), // Example height using helper
        width: RfW(200),  // Example width using helper
    }
});

export default Products;
