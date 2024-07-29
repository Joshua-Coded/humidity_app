import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Button as PaperButton, Surface, TextInput as PaperInput, Title } from "react-native-paper";
import { auth } from "./firebaseConfig";

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigation = useNavigation();

    const registerUser = async () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match!");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };

    return (
        <Surface style={styles.container}>
            <Title>Register</Title>
            <PaperInput
                label="Email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <PaperInput
                label="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <PaperInput
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                style={styles.input}
            />
            <PaperButton mode="contained" onPress={registerUser}>Register</PaperButton>
        </Surface>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        marginBottom: 12,
    },
});
