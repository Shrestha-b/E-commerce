import { NavigationProp } from '@react-navigation/native';
import { Button, StyleSheet,Image, Text, TouchableOpacity, View } from 'react-native';
import CustomHeader from '../comonents/CustomHeader';
import Images from '../themes/Images';

const Home = ({ navigation }: { navigation: NavigationProp<any> }) => {
    <CustomHeader
    headerTitle={'Notification'}
    showcart={false}
    onBackPressHandler={() => {}}
  />
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('horizontalscrollView') }>
        <Text>Press Here</Text>
      </TouchableOpacity>
      {/* <Text>Hello</Text> */}
      
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
export default Home;
