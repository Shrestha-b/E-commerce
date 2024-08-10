//import liraries
import React, { Component  } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
// create a component
const MyComponent = () => {
    const todos = useSelector((state:any) => state.todos)
    console.log(todos)
    return (
        <View style={styles.container}>
            <Text>todos</Text>
            {
            todos.map((todos:any) => (
            <Text key={todos.id}>{todos.task}</Text>    
            ))
            }
            <Text>Task</Text>
            {
            todos.map((todos:any) => (
            <Text key={todos.task}>{todos.task}</Text>    
            ))
            }
       
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default MyComponent;
