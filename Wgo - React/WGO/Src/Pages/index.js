import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';



export default function Inicio() {
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
        const res = await axios.get("http://192.168.56.1:8800/");
        setUsers(res.data.sort((a, b) => (a.Nome > b.Nome ? 1 : (b.Nome > a.Nome ? 1 : -1))));
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
    NavegaHome();
  } else {
    alert('Email ou Senha incorretos');
  }
};
  return (
    
      
      <View style={styles.container}>
        <Image source={require('../Assets/Logo.png')} style={styles.logo} />
        <TextInput placeholder="Digite seu Email" style={styles.Input} value={Email} onChangeText={setEmail}></TextInput>
        <TextInput placeholder="Digite seu Senha" style={styles.Input} value={Senha} onChangeText={setSenha}></TextInput>
      
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '80%'}}>
          <TouchableOpacity>
            <Text style={styles.label}>Esqueci a Senha</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text  style={styles.label}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.Btn} onPress={VerificaLogin}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
        </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#99b7e0',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 2,
  },
  Input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  label: {
    color: 'white',
    padding: 10,
    textDecorationLine: 'underline',
    textAlign: 'start',
  },
  Btn: {
    backgroundColor: '#3A68CD',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
});
