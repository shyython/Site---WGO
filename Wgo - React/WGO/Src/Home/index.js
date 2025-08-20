import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import express from 'express';
import userrouter from '../Controles/user';
import cors from 'cors';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', userrouter);
app.listen(8800)
const [users, setUsers] = useState([]);


export default function Home(){
const getUsers = async() => {
    try{
        const res = await axios.get("http://localhost:8800/");
        setUsers(res.data.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? 1 : -1)));
        console.log(json);
    } catch(err){
        console.log(err);
    }
}

    return(
    <View  style={styles.container}>
    <Text  style={styles.txt}>{value=users}</Text>
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
