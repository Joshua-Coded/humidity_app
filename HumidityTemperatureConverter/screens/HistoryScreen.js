import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { FlatList, ImageBackground, StyleSheet, Text, View } from "react-native";
import { auth } from "../firebaseConfig";

// screens/HistoryScreen.js

const HistoryScreen = () => {
    const [history, setHistory] = useState([]);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const loadHistory = async () => {
            try {
                const history = await AsyncStorage.getItem('conversionHistory');
                setHistory(history ? JSON.parse(history) : []);

                const user = auth.currentUser;
                setUserName(user ? user.displayName : 'User');
            } catch (e) {
                console.error('Failed to load conversion history.', e);
            }
        };

        loadHistory();
    }, []);

    return (
        <ImageBackground
            source={require('../assets/EASI.png')} // Ensure you have a background image in your assets folder
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.title}>Hello {userName}, here are your past conversions:</Text>
                <FlatList
                    data={history}
                    renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
                    keyExtractor={(item, index) => index.toString()}
                />
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
        padding: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Add a darker overlay for better text visibility
    },
    title: {
        fontSize: 28,
        marginBottom: 20,
        textAlign: 'center',
        color: '#fff',
    },
    item: {
        padding: 15,
        fontSize: 18,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
});

export default HistoryScreen;
