import {React} from 'react';
import { StyleSheet, Text, View, useColorScheme, Image, TouchableOpacity } from 'react-native';
import {claro, escuro} from '../../Styles/Globalstyles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../../../ConfigsBanco/Config.js/index.js';


export default function Pesquisa({route}){
        const theme = useColorScheme();
        const estilo = theme === 'dark' ? escuro : claro;

        //PARAMETRO DA PESQUISA
        const {setPesquisa, setCategoria} = route.params;

        const [eventos, setEventos] = useState([]);
  useEffect(() => {
  const getSearch = async () => {
    if(setPesquisa){

      try {
        const res = await axios.post(`${API_URL}/usuarios/eventos/search`, {
          procurar:  setPesquisa 
        });
        setEventos(res.data.sort((a, b) => (a.Nome_Evento > b.Nome_Evento ? 1 : -1)));
      } catch (err) {
        console.log(err);
      }
    };
    
    if (setPesquisa) {
      getSearch();
    }
  }

}, [setPesquisa]);
  const navigation = useNavigation();
  function NavegaEvento(evento) {
  navigation.navigate('Evento_Individual', { evento });
  }
        
     return (
    <View style={estilo.ContainerPesquisa}>
      <View style={estilo.ResultadoPesquisa}>
        <Text style={estilo.Label}>Resultados para: {setPesquisa ? `Resultados para: ${setPesquisa}` : `Categoria: ${setCategoria}`}</Text>
        {eventos.map((evento, index) => (
          <View key={index} style={estilo.EventosPesquisa}>
            <Image 
              source={{ uri: evento.Img1 }} 
              style={estilo.ImgEvento}
            />
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