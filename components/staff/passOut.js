import { useState, useEffect } from "react";
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

export default function PassOut(props) {
    const navigation = useNavigation();

    const [isOut, setIsOut] = useState(false)
    const [message, setMessage] = useState('')

    const [entryNo, setEntryNo] = useState('')
    const [purpose, setPurpose] = useState('')
    const [staffId, setStaffId] = useState('')

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
            }
        })
        .catch((error) => {
            console.error(error);
        })
    }

    useEffect(() => {
        fetchStaff()
    }, [])

    const handlePassSubmit = async () => {
        if(true){
            await fetch('http://192.168.86.141:3001/getOut/student', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    entryNo: entryNo,
                    approvedBy: staffId,
                    purpose: purpose,
                    returnDate: "24 November 2022"
                })
            })
            .then((response) => response.json())
            .then(async (res) => {
                console.log(res)
                if(res.success){
                    // setIsIn(true)
                    setIsOut(true)
                }
            })
            .catch((error) => {
                console.error(error);
            })
        }
    }

    return (
        <View>
            {
                !isOut &&
                <View style={styles.inputContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Entry No"
                        onChangeText={(e) => setEntryNo(e)}
                        value={entryNo}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Purpose"
                        onChangeText={(e) => setPurpose(e)}
                        value={purpose}
                    />
                </View>
                <View>
                    <Pressable style={styles.button} onPress={handlePassSubmit}>
                        <Text style={styles.buttonText}>Send</Text>
                    </Pressable>
                </View>
                </View>
            }

            {
                isOut &&
                <View style={styles.infoContainer}>
                        <View>
                            <Pressable>
                                <Text>{entryNo} has been Passed Out Successfully</Text>
                            </Pressable>
                        </View>
                        <View>
                            <Pressable style={styles.button} onPress={() => {
                                setIsOut(false)
                                setEntryNo('')
                                setPurpose('')
                            }}>
                                <Text style={styles.buttonText}>Next</Text>
                            </Pressable>
                        </View>
                    </View>
            }
            <View style={styles.modalFooter}>
                
            </View>
        </View>
    )
}