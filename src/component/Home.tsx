import { Button, StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native';
import CustomHeader from '../comonents/CustomHeader';
import Images from '../themes/Images';
import { RfH, RfW } from '../utils/helpers';

const Home = ({ navigation }: { navigation:any }) => {
  //   <CustomHeader
  //   headerTitle={'Notification'}
  //   showcart={false}
  //   onBackPressHandler={() => {}}
  // />
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('horizontalscrollView') }>
        <Image style={styles.banjaraworld} source={Images.banjaraworld} />
      </TouchableOpacity>      
    </View>
);
};


const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    backgroundColor:'white',
    height:RfH(800),
    alignItems:'center'
    },
    button: {
        // alignItems: 'center',
        // padding: 10
      },
      banjaraworld:{
        height: RfH(230),
        width: RfW(200),
      },
     
})
export default Home;
