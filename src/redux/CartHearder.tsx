
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const CartHeader: React.FC = () => {
    // Access cartItems from the 'cart' key
    const cartItems = useSelector((state: any) => state.cart.cartItems || []);
    const [cartData, setCartData] = useState<number>(0);
    // Debugging the cartItems array

    useEffect(() => {
        setCartData(cartItems.length); 
    }, [cartItems]);

    return (
        <View style={styles.Container}>
            <Text style={styles.cartText}>{cartData}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: 'yellow',
        height: 50,
        width: 370,
    },
    cartText: {
        fontSize: 22,
        marginBottom: 20,
    },
});

export default CartHeader;

