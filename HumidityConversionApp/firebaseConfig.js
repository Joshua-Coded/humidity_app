import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBkslaGWvArx7qTUS5GflBaY8S9oXa8Drw",
    authDomain: "humidity-711f2.firebaseapp.com",
    projectId: "humidity-711f2",
    storageBucket: "humidity-711f2.appspot.com",
    messagingSenderId: "1057705347414",
    appId: "1:1057705347414:web:d75509f6a5443f58f9aef7",
    measurementId: "G-GT6NE29P4T"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});
const firestore = getFirestore(app);

export { auth, firestore };
