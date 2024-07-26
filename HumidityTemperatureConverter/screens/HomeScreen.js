import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

// screens/HomeScreen.js

const HomeScreen = () => {
    return (
        <ImageBackground
            source={require('../assets/EASI.png')} // Ensure you have a background image in your assets folder
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Welcome to the Humidity & Temperature Converter App</Text>
                <Text style={styles.description}>
                    This app helps you to easily convert temperature from Celsius to Fahrenheit and humidity from decimal to percentage. Navigate through the tabs to start converting or view your history.
                </Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a dark overlay for better text visibility
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        textAlign: 'center',
        color: '#fff',
    },
    description: {
        fontSize: 16,
        marginBottom: 24,
        textAlign: 'center',
        color: '#fff',
    },
});

export default HomeScreen;
