import React from 'react';
import { View, StyleSheet } from 'react-native';
import CartHeader from './CartHearder';
import Products from './Products';
import Colors from '../themes/Colors';

// Define the Product type
interface Product {
    Name: string;
    id: number;
    Price: number;
    Image: string;
}

// Define the item
const Item:Product[] = [{
    Name: 'IPhone',
    id: 1,
    Price: 50000,
    Image: "https://via.placeholder.com/150"
},
{
    Name: 'MI',
    id: 2,
    Price: 25000,
    Image: "https://via.placeholder.com/150"
},
{
    Name: 'Samsung',
    id: 3,
    Price: 30000,
    Image: "https://via.placeholder.com/150"
}];

// Define the Combo component
const Combo: React.FC = () => {
    return (
        <View style={styles.container}>
            <CartHeader />
            <Products item={Item} />
            {/* <Products item={productsArray} /> */}

        </View>
    );
};

// Define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.white,
    },
});

export default Combo;
