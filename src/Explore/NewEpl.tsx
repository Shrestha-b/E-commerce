import { NavigationProp } from '@react-navigation/native';
import { Button, StyleSheet, Text,Image,TouchableOpacity, View } from 'react-native';
import HomeScreen from '../StartScreen/HomeScreen';
import { responsiveFontSize, RfH, RfW } from '../utils/helpers';
import Images from '../themes/Images';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Fonts from '../themes/Fonts';
import Head from '../Header/Head';
const NewEpl = ({navigation}:any) => {
  return (
    <View>
      <Head />
        <View style={styles.container}>
            <View style={styles.RegisterTxt}>
            <Text style={{marginTop: 25,fontSize:14,fontWeight:'500',position:'absolute'}}>Register to Explore</Text>
            <Image style={styles.timer} source={Images.timer} />
            </View>
            {/* <View>
            <Image style={styles.Ring} source={Images.ring} />
            </View>    */}
            <View style={styles.Initailbox}>
              <Text style={styles.Unlocktxt}>Unlock a World of Possibilities in Matrimony!</Text>
              <Text style={styles.Embarktxt}>Embark on a journey to find your perfect match. To explore our exclusive Matrimony features, kindly register and open the door to a realm of potential connections. Your soulmate
              </Text>
              <Text style={styles.Embarktxt}>could be just a click away!</Text> 
            </View>
            <View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('nameai')}>
              <Text style={styles.btnText}>Explore Matrimony</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
      container:{
        marginTop: 180,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: Colors.white,
        height: RfH(581),
        width: RfW(375),
        // justifyContent: 'center',
        alignItems:'center',

    },
    Embarktxt:{
      fontSize:12,
      fontWeight:"400",
      
    },
    Unlocktxt:{
      fontWeight: "600",
      fontSize: 18,
      color: Colors.black 
     },
    timer:{
        marginTop:25,
       marginLeft: 328
      },
    RegisterTxt:{
      justifyContent:'center',
      flexDirection: 'row', 
      gap:30
    },
    Ring:{
      marginTop: 67,
      height: 194,
      width:194,
    },
    Initailbox:{
      height: 139,
      width: 329,
      justifyContent: 'center',
      alignItems:'center',
      gap: 15,
      marginTop:250
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
    })
export default NewEpl;
