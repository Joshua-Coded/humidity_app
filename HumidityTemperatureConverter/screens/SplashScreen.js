import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, StyleSheet, Text, View } from "react-native";

// screens/SplashScreen.js

const SplashScreen = () => {
    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('AuthStack'); // Navigate to AuthStack after 2 seconds
        }, 2000); // Change the duration as needed
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/EASI.png')} // Replace with your splash image
                style={styles.logo}
            />
            <Text style={styles.text}>Humidity & Temperature Converter</Text>
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
    logo: {
        width: 200,
        height: 200,
    },
    text: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SplashScreen;
