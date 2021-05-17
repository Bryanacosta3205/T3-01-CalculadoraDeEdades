import React from 'react'
import { StyleSheet, Text, TouchableOpacity, } from 'react-native'

const CounterButton = ({text,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0058FA',
        width: 40,
        height: 40,
        justifyContent: 'center',
        borderRadius: 5,
      },
      textButton: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
      },
})

export default CounterButton;


