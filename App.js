import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

// Custom Components

import Home from './components/home'
import StaffDash from './components/staff/staffDash';


export default function App() {

  const [initialR, setInitialR] = useState('Home')
  // const navigation = useNavigation();

  const fetchStaff = async () => {
    const token = await AsyncStorage.getItem('staffToken')

    await fetch('http://192.168.247.141:3001/staff/', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => response.json())
    .then(async (res) => {
        console.log(res)
        if(res.success){
          console.log(res.success)
          setInitialR('StaffDash')
        }
    })
    .catch((error) => {
        console.error(error);
    })
  }

  // useEffect(() => {
  //     fetchStaff()
  // }, [])

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialR}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="StaffDash" component={StaffDash} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
