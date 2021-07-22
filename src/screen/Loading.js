import React from "react";
import {Text,View,StyleSheet} from 'react-native';
import { useEffect} from 'react';
// import firebase from '../firebase/firebaseconfig';
import firebase from "firebase";
export default function Loading(props){
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            props.navigation.navigate('Home')
          } else {
            props.navigation.navigate('LogIn')
          }
        });
    },[]);
    return(
        <View style={styles.container}>
            <Text>
               (: Loadinggg :)
            </Text>
        </View>

    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});