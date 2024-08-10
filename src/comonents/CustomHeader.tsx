import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {memo, useEffect} from 'react';
import {
  RfH,
  RfW,
  SCREEN_WIDTH,
  getColorWithOpacity,
  responsiveFontSize,
} from '../utils/helpers';

import {BackHandler} from 'react-native';
import Colors from '../themes/Colors';
import Fonts from '../themes/Fonts';
import Images from '../themes/Images';
// import {ScreenName} from '../Navigations/ScreenNamesConstant';
import {isEmpty} from 'lodash';
import {useNavigation} from '@react-navigation/native';

const CustomHeader = props => {
  const {
    headerTitle,
    onBackPressHandler,
    showcart = false,
    cartCount,
    headerContent = null,
  } = props;

  const navigation = useNavigation();
  const backFunction = () => {
    if (onBackPressHandler) {
      onBackPressHandler();
      return true;
    } else {
      navigation.goBack();
      return true;
    }
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backFunction,
    );
    return () => backHandler.remove();
  }, []);
  return (
    <View
      style={{
        ...styles.header,
        height: !headerContent ? styles.header.height : RfH(230),
      }}>
      {!headerContent ? (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 20,
            justifyContent: 'space-between',
            width: RfW(340),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.arrowImg} source={Images.arrow2} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{headerTitle}</Text>
          </View>
          {showcart && (
            <TouchableOpacity
              onPress={() => navigation.navigate(ScreenName.CART)}>
              <Image style={styles.cartImg} source={Images.cart} />
              {!isEmpty(cartCount) && (
                <View
                  style={{
                    position: 'absolute',
                    top: -5,
                    left: 12,
                    backgroundColor: 'green',
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                  }}>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontSize: responsiveFontSize(13),
                      textAlign: 'center',
                    }}>
                    {cartCount}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          )}
        </View>
      ) : (
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.arrowImg} source={Images.arrow2} />
            </TouchableOpacity>
            {showcart && (
              <TouchableOpacity
                onPress={() => navigation.navigate(ScreenName.CART)}>
                <Image style={styles.cartImg} source={Images.cart} />
                {!isEmpty(cartCount) && (
                  <View
                    style={{
                      position: 'absolute',
                      top: -5,
                      left: 12,
                      backgroundColor: 'green',
                      width: 20,
                      height: 20,
                      borderRadius: 20,
                    }}>
                    <Text
                      style={{
                        color: '#ffffff',
                        fontSize: responsiveFontSize(13),
                        textAlign: 'center',
                      }}>
                      {cartCount}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            )}
          </View>
          <>{headerContent}</>
        </View>
      )}
    </View>
  );
};
export default memo(CustomHeader);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: RfH(70),
    backgroundColor: Colors.appcolor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RfH(24),
  },
  headerText: {
    color: Colors.white,
    fontFamily: Fonts.UfontBold,
    fontSize: responsiveFontSize(20),
  },
  cartImg: {
    width: 25,
    height: 25,
    tintColor: Colors.white,
  },
  arrowImg: {
    width: 25,
    height: 25,
    tintColor: Colors.white,
  },
});
