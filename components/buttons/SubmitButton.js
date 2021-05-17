import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const SubmitButton = ({text,onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.textButton}>{text}</Text>
      </TouchableOpacity>
    )
}

export default SubmitButton;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0058FA',
        borderRadius: 10,
        height: 40,
        justifyContent: 'center',
      },
      textButton: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
      },
})
