import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../StartScreen/HomeScreen';
import Shop from '../StartScreen/Shop';
import Profile from '../StartScreen/Profile';
import Matrimony from '../StartScreen/Login';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor:'#F64775',
      tabBarInactiveTintColor:'grey',
      tabBarShowLabel:true,
    }}>
      <Tab.Screen name="Home" component={HomeScreen}  
      options={{headerShown: false,
        tabBarIcon:({color,size})=>(
          <Octicons name="home" size={size} color={color} />
        )
      }}
     />
      <Tab.Screen name="Shopping" component={Shop}   options={{headerShown: false,
        tabBarIcon:({color,size})=>(
          <MaterialCommunityIcons name="shopping-outline" size={size} color={color} />
        )
        }}/>
      <Tab.Screen name="Matrimony" component={Matrimony} options={{headerShown: false,
         tabBarIcon:({color,size})=>(
          <Entypo name="man" size={size} color={color} />
        )
      }}/>
      <Tab.Screen name="profile" component={Profile} options={{headerShown: false,
          tabBarIcon:({color,size})=>(
            <Entypo name="user" size={size} color={color} />
          )
      }}/>
    </Tab.Navigator>
  );
}
export default MyTabs;