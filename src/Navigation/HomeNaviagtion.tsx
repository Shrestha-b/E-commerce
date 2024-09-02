
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../component/Home';
import MainLogin from '../component/newProject/MainLogin';
import HorizontalScrollView from '../component/newProject/HorizontalScrollView';
import VerificationNew from '../component/newProject/VerificationNew';
import HomeScreen from '../StartScreen/HomeScreen';
import MyTabs from './BotomTabNavigation';
import ExploreMatrimony from '../Explore/ExploreMatrimony';
import NewEpl from '../Explore/NewEpl';
import NameAI from '../Explore/NameAI';
import EmailAddress from '../Explore/EmailAddress';
import Age from '../Explore/Age';
import AiHeight from '../Explore/height';
import Gender from '../Explore/Gender';
import MarriageStatus from '../Explore/MarriageStatus';
import UploadPhoto from '../Explore/UploadPhoto';
import MyProfile from '../Propfile/Myprofile';
import MatrimonyProfile from '../Matrimony/MatrimonyProfile';
import Clothapi from '../ApiIntrigation/clothapi';
import ShopAPI from '../ApiIntrigation/ShopAP';
import Products from '../redux/Products';
import CartHeader from '../redux/CartHearder';
import Combo from '../redux/Combo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StoreData from '../AsyncStorage.tsx/StoreData';
// import MainLogin from '../component/newProject/Login';
const Stack = createNativeStackNavigator();

function HomeNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="mainlogin" component={MainLogin}  />
        <Stack.Screen name="horizontalscrollView" component={HorizontalScrollView} options={{headerShown: false}}/>
        <Stack.Screen name="explorematrimony" component={ExploreMatrimony} options={{headerShown: false}}/>
        <Stack.Screen name="newepl" component={NewEpl} options={{headerShown: false}}/>
        <Stack.Screen name="horverificationnew" component={VerificationNew} options={{headerShown: false}}/>
        <Stack.Screen name="nameai" component={NameAI} options={{headerShown: false}}/>
        <Stack.Screen name="homescreen" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="mytabs" component={MyTabs} options={{headerShown: false}}/>
        <Stack.Screen name="emailaddress" component={EmailAddress} options={{headerShown: false}}/>
        <Stack.Screen name="age" component={Age} options={{headerShown: false}}/>
        <Stack.Screen name="aiheight" component={AiHeight} options={{headerShown: false}}/>
        <Stack.Screen name="gender" component={Gender} options={{headerShown: false}}/>
        <Stack.Screen name="marriagestatus" component={MarriageStatus} options={{headerShown: false}}/>
        <Stack.Screen name="uploadphoto" component={UploadPhoto} options={{headerShown: false}}/>
        <Stack.Screen name="MyProfile" component={MyProfile} options={{headerShown: false}}/>
        <Stack.Screen name="MetrimonyProfile" component={MatrimonyProfile} options={{headerShown: false}}/>
        <Stack.Screen name="Clothapi" component={Clothapi} options={{headerShown: false}}/>
        <Stack.Screen name="Products" component={Products} options={{headerShown: false}}/>
        <Stack.Screen name="CartHeader" component={CartHeader} options={{headerShown: false}}/>
        <Stack.Screen name="Combo" component={Combo} options={{headerShown: false}}/>
        <Stack.Screen name="ShopAPI" component={ShopAPI} options={{headerShown: false}}/>
        <Stack.Screen name="StoreData" component={StoreData} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeNavigation;