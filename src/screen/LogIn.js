import React from 'react';
import { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, Alert, TextInput } from 'react-native';
import { ScrollView, } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import { Card, } from 'react-native-paper';
import * as Animatble from 'react-native-animatable';
import Button from '../component/Button'
export default function LogIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [eyestate, setEyeState] = useState(false);

    const logIn = () => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((error) => {
                window.alert(error.code + ': ' + error.message)
            });

    }


    function refreshPage() {
        window.location.reload(false);
    }


    const passwordReset = () => {
        firebase.auth().sendPasswordResetEmail(email)
    }
    const gotoRegistation = () => {
        props.navigation.navigate('Registation')
    }


    return (
        <View style={styles.container}>
         
            <ScrollView>
                <Card style={styles.card}>
                    <Text style={{fontSize:25,fontStyle:'italic',textAlign:'center',marginTop:100,fontWeight:'bold'}}>..LOGIN..</Text>
                </Card>
                <Animatble.View animation='fadeInUpBig'>

                    <TextInput style={{ marginTop: 30, height: 45, borderBottomWidth: 0.7, marginHorizontal: 15 }}
                        placeholder='Enter your email'
                        onChangeText={(value) => setEmail(value)} />
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput style={{ marginTop: 10, height: 45, borderBottomWidth: 0.7, marginLeft: 15, width: '85%' }}
                            placeholder='Enter your password'
                            secureTextEntry={eyestate}
                            onChangeText={(password) => setPassword(password)}
                            value={password}
                        />
                        <TouchableOpacity onPress={() => {
                            setEyeState(!eyestate)
                        }}>
                            <Ionicons name={eyestate === true ? 'eye-off' : 'eye'} size={24} color="black" style={{ marginRight: 15, marginTop: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.forgotPassword}>
                        <TouchableOpacity onPress={() => passwordReset(() => refreshPage())}>
                            <Text style={styles.forgot}>forgot password?</Text>
                        </TouchableOpacity>

                    </View>
                    <Button
                        btnName="LogIn"
                        onPress={logIn}
                    />

                    <Button
                        btnName="Don't have any account!!SING UP"
                        onPress={gotoRegistation}>

                    </Button>


                </Animatble.View>
            </ScrollView>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#58ceff',
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginRight: 15,
        marginTop: 10
    },
    card: {
        height: 400,
        backgroundColor:'#58ceff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 6,
        borderBottomRightRadius:500

    }
});
