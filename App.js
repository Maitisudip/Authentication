import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDUFb1KdiCj7vLTmjR6aaqfY_tB3IO6vsk",
    authDomain: "authentication-86c45.firebaseapp.com",
    databaseURL: "https://authentication-86c45-default-rtdb.firebaseio.com",
    projectId: "authentication-86c45",
    storageBucket: "authentication-86c45.appspot.com",
    messagingSenderId: "892216901224",
    appId: "1:892216901224:web:3444eb31615f1aa4cd85dd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default function App() {
  return (
   <AppNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
