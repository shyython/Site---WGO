import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home(){
    return(
    <View  style={styles.container}>
    <Text  style={styles.txt}>Home</Text>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#1e3f5aff'
    },
        txt:{
        color:'#ffffffff',
        fontWeight: 'bold',
    }
})
