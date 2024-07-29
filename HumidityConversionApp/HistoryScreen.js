import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Surface, Title } from "react-native-paper";
import { auth, firestore } from "./firebaseConfig";

export default function HistoryScreen() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const fetchHistory = async () => {
            const user = auth.currentUser;
            const q = query(collection(firestore, 'conversions'), where('userId', '==', user.uid));
            const querySnapshot = await getDocs(q);
            const historyList = [];
            querySnapshot.forEach((doc) => {
                historyList.push({ ...doc.data(), id: doc.id });
            });
            setHistory(historyList);
        };

        fetchHistory();
    }, []);

    return (
        <Surface style={styles.container}>
            <Title>Conversion History</Title>
            <FlatList
                data={history}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.historyItem}>
                        <Text>Temperature: {item.temperature}</Text>
                        <Text>Humidity: {item.humidity}</Text>
                        <Text>Result: {item.result}</Text>
                        <Text>Date: {new Date(item.timestamp.toDate()).toLocaleString()}</Text>
                    </View>
                )}
            />
        </Surface>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    historyItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#f8f8f8',
        borderWidth: 1,
        borderColor: '#ddd',
    },
});
