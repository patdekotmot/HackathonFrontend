import { useState } from "react";
import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "../../styles/authPortal";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function Portal(props) {
    const navigation = useNavigation();

    const [staffId, setStaffId] = useState('')
    const [password, setPassword] = useState('')

    const handlePortalSubmit = async () => {
        if(props.isLoginModal){
            await fetch('http://192.168.86.141:3001/login/staff', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    staffId: staffId,
                    password: password
                })
            })
            .then((response) => response.json())
            .then(async (res) => {
                console.log(res)
                if(res.success){
                    await AsyncStorage.setItem('staffToken', res.token)
                    navigation.navigate('StaffDash')
                }
            })
            .catch((error) => {
                console.error(error);
            })
        }else if(props.isRegisterModal){
            await fetch('http://192.168.86.141:3001/register/staff', {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    staffId: staffId,
                    password: password
                })
            })
            .then((response) => response.json())
            .then(async (res) => {
                console.log(res)
                if(res.success){
                    await AsyncStorage.setItem('staffToken', res.token)
                    setStaffId('')
                    setPassword('')
                    navigation.navigate('StaffDash')
                }
            })
            .catch((error) => {
                console.error(error);
            })
        }
    }

    return (
        <Modal visible={props.isLoginModal || props.isRegisterModal} animationType="slide">
            <View style={styles.modalHeader}>
                <Pressable onPress={props.onCancel} style={styles.backBtn}>
                <Text style={{ fontSize: 32, color: "#5669ff" }}>←</Text>
                </Pressable>
                <Text style={styles.modalHeaderHeading}>{props.isLoginModal ? 'Login Portal' : props.isRegisterModal ? 'Register Portal' : ''}</Text>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Staff Id"
                        onChangeText={(e) => setStaffId(e)}
                        value={staffId}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={(e) => setPassword(e)}
                        value={password}
                    />
                </View>
                <View>
                    <Pressable style={styles.button} onPress={handlePortalSubmit}>
                        <Text style={styles.buttonText}>{props.isLoginModal ? 'Log IN' : props.isRegisterModal ? 'Register' : ''}</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.modalFooter}>
                
            </View>
        </Modal>
    )
}