import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import Images from '../themes/Images';

const ListScreen = ({navigation, route}) => {
  const [userData, setUserData] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(0);  // Force update state

  // Check for updated data from FormScreen
  useEffect(() => {
    if (route.params) {
      const {name, lastName, age} = route.params;
      console.log('Received Data:', {name, lastName, age});
      // Update the list with the received data
      setUserData(prevData => [...prevData, {name, lastName, age}]);

      console.log(route.params.name);
    }
  }, [route.params]);

  // Function to fetch data from AsyncStorage
  const fetchData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('userName');
      if (storedData) {
        setUserData(JSON.parse(storedData));
      } else {
        console.log('No data found for the given key.');
      }
    } catch (error) {
      console.error('Failed to retrieve data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [forceUpdate]); // Add forceUpdate dependency here

  const navigateToDetails = (item, index) => {
    navigation.navigate('formScreen', {
      name: item.name,
      lastName: item.lastName,
      age: item.age,
      index: index,
    });
  };

  const handleDelete = async (name, lastName, age) => {
    try {
      const updatedData = userData.filter(
        item =>
          !(item.name === name && item.lastName === lastName && item.age === age)
      );

      // Update AsyncStorage and state
      await AsyncStorage.setItem('userName', JSON.stringify(updatedData));
      setUserData(updatedData);
      setForceUpdate(prev => prev + 1);  // Force update by incrementing the counter
    } catch (error) {
      console.error('Failed to delete item:', error);
    }
  };

  // FlatList item component
  const Item = ({item, index}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{`Name: ${item.name}`}</Text>
      <Text style={styles.subtitle}>{`Last Name: ${item.lastName}`}</Text>
      <Text style={styles.subtitle}>{`Age: ${item.age}`}</Text>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => handleDelete(item.name, item.lastName, item.age)}>
          <Image source={Images.delete} />
        </TouchableOpacity>
        <Button
          title="Edit Item"
          onPress={() => navigateToDetails(item, index)}
        />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headercontainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.backarrow} />
        </TouchableOpacity>
        <Text style={styles.productHeader}>User List</Text>
        <TouchableOpacity onPress={() => navigation.navigate('formScreen')}>
          <Image source={Images.tablerplus} />
        </TouchableOpacity>
      </View>

      <View style={{width: '90%'}}>
        <FlatList
          data={userData}
          renderItem={({item, index}) => <Item item={item} index={index} />}
          keyExtractor={(item, index) => index.toString()}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No users found.</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  productHeader: {
    fontSize: 24,
    color: 'black',
  },
  headercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    width: '90%',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    width: '93%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: 'black',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
    marginTop: 20,
  },
});

export default ListScreen;
