import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

// screens/HomeScreen.js

const HomeScreen = () => {
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [result, setResult] = useState('');

    const convert = () => {
        const tempFahrenheit = (parseFloat(temperature) * 9 / 5) + 32;
        const humidityPercentage = parseFloat(humidity) * 100;
        setResult(`Temperature: ${tempFahrenheit.toFixed(2)}°F, Humidity: ${humidityPercentage.toFixed(2)}%`);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Converter</Text>
            <TextInput
                style={styles.input}
                placeholder="Temperature in °C"
                value={temperature}
                onChangeText={setTemperature}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Humidity (decimal)"
                value={humidity}
                onChangeText={setHumidity}
                keyboardType="numeric"
            />
            <Button title="Convert" onPress={convert} />
            {result && <Text style={styles.result}>{result}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        backgroundColor: '#fff',
    },
    result: {
        marginTop: 20,
        fontSize: 18,
        textAlign: 'center',
    },
});

export default HomeScreen;
