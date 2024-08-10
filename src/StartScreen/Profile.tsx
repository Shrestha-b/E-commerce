import { NavigationProp } from '@react-navigation/native';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MyProfile from '../Propfile/Myprofile';

const Profile = ({ navigation }: { navigation: NavigationProp<any> }) => {
  return (
    <View>
      <MyProfile />
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
export default Profile;
