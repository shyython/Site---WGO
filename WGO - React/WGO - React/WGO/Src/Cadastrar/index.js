import {React, useState} from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity, useColorScheme  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { claro, escuro } from '../Styles/Globalstyles';
import axios from 'axios';


export default function Cadastrar(){
    const theme = useColorScheme();
         const estilo = theme === 'dark' ? escuro : claro;

    const [Nome, setNome] = useState('');
    const [Email, setEmail] = useState('');
    const [Data_Nasc, setData_Nasc] = useState('');
    const [Senha, setSenha] = useState('');
    const [Telefone, setTelefone] = useState('');

  const addUser = async () => {
    if(!Nome || !Email || !Data_Nasc || !Senha || !Telefone){
      return alert("Preencha todos os dados!");
    }

    try {
      const res = await axios.post("http://10.59.47.20:8800/usuarios", {
        Nome,
        Email,
        Data_Nasc,
        Senha,
        Telefone,
      });
      alert(res.data);
      setNome('')
      setEmail('')
      setData_Nasc('')
      setSenha('')
      setTelefone('')
    } catch (err) {
      console.log("Erro no axios:", err);
      alert("Erro ao cadastrar!");
    }
  };

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
            <TextInput style={estilo.Cad_Txtinput} placeholder="Nome" value={Nome} onChangeText={setNome}></TextInput>
            <TextInput style={estilo.Cad_Txtinput} placeholder="Email" value={Email} onChangeText={setEmail}></TextInput>
            <View style={estilo.Cad_Inputs}>
            <TextInput style={estilo.Cad_Txtinput} type="numeric" placeholder="Data de nascimento" value={Data_Nasc} onChangeText={setData_Nasc} ></TextInput>
            <TextInput style={estilo.Cad_Txtinput} placeholder="Telefone" value={Telefone} onChangeText={setTelefone}></TextInput>
            </View>
            <TextInput style={estilo.Cad_Txtinput} placeholder="Senha" value={Senha} onChangeText={setSenha}></TextInput>
        </View>
        <TouchableOpacity title="Cadastrar" style={estilo.Cad_Btn} onPress={addUser}>
            <Text style={estilo.Cad_txt}>Criar conta gratuita</Text>
        </TouchableOpacity>
    </View>
    )
}

