import React, {  useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Item = ({userName,age}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
            <Text style={styles.name}>{userName}</Text>
            <Text  style={styles.age}>{age}</Text>
            </View>
            
        </View>
    )
}

export default Item

const styles = StyleSheet.create({
    container:{
        paddingLeft:20,
        paddingRight:20,
        marginBottom:10,
        width:'100%',
    },
    wrapper:{
        flexDirection:'row',
        justifyContent:'space-between',
        
        padding:10,
        borderRadius:10
    },
    name:{
        fontSize:20,
        
    },
    age:{
        fontSize:20,
        fontWeight:'bold'
    }
})
