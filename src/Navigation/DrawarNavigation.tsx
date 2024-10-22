import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {RfH, RfW, responsiveFontSize} from '../utils/helpers';
import Colors from '../themes/Colors';
import Fonts from '../themes/Fonts';
import {createDrawerNavigator} from '@react-navigation/drawer';
import LogOut from '../comonents/DrawerComponent.tsx/LoginOut';
import { NavigationContainer } from '@react-navigation/native';

function CustomDrawerContent({navigation}: any) {
  return (
    <View>
      <View
        style={{paddingHorizontal: RfW(20), paddingVertical: RfH(25), gap: 20}}>
        
        {/* Navigate to Shops Screen */}
        <TouchableOpacity onPress={() => navigation.navigate('Shops')}>
          <View style={styles.headerContainer}>
            <Text style={styles.textContainer}>Shops</Text>
          </View>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}>

        {/* Welcome screen */}
        <Drawer.Screen
          name="Welcome"
          component={LogOut}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerContainer: {flexDirection: 'row', gap: 10, alignItems: 'center'},
  textContainer: {
    color: Colors.appcolor,
    fontSize: responsiveFontSize(16),
    fontFamily: Fonts.UfontBold,
  },
});

export default DrawerNavigator;
