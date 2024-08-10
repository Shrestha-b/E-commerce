import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import Images from '../themes/Images';
import {RfH, RfW} from '../utils/helpers';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Fonts from '../themes/Fonts';
import {responsiveFontSize} from '../utils/helpers';

// create a component
const UploadPhoto = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <AiHade navigation={navigation} />
    </View>
  );
};

const AiHade = ({navigation}: any) => {
  return (
    <View style={styles.aiHadeContainer}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => navigation.goBack()}>
          <Image style={styles.backarrow} source={Images.backarrow} />
        </TouchableOpacity>
        <View style={styles.containers}>
          <View style={styles.line}>
            <View style={styles.part1} />
          </View>
        </View>
      </View>
      <Text style={styles.name}>Upload Your Photo</Text>
      <Text style={styles.subText}>We'd love to see you. Upload a photo.</Text>

      <View style={styles.txtbtn}>
      <View style={styles.centerMainBox}>
        <Image style={styles.mainImg} source={Images.uploadImg} />
        <View style={styles.smallcontainer}>
          <View style={styles.box}>
            <Image style={styles.smallcontainerImg} source={Images.addPic} />
          </View>
          <View style={styles.box}>
          <Image style={styles.smallcontainerImg} source={Images.addPic} />
          </View>
        </View>
      </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  smallcontainerImg: {
    height: 42.63,
    width: 42.63,
  },
  mainImg: {
    height: RfH(285),
    width: RfW(300),
  },
  centerMainBox:{
    height: RfH(446),
    width: RfW(300),
    marginTop: 30
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  aiHadeContainer: {
    alignItems: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  touchableOpacity: {
    marginLeft: 20,
  },
  backarrow: {
    width: 24,
    height: 24,
    marginTop: 10,
  },
  containers: {
    flex: 1,
    marginLeft: 77,
    marginTop: 18,
  },
  line: {
    flexDirection: 'row',
    width: 180,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#FFE9F1',
    height: RfW(8), // Set the height of the line
  },
  part1: {
    width: 180,
    backgroundColor: '#FF5069',
    borderRadius: 50, // Color for the first part
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 50,
    color: Colors.black,
  },
  subText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 20,
  },
  txtbtn: {
    flex: 1,
    justifyContent: 'space-between',
    height: RfH(569),
    width: RfW(300),
    marginTop: 41,
  },
  textInput: {
    height: 48,
    width: 300,
    backgroundColor: '#FFF',
    borderRadius: 50,
    justifyContent: 'center',
    // padding: 10
    padding: 10,
    // borderColor: '#000', // Optional: Border color if needed
    // borderWidth: 1,      // Optional: Border width if needed
    // borderRadius: 5,     // Optional: Border radius if needed
    // paddingLeft: 10,
  },
  button: {
    borderRadius: 10,
    height: 51,
    width: 319,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5069',
    marginBottom: 20
    // marginTop: 500,
  },
  btnText: {
    color: Colors.white,
    fontSize: responsiveFontSize(14),
    fontFamily: Fonts.UextraBold,
    fontWeight: '700',
  },
  smallcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop:20,
    gap: 20, // Note: gap is not supported in React Native directly, so use margin
  },
  box: {
    width: 142,
    height: 142,
    borderRadius: 22,
    backgroundColor: 'white',
    borderWidth: 2, // Assuming the border width is 2 units
    borderColor: 'pink',
    borderStyle: 'dashed',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center', // To create a gap between the boxes
  },
  
});

//make this component available to the app
export default UploadPhoto;
