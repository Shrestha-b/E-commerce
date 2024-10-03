import React from "react";
import {Image,View,TextInput,Text, StyleSheet} from 'react-native';
import Images from "../themes/Images";
import { RfH, RfW } from "../utils/helpers";
import { Colors } from "react-native/Libraries/NewAppScreen";
const Head = () => {
    return(
      <View style={styles.header}>

      <View style={{flexDirection:'row', gap: 10}}>
      <Image style={{height:40,width:40}} source={Images.profile} />
      <Text style={{marginTop:10,color:'black',fontWeight:'600',fontSize:14}}>Hii Alia</Text>
      </View>

     <View style={{flexDirection:'row', gap: 10, marginTop:10}}>
     <Image style={{height:25,width:25}} source={Images.NotificationBell} />
     <Image  style={{height:25,width:25}} source={Images.menuIcon} />
     </View>
     </View>
    )
}
const styles = StyleSheet.create({
        header:{
            flexDirection: 'row',
            height: RfH(40),
            width: RfW(335),
            marginBottom: 20,
            marginLeft: 20,
            marginTop: 20,
            justifyContent:'space-between',
            
          },
          input: {
            color: Colors.black,
          },
    })
export default Head