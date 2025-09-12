import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { claro, escuro } from '../Styles/Globalstyles';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../ConfigsBanco/Config.js';
import { setUser } from '../../ConfigsBanco/UsuarioGlobal/index.js';



export default function Inicio() {
   const theme = useColorScheme();
   const estilo = theme === 'dark' ? escuro : claro;

const [Email, setEmail] = useState('');
const [Senha, setSenha] = useState('');
const [users, setUsers] = useState([]);
  
  const navigation = useNavigation();
  function NavegaHome(){
  navigation.navigate('Home')
}
  useEffect(() => {

    const getUsers = async () => {
      try {
        const res = await axios.get(`${API_URL}/usuarios`);
        setUsers(res.data.sort((a, b) => (a.Id_Usuario > b.Id_Usuario ? 1 : (b.Id_Usuario > a.Id_Usuario ? 1 : -1))));
      } catch (err) {
        console.log(err);
      }
      
    };
    getUsers();
  }, []);
const VerificaLogin = () => {
  if (!Email || !Senha) {
    alert('Preencha todos os campos');
    return;
  }
  const usuario = users.find(
    (usu) => usu.Email === Email && usu.Senha === Senha 
  );
  
  if (usuario) {
    setUser(usuario.Id_Usuario);
    console.log(usuario.Id_Usuario)
    NavegaHome();
  } else {
    alert('Email ou Senha incorretos');
  }
};
  function NavegaCad(){
  navigation.navigate('Cadastrar')
};
  
  
  return (
    
      
      <View style={estilo.container}>
        <Image source={require('../Assets/Logo.png')} style={estilo.logo} />
        <TextInput placeholder="Digite seu Email" style={estilo.Input} value={Email} onChangeText={setEmail}></TextInput>
        <TextInput placeholder="Digite seu Senha" style={estilo.Input} value={Senha} onChangeText={setSenha}></TextInput>
      
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '80%'}}>
          <TouchableOpacity>
            <Text style={estilo.label}>Esqueci a Senha</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text  style={estilo.label} onPress={NavegaCad}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={estilo.Btn} onPress={VerificaLogin}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
        </View>
    
  );
}


