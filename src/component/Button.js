import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button(props) {
    return (
        <TouchableOpacity onPress={() => props.onPress()} style={styles.button}>
            <Text style={styles.txt}>{props.btnName} </Text>
        </TouchableOpacity>

    );
}
const styles = StyleSheet.create({
    button: {
        height: 40,
        backgroundColor: 'skyblue',
        marginHorizontal: 15,
        borderRadius: 20,
        marginTop: 10
    },
    txt: {
        textAlign: 'center',
        fontSize: 16,
        marginTop: 5,
        color: 'white'
    },
})
