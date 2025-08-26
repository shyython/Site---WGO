import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { estiloheet, Text, View, Image, TextInput, TouchableOpacity, useColorScheme } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {claro, escuro} from '../Styles/Globalstyles';

export default function Home() {
  const theme = useColorScheme();
     const estilo = theme === 'dark' ? escuro : claro;
  const [users, setUsers] = useState([]);

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

  return (
     <View style={estilo.containerHome}>
        <View style={estilo.Header}>

            <View style={estilo.top}>
                <View style={estilo.Localete}>
                <Feather name='map-pin' color={'white'} size={35}/>
                <Text style={estilo.TxtLocalete}>Santos, Sp</Text>
                </View>
                <Feather name='bell' color={'white'} size={35} style={estilo.Notif}/> 
                <TextInput placeholder="Pesquisar" style={estilo.input}/>
                <View style={estilo.Indicacoes}>
                    <TouchableOpacity style={estilo.botoes}>
                        <Image source={require('../Assets/Restaurantes.png')} style={estilo.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.botoes}>
                        <Image source={require('../Assets/Cafe.png')} style={estilo.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.botoes}>
                        <Image source={require('../Assets/Show.png')} style={estilo.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={estilo.botoes}>
                        <Image source={require('../Assets/Bar.png')} style={estilo.icon}/>
                    </TouchableOpacity>
                </View>
                <View style={estilo.TextIndicacoes}>
                    <Text style={estilo.Text}>Restaurantes</Text>
                    <Text style={estilo.Text}>Cafe</Text>
                    <Text style={estilo.Text}>Shows</Text>
                    <Text style={estilo.Text}>Bares</Text>
                </View>
            </View>
        </View>
        <View style={estilo.Recomendados}>
           <Text style={estilo.TxtTitulo}>Recomendados</Text>
        </View>
  </View>
  );
}
