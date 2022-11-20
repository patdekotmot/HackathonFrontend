import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import styles from '../styles/home'
import Portal from "./auth/portal";

export default function Home() {

    const [isLoginModal, setIsLoginModal] = useState(false)
    const [isRegisterModal, setIsRegisterModal] = useState(false)

    const closeModal = () => {
        setIsLoginModal(false)
        setIsRegisterModal(false)
    };

    return (
        <View style={styles.container}>
          {/* Modals */}
            <Portal
                isLoginModal={isLoginModal}
                isRegisterModal={isRegisterModal}
                onCancel={closeModal}
                symptoms={[]}
             />
          <View style={styles.landingBody}>
            
          </View>
          <View style={styles.bottomContainer}>
            <View>
                <Pressable style={styles.button} onPress={() => setIsLoginModal(true)}>
                    <Text style={styles.buttonText}>LOG IN</Text>
                </Pressable>
            </View>
            <View>
                <Pressable style={styles.button} onPress={() => setIsRegisterModal(true)}>
                    <Text style={styles.buttonText}>REGISTER</Text>
                </Pressable>
            </View>
          </View>
        </View>
    );
}