import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// screens/ConvertScreen.js

const ConvertScreen = () => {
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [result, setResult] = useState('');

    const handleConvert = async () => {
        const tempFahrenheit = (parseFloat(temperature) * 9 / 5) + 32;
        const humidityPercentage = parseFloat(humidity) * 100;
        const conversionResult = `Temperature: ${tempFahrenheit.toFixed(2)}°F, Humidity: ${humidityPercentage.toFixed(2)}%`;

        setResult(conversionResult);

        // Save to history
        try {
            const history = await AsyncStorage.getItem('conversionHistory');
            const historyArray = history ? JSON.parse(history) : [];
            historyArray.push(conversionResult);
            await AsyncStorage.setItem('conversionHistory', JSON.stringify(historyArray));
        } catch (e) {
            console.error('Failed to save conversion history.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Convert</Text>
            <TextInput
                style={styles.input}
                placeholder="Temperature in Celsius"
                value={temperature}
                onChangeText={setTemperature}
                keyboardType="numeric"
                placeholderTextColor="#ccc"
            />
            <TextInput
                style={styles.input}
                placeholder="Humidity in Decimal"
                value={humidity}
                onChangeText={setHumidity}
                keyboardType="numeric"
                placeholderTextColor="#ccc"
            />
            <Button title="Convert" onPress={handleConvert} color="#007BFF" />
            {result && <Text style={styles.result}>{result}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 28,
        marginBottom: 20,
        textAlign: 'center',
        color: '#333',
    },
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 16,
        paddingHorizontal: 12,
        backgroundColor: '#fff',
        fontSize: 16,
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#333',
    },
});

export default ConvertScreen;
