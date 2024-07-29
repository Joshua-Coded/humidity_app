import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { addDoc, collection } from "firebase/firestore";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Button as PaperButton, Surface, TextInput as PaperInput, Title } from "react-native-paper";
import { auth, firestore } from "./firebaseConfig";

export default function HomeScreen() {
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [result, setResult] = useState('');
    const navigation = useNavigation();

    const calculateHumidity = () => {
        const humidityResult = (parseFloat(temperature) * parseFloat(humidity)) / 100;
        setResult(humidityResult.toString());
        saveToHistory(humidityResult.toString());
    };

    const saveToHistory = async (result) => {
        const user = auth.currentUser;
        try {
            await addDoc(collection(firestore, 'conversions'), {
                userId: user.uid,
                temperature,
                humidity,
                result,
                timestamp: new Date(),
            });
        } catch (error) {
            console.error('Error saving conversion:', error);
        }
    };

    const logout = async () => {
        try {
            await auth.signOut();
            navigation.navigate('Login');
        } catch (error) {
            console.log(error);
            alert(error.message);
        }
    };

    return (
        <Surface style={styles.container}>
            <Title>Humidity Conversion</Title>
            <PaperInput
                label="Temperature"
                value={temperature}
                onChangeText={setTemperature}
                style={styles.input}
                keyboardType="numeric"
            />
            <PaperInput
                label="Humidity"
                value={humidity}
                onChangeText={setHumidity}
                style={styles.input}
                keyboardType="numeric"
            />
            <PaperButton mode="contained" onPress={calculateHumidity}>Convert</PaperButton>
            {result ? <Text>Result: {result}</Text> : null}
            <PaperButton mode="contained" onPress={() => navigation.navigate('History')}>View History</PaperButton>
            <PaperButton mode="contained" onPress={logout}>Logout</PaperButton>
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
