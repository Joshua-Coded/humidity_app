import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Button as PaperButton, Surface, TextInput as PaperInput, Title } from "react-native-paper";
import { auth } from "./firebaseConfig";

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const loginUser = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };

    return (
        <Surface style={styles.container}>
            <Title>Login</Title>
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
            <PaperButton mode="contained" onPress={loginUser}>Login</PaperButton>
            <Text onPress={() => navigation.navigate('Register')} style={styles.link}>
                Don't have an account? Register
            </Text>
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
    link: {
        marginTop: 10,
        color: 'blue',
    },
});
