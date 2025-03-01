// import { DrawerNavigationProp } from '@react-navigation/drawer'; // Import DrawerNavigationProp
import {
  StyleSheet,
  Text,
  Image,
  View,
  Button,
} from 'react-native';
import React from 'react';
import { responsiveFontSize, RfH, RfW } from '../utils/helpers';
import Images from '../themes/Images';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Fonts from '../themes/Fonts';
import Head from '../Header/Head';
import CustomButton from '../comonents/CustomButton';

interface ExploreMatrimonyProps {
  navigation: any;
}

const ExploreMatrimony: React.FC<ExploreMatrimonyProps> = ({ navigation }) => {
  const Child = () => {
    // navigation.openDrawer(); // Now it will recognize openDrawer
  };

  // const handleSubmit = () => {
  //   console.log('Button pressed!');
  //   navigation.navigate('gender',{id:1,name:'shrestha'});
  // };

  const buttonText = (
    <Text style={{ color: Colors.white, fontSize: 16, fontWeight: '700' }}>
      {'Register Now'}
    </Text>
  );

  return (
    <View>
      {/* <Head
        Child={Child}
      /> */}
      <View style={styles.container}>
        <View style={styles.RegisterTxt}>
          <Text
            style={{
              marginTop: 25,
              fontSize: 14,
              fontWeight: '500',
              position: 'absolute',
            }}>
            Register to Explore
          </Text>
          <Image style={styles.timer} source={Images.timer} />
        </View>
        <View>
          <Image style={styles.Ring} source={Images.ring} />
        </View>
        <View style={styles.Initailbox}>
          <Text style={styles.Unlocktxt}>
            Unlock a World of Possibilities in Matrimony!
          </Text>
          <Text style={styles.Embarktxt}>
            Embark on a journey to find your perfect match. To explore our
            exclusive Matrimony features, kindly register and open the door to a
            realm of potential connections. Your soulmate
          </Text>
          <Text style={styles.Embarktxt}>could be just a click away!</Text>
        </View>
        {/* <CustomButton
          navigation={() => navigation.navigate('gender',{id:1,name:'shree'})}
          buttonText={buttonText}
          submitFunction={handleSubmit}
          style={styles.button}
        /> */}
        <Button title='route' onPress={() => navigation.navigate('gender',{id:1,name:'shrestha '})} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customstyle: {
    color: 'blue',
  },
  container: {
    marginTop: 180,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: Colors.white,
    height: RfH(581),
    width: RfW(375),
    alignItems: 'center',
  },
  Embarktxt: {
    fontSize: 12,
    fontWeight: '400',
  },
  Unlocktxt: {
    fontWeight: '600',
    fontSize: 18,
    color: Colors.black,
  },
  timer: {
    marginTop: 25,
    marginLeft: 328,
  },
  RegisterTxt: {
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 30,
  },
  Ring: {
    marginTop: 67,
    height: 194,
    width: 194,
  },
  Initailbox: {
    height: 139,
    width: 329,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  button: {
    borderRadius: 10,
    height: 51,
    width: 319,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FF5069',
    marginTop: 50,
  },
  btnText: {
    color: Colors.white,
    fontSize: responsiveFontSize(14),
    fontFamily: Fonts.UextraBold,
    fontWeight: '700',
  },
});

export default ExploreMatrimony;
