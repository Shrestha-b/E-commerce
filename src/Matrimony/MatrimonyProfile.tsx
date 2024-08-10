//import liraries
import React, {Component} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import Images from '../themes/Images';
import {RfH, RfW} from '../utils/helpers';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {green} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

// create a component
const MatrimonyProfile = () => {
  return (
    <View style={styles.maincontainer}>
      <Image style={styles.marimonyprofile} source={Images.marimonyprofile} />
      <View style={styles.AliaView}>
        <View>
          <Text style={styles.txt1}>Alia Warner</Text>
          <Text>Pune Maharashtra | Hindu, Maratha</Text>
        </View>
        <View>
          <Image source={Images.editlogo} />
        </View>
      </View>

      <View style={styles.footerBox}>
        <View style={styles.footerBoxHeader}>
          <Text style={styles.footerBoxHeaderTXT}>My Profile</Text>
          <Text style={styles.footerBoxHeaderTXT}>My Profile</Text>
          <Text style={styles.footerBoxHeaderTXT}>My Preference</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 20,
            width: 315,
          }}>
          <Text style={styles.aboutMeTXT}>About Me</Text>
          <Image source={Images.editlogo} />
        </View>
        <View style={{height: 80, width: 315}}>
          <Text style={{fontSize: 12, fontWeight: '400'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget mi
            nec neque bibendum dapibus. Duis justo lorem, porta a consequat sit
            amet, vulputate placerat magna.
          </Text>
        </View>

        <HorizontalLine />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 20,
            width: 315,
          }}>
          <Text style={styles.aboutMeTXT}>Personal Details</Text>
          <Image source={Images.editlogo} />
        </View>

        <View style={styles.DOB}>
          <View>
            <Text>Date of Birth</Text>
            <Text>02-05-1995</Text>
          </View>
          <View>
            <Text>Birth Time</Text>
            <Text>04:15 AM</Text>
          </View>
        </View>

        <View style={styles.DOB}>
          <View>
            <Text>Religion</Text>
            <Text>Hindu</Text>
          </View>
          <View>
            <Text>Height</Text>
            <Text>156 cm</Text>
          </View>
        </View>

      </View>
    </View>
  );
};

const HorizontalLine = () => {
    return <View style={styles.line} />;
  };

// define your styles
const styles = StyleSheet.create({
  marimonyprofile: {
    height: RfH(375),
    width: RfW(375),
  },
  txt1: {
    fontSize: 24,
    color: Colors.black,
  },
  maincontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerBox: {
    height: RfH(285),
    width: RfW(335),
    backgroundColor: 'white',
    borderColor: 'green',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  AliaView: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: RfH(44),
    width: RfW(335),
  },
  footerBoxHeader: {
    flexDirection: 'row',
    height: RfH(17),
    width: RfW(315),
    justifyContent: 'space-between',
  },
  footerBoxHeaderTXT: {
    fontWeight: '400',
    fontSize: 14,
  },

  aboutMeTXT: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black',
  },
  DOB:{
    flexDirection:'row',
    height:32,
    width: 200,
    gap:40,
    justifyContent:'flex-start'
  },
  line: {
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

//make this component available to the app
export default MatrimonyProfile;
