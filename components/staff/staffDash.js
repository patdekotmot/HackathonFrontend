import { View, Text, useWindowDimensions } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from "react";
import styles from "../../styles/authPortal";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabView, SceneMap } from 'react-native-tab-view';
import PassOut from "./passOut";
import PassIn from "./passIn";

const FirstRoute = () => (
    <PassOut  />
);
  
const SecondRoute = () => (
    <PassIn  />
);

const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
});

export default function StaffDash({ navigation }){

    const layout = useWindowDimensions();

    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'first', title: 'Pass Out' },
        { key: 'second', title: 'Pass In' },
    ]);

    const fetchStaff = async () => {
        const token = await AsyncStorage.getItem('staffToken')

        const [staffId , setStaffId] = useState('')

        await fetch('http://192.168.86.141:3001/staff/', {
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
                console.log(res.success, "Nishant")
                setStaffId(res.data.staffId)
                navigation.navigate('StaffDash')
            }
        })
        .catch((error) => {
            console.error(error);
        })
    }

    useEffect(() => {
        fetchStaff()
    }, [])

    return(
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            />
    )
}