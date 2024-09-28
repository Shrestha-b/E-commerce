import { NavigationProp } from '@react-navigation/native';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MatrimonyProfile from '../Matrimony/MatrimonyProfile';
import HomeScreen from './HomeScreen';
import { useSelector } from 'react-redux';

const Matrimony = ({ navigation }: { navigation: NavigationProp<any> }) => {

  return (
    <View>

       <HomeScreen/>
       <MatrimonyProfile />
     
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
      },
})
export default Matrimony;
