import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Touchable,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomCartHeader from '../comonents/CartCustomHeader';
import {responsiveFontSize, RfH, RfW} from '../utils/helpers';
import Images from '../themes/Images';

// create a component
const CartDetails = ({navigation}:any) => {
const [quantity, setQuantity] = React.useState<number>(1);
const [unitPrice] = React.useState<number>(50); // Assuming the base price per unit is constant
const [totalPrice, setTotalPrice] = React.useState<number>(unitPrice);

const handleRemove = () => {
  setQuantity(prevQuantity => {
    const newQuantity = Math.max(prevQuantity - 1, 1); // Ensuring quantity doesn't go below 1
    setTotalPrice(newQuantity * unitPrice); // Adjust total price accordingly
    return newQuantity;
  });
};

// Handle Addition (Increase Quantity)
const handleAddition = () => {
  setQuantity(prevQuantity => {
    const newQuantity = prevQuantity + 1;
    setTotalPrice(newQuantity * unitPrice); // Adjust total price accordingly
    return newQuantity;
  });
};

  return (
    <View style={styles.container}>
      <View style={{height: RfH(24), width: RfW(335)}}>
        <CustomCartHeader navigation={navigation}/>
      </View>

      <View style={styles.Txtcontainer}>
        <Text
          style={{
            fontSize: responsiveFontSize(22),
            fontWeight: 600,
            color: Colors.black,
          }}>
          My Cart
        </Text>
        <Text style={{fontSize: responsiveFontSize(14), color: Colors.grey}}>
          2 Items
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          gap: 10,
          flexDirection: 'row',
          width: RfW(335),
          height: RfW(90),
        }}>
        <View>
          <Image
            source={Images.flag}
            style={{height: RfH(90), borderRadius: 10, width: RfW(80)}}></Image>
        </View>
        <View style={{height: 80, width: 234}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 17, color: Colors.black}}>
              Cotton Shirt
            </Text>
            <Text style={{fontSize: 16, color: Colors.gray}}>M</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 14, color: Colors.black}}>
              {totalPrice}
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={handleAddition}>
              <Image source={Images.tablerplus}></Image>
            </TouchableOpacity>
            <Text>{quantity}</Text>
            <TouchableOpacity onPress={handleRemove}>
              <Image source={Images.iconoirminus}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View></View>
      </View>
      <View
        style={{
          flex: 1,
          width: RfW(376),
          height: RfH(255),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: RfH(22),
            width: RfW(338),
          }}>
          <Text style={{color: Colors.gray}}>Sub total :</Text>
          <Text style={{fontSize: 18, color: Colors.black}}>kdd</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: RfH(22),
            width: RfW(338),
          }}>
          <Text style={{color: Colors.gray}}>ds</Text>
          <Text style={{fontSize: 18, color: Colors.black}}>sd</Text>
        </View>
        <View style={styles.line} />
        <View></View>
        <View></View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
    justifyContent: 'center',
  },
  Txtcontainer: {
    height: RfH(46),
    width: RfW(83),
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    borderBottomColor: '#C9BFC0', // Change to desired color
    borderBottomWidth: 1, // Change to desired thickness
    alignSelf: 'stretch',
    width: RfW(338),
  },
});

//make this component available to the app
export default CartDetails;
