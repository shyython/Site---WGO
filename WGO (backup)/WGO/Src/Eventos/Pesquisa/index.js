import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme, Image, TouchableOpacity } from 'react-native';
import { claro, escuro } from '../../Styles/Globalstyles';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../../../ConfigsBanco/Config.js';

export default function Pesquisa({ route }) {
  const theme = useColorScheme();
  const estilo = theme === 'dark' ? escuro : claro;

  const { setPesquisa, setCategoria } = route.params;
  const [eventos, setEventos] = useState([]);
  const navigation = useNavigation();

  // Função para buscar por categoria
  const getSeachbyCat = async (categoria) => {
    try {
      const res = await axios.post(`${API_URL}/usuarios/eventos/search`, {
        procurar: categoria
      });
      setEventos(res.data.sort((a, b) => (a.Nome_Evento > b.Nome_Evento ? 1 : -1)));
    } catch (err) {
      console.log(err);
    }
  };

  // Buscar pelo termo de pesquisa
  useEffect(() => {
    const getSearch = async () => {
      try {
        const res = await axios.post(`${API_URL}/usuarios/eventos/search`, {
          procurar: setPesquisa
        });
        setEventos(res.data.sort((a, b) => (a.Nome_Evento > b.Nome_Evento ? 1 : -1)));
      } catch (err) {
        console.log(err);
      }
    };

    if (setPesquisa) {
      getSearch();
    }
  }, [setPesquisa]);

  // Buscar automaticamente quando a categoria mudar
  useEffect(() => {
    if (setCategoria) {
      getSeachbyCat(setCategoria);
    }
  }, [setCategoria]);

  // Navegação para evento individual
  function NavegaEvento(evento) {
    navigation.navigate('Evento_Individual', { evento });
  }

  return (
    <View style={estilo.ContainerPesquisa}>
      <View style={estilo.ResultadoPesquisa}>
        <TouchableOpacity style={estilo.BtnVoltar} onPress={() => navigation.goBack()}>
          <Text style={estilo.TxtVoltar}>‹</Text>
        </TouchableOpacity>
        <Text style={estilo.Label}>
          Resultados para: {setPesquisa ? `${setPesquisa}` : `Categoria: ${setCategoria}`}
        </Text>

        {eventos.map((evento) => (
          <View key={evento.id || evento.Nome_Evento} style={estilo.EventosPesquisa}>
            <Image source={{ uri: evento.Img1 }} style={estilo.ImgEvento} />
            <Text style={estilo.Txtevento}>{evento.Nome_Evento}</Text>
            <Text style={estilo.Txtevento}>4.8</Text>
            <TouchableOpacity onPress={() => NavegaEvento(evento)} style={estilo.BtnVerMaisPesquisa}>
              <Text style={estilo.TextBtnVer}>Ver Mais</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}
