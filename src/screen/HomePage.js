import React from "react";
import {Text,View,TouchableOpacity} from 'react-native';
import firebase from "firebase";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const logOut = () => {
    firebase.auth().signOut();
}
export default function HomePage(props){
    return(
        <View>
            <Text style={{textAlign:'center',marginTop:50,fontSize:18}}>HI BUDDY!!</Text>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',margin:5}}
                   onPress={()=> logOut()}>
                <MaterialCommunityIcons name="lock-open-outline" size={30}/>
                <Text>LOG OUT</Text>
            </TouchableOpacity>
        </View>
    );
}