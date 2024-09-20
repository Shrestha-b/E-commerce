import { NavigationProp } from '@react-navigation/native';
import { Button, StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native';
import CustomHeader from '../comonents/CustomHeader';
import Images from '../themes/Images';
import { RfH, RfW } from '../utils/helpers';

const Home = ({ navigation }: { navigation:any }) => {
    <CustomHeader
    headerTitle={'Notification'}
    showcart={false}
    onBackPressHandler={() => {}}
  />
  return (
    <View style={styles.container}>
      <View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('horizontalscrollView') }>
        <Image style={styles.banjaraworld} source={Images.banjaraworld} />
      </TouchableOpacity>
      </View>
      {/* <Text>Hello</Text> */}
      
    </View>

);
};


const styles = StyleSheet.create({
  container:{
    //  justifyContent:'center',
    textAlign:'center',
    marginTop:220,
    backgroundColor:'white'
    },
    button: {
        alignItems: 'center',
        padding: 10
      },
      banjaraworld:{
        height: RfH(230),
        width: RfW(200),
      },
     
})
export default Home;
