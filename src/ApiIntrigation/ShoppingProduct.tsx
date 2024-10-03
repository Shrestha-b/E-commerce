//import liraries
import React, {Component, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CustomCartHeader from '../comonents/CartCustomHeader';
import Images from '../themes/Images';
import {responsiveFontSize, RfH, RfW} from '../utils/helpers';
import {} from 'react-native-gesture-handler';

// create a component
const ShoppingProduct: React.FC = ({navigation}:any) => {
  const SizePicker = () => {
    const [selectedSize, setSelectedSize] = useState('M');
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    return (
      <View style={styles.footercontainer}>
        <Text style={styles.label}>Size</Text>
        <View style={styles.sizeContainer}>
          {sizes.map(size => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeButton,
                selectedSize === size && styles.selectedSizeButton,
              ]}
              onPress={() => setSelectedSize(size)}>
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.selectedSizeText,
                ]}>
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
  0;

  return (
    <View style={styles.container}>
      <CustomCartHeader navigation={navigation}/>
      <View>
        <Image style={styles.mainImg} source={Images.banjaraworld} />
      </View>
      <View style={styles.footerMain}>
        <View style={{height: RfH(123), width: RfW(338), gap: 18}}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: responsiveFontSize(21),
              color: Colors.black,
            }}>
            Cotton Knit
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: responsiveFontSize(14),
              color: Colors.black,
            }}>
            4.9 (321 review)
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: responsiveFontSize(12),
              color: '#999999',
            }}>
            Ollington St. 100% Cotton Knit Half Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed eget mi.. Read More
          </Text>
          <View style={styles.line} />
        </View>
        <SizePicker />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: RfH(48),
            width: RfW(328),
            alignItems:'center'
          }}>
          <View
            style={{
              height: 48,
              width: 82,
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <Text>30% Offer</Text>
            <Text>$20 $15</Text>
          </View>
          <View style={styles.buttoncontainer}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('cartdetails')}>
              <Text style={styles.text}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  mainImg: {
    height: RfH(435),
    width: RfW(373),
  },
  footerMain: {
    height: RfH(286),
    width: RfW(376),
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
  },
  line: {
    height: RfH(1),
    width: RfW(338),
    borderBottomColor: '#C9BFC0',
    borderBottomWidth: 1,
  },
  footercontainer: {
    width: RfW(325),
    height: RfH(51),
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeButton: {
    width: 50,
    height: 51,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  selectedSizeButton: {
    backgroundColor: '#FF5C5C',
  },
  sizeText: {
    fontSize: 16,
    color: '#999999',
  },
  selectedSizeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#FF5C5C', // Pink background
    width: 146,
    height: 42,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: responsiveFontSize(16),
    fontWeight: 'bold',
  },
});

//make this component available to the app
export default ShoppingProduct;
