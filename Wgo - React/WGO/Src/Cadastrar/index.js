import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, useColorScheme  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { claro, escuro } from '../Styles/Globalstyles';
import axios from 'axios';
import { FiArrowRight } from "react-icons/fi";



export default function Cadastrar(){
    const theme = useColorScheme();
    const estilo = theme === 'dark' ? escuro : claro;

        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [dtNasc, setDtNasc] = useState('');
        const [telefone, setTelefone] = useState('');
        const [senha, setSenha] = useState('');

    const Adicionar = async () => {
        if (!nome || !email || !dtNasc || !telefone || !senha) {
          alert('Preencha todos os campos');
        }
        else {
          try {
           const response = await axios.post('http://192.168.56.1:8800/', {
              Nome_Usuario: nome,
                Email: email,
                Telefone: telefone,
                Data_Nasc: dtNasc,
                Senha: senha
            });
            console.log(response.data);
            alert('Usuário cadastrado com sucesso');
          } catch (err) {
            console.log(err);
            alert('Erro ao cadastrar usuário');
          }}}

    return(
    <View  style={estilo.Cad_container}>
        <View style={estilo.Cad_BackImg}>
            <Image source={require('../Assets/bck-img.png')} style={estilo.Cad_ImagemFundo} />
            <Image source={require('../Assets/Logo.png')} style={estilo.Cad_Logo}/>
        </View>
        <View style={estilo.Cad_Entenda}>
            <Text  style={estilo.Cad_Titulotxt}>Não perca os melhores roles da sua cidade!</Text>
        </View>
        <View style={estilo.Cad_Topicos}>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/1828/1828640.png'}} style={estilo.Cad_Check} />
            <Text  style={estilo.Cad_TxtTopicos}>Cadastre-se e aproveite todas as funcionalidades do WGO</Text>    
        </View>
        <View style={estilo.Cad_Topicos}>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/1828/1828640.png'}} style={estilo.Cad_Check} />
            <Text  style={estilo.Cad_TxtTopicos}>Marque presença com os amigos</Text>    
        </View>
        <View style={estilo.Cad_Topicos}>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/1828/1828640.png'}} style={estilo.Cad_Check} />
            <Text  style={estilo.Cad_TxtTopicos}>Fique por dentro dos melhores roles</Text>    
        </View>
        <View>
            <TextInput style={estilo.Cad_Txtinput} placeholder="Nome" value={nome} onChangeText={setNome}></TextInput>
            <TextInput style={estilo.Cad_Txtinput} placeholder="Email" value={email} onChangeText={setEmail}></TextInput>
            <View style={estilo.Cad_Inputs}>
            <TextInput style={estilo.Cad_TxtinputD} type="numeric" placeholder="Data de nasc." value={dtNasc} onChangeText={setDtNasc}></TextInput>
            <TextInput style={estilo.Cad_Txtinput} placeholder="Telefone" value={telefone} onChangeText={setTelefone}></TextInput>
            </View>
            <TextInput style={estilo.Cad_Txtinput} placeholder="Senha" value={senha} onChangeText={setSenha}></TextInput>
        </View>
        <TouchableOpacity title="Cadastrar" style={estilo.Cad_Btn} onPress={Adicionar}>
            <Text style={estilo.Cad_txt}>Criar conta gratuita</Text>
        </TouchableOpacity>
    </View>
    )
}

