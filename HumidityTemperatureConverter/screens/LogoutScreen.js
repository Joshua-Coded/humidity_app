import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { StyleSheet, Text, View } from "react-native";
import { auth } from "../firebaseConfig";

// screens/LogoutScreen.js

const LogoutScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const logout = async () => {
            try {
                await signOut(auth);
                navigation.replace('Login'); // Navigate to Login screen after logout
            } catch (e) {
                console.error('Failed to log out.', e);
            }
        };

        logout();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Logging out...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LogoutScreen;
