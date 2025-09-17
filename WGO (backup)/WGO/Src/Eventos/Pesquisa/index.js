import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme, Image, TouchableOpacity } from 'react-native';
import { claro, escuro } from '../../Styles/Globalstyles';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { API_URL } from '../../../ConfigsBanco/Config.js';
import { ScrollView } from 'react-native-gesture-handler';

export default function Pesquisa({ }) {
  const theme = useColorScheme();
  const estilo = theme === 'dark' ? escuro : claro;

   const route = useRoute();
  const { pesquisa, categoria } = route.params || {};
  const [eventos, setEventos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
  if (pesquisa) {
    const getSearch = async () => {
      try {
        const res = await axios.post(`${API_URL}/usuarios/eventos/search`, {
          procurar: pesquisa
        });
        setEventos(res.data.sort((a, b) => (a.Nome_Evento > b.Nome_Evento ? 1 : -1)));
      } catch (err) {
        console.log(err);
      }
    };
    getSearch();
  }
}, [pesquisa]);

useEffect(() => {
  if (categoria) {
    const getSeachbyCat = async () => {
      try {
        const res = await axios.get(`${API_URL}/usuarios/buscar`, {
          params: { procurar: categoria }
        });

        setEventos(res.data.sort((a, b) => (a.Categoria > b.Categoria ? 1 : -1)));
      } catch (err) {
        console.log(err);
      }
    };
    getSeachbyCat();
  }
}, [categoria]);

  function NavegaEvento(evento) {
    navigation.navigate('Evento_Individual', { evento });
  }

  return (
    <ScrollView>

    <View style={estilo.ContainerPesquisa}>
      <View style={estilo.ResultadoPesquisa}>
        <TouchableOpacity style={estilo.BtnVoltar} onPress={() => navigation.goBack()}>
          <Text style={estilo.TxtVoltar}>‹</Text>
        </TouchableOpacity>
        <Text style={estilo.Label}>
          Resultados para: {pesquisa ? `${pesquisa}` : `Categoria: ${categoria}`}
        </Text>

        {eventos.map((evento) => (
          <View key={evento.id || evento.Nome_Evento} >
            <TouchableOpacity onPress={() => NavegaEvento(evento)} style={estilo.EventosPesquisa}>

            <Image source={{ uri: evento.Img1 }} style={estilo.ImgPesquisa} />
            <View>
            <Text style={estilo.Txtevento}>{evento.Nome_Evento}</Text>
            <View style={estilo.ContainerInf}>

            <Text style={estilo.Txtevento}>{evento.Categoria}</Text>
            <Text style={estilo.Txteventob}>{evento.Tipo}</Text>
            </View>
            </View>
            </TouchableOpacity>
         
          </View>
        ))}
      </View>
    </View>
    </ScrollView>
  );
}
