import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence, initializeAuth } from "firebase/auth";

// firebaseConfig.js

const firebaseConfig = {
    apiKey: "put your code there",
    authDomain: "humidity-711f2.firebaseapp.com",
    projectId: "humidity-711f2",
    storageBucket: "humidity-711f2.appspot.com",
    messagingSenderId: "1057705347414",
    appId: "add your id here",
    measurementId: "G-GT6NE29P4T"
};

let app;
let auth;

if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage)
    });
} else {
    app = getApp();
    auth = getAuth(app);
}

export { auth };
