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


const DropdownHeader = ({props}:any) => {
  const {headerTitle, onClickBack, showcart = true, cartCount} = props;

  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
        <TouchableOpacity
          onPress={() => {
            onClickBack();
          }}>
          <Image style={styles.arrowImg} source={Images.backarrow} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{headerTitle}</Text>
      </View>
    </View>
  );
};
export default memo(DropdownHeader);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RfH(24),
    paddingVertical: RfH(20),
  },
  headerText: {
    color: Colors.black,
    fontFamily: Fonts.UfontMedium,
    fontSize: responsiveFontSize(18),
  },

  arrowImg: {
    width: 25,
    height: 25,
  },
});
