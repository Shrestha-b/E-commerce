import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MatrimonyProfile from '../Matrimony/MatrimonyProfile';
import HomeScreen from './HomeScreen';
import { useSelector } from 'react-redux';

type RoutProps = {
  navigation: any;
  route: any;
};


const Matrimony: React.FC<RoutProps> = ({ navigation, route}) => {
  return (
    <View>
      <HomeScreen navigation={navigation} route={route}/>
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
});

export default Matrimony;
