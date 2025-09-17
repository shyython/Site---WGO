import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Text, View, Image, TextInput, TouchableOpacity, useColorScheme, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {claro, escuro} from '../Styles/Globalstyles';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../../ConfigsBanco/Config.js';


export default function Home({}) {

  const theme = useColorScheme();
     const estilo = theme === 'dark' ? escuro : claro;
   const categorias = {
  restaurante: "Restaurante",
  cultural: "Cultural",
  show: "Shows",
  balada: "balada"
};
    const [pesquisa, setPesquisa] = useState('')
    const [evento, setEvento] = useState('')
    
  const [eventos, setEventos] = useState([]);
  const navigation = useNavigation();
 function NavegaPesquisa(params = {}) {
    if (!pesquisa.trim() && !params.categoria) {
      console.log("Pesquisa vazia, não vou buscar no banco");
      return;
    }

    navigation.navigate('Pesquisa', {
      pesquisa,
      ...params
    });
  }
  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await axios.get(`${API_URL}/usuarios/eventos`);
        setEventos(res.data.sort((a, b) => (a.Id_Evento > b.Id_Evento ? 1 : (b.Id_Evento > a.Id_Evento ? 1 : -1))));
      } catch (err) {
        console.log(err);
      }
    };
    getEvent();
  }, []);

  function NavegaEvento(evento) {
  navigation.navigate('Evento_Individual', { evento });
  }

  return (
     <View style={estilo.containerHome}>
        <View style={estilo.Header}>

            <View style={estilo.top}>
                <View style={estilo.Localete}>
                <Feather name='map-pin' color={'white'} size={35}/>
                <Text style={estilo.TxtLocalete}>Santos, Sp</Text>
                </View>
                <Feather name='bell' color={'white'} size={35} style={estilo.Notif}/> 
                <TextInput placeholder="Pesquisar" style={estilo.input} onEndEditing={NavegaPesquisa} value={pesquisa} onChangeText={setPesquisa}/>
                <View style={estilo.Indicacoes}>
                     <TouchableOpacity 
                      style={estilo.botoes} 
                      onPress={() => NavegaPesquisa({ categoria: categorias.restaurante })}>
                      <Image source={require('../Assets/Restaurantes.png')} style={estilo.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={estilo.botoes} 
                      onPress={() => NavegaPesquisa({ categoria: categorias.cultural })}>
                      <Image source={require('../Assets/Teatro.png')} style={estilo.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={estilo.botoes} 
                      onPress={() => NavegaPesquisa({ categoria: categorias.show })}>
                      <Image source={require('../Assets/Show.png')} style={estilo.icon}/>
                    </TouchableOpacity>

                    <TouchableOpacity 
                      style={estilo.botoes} 
                      onPress={() => NavegaPesquisa({ categoria: categorias.balada })}>
                      <Image source={require('../Assets/Bar.png')} style={estilo.icon}/>
                    </TouchableOpacity>
                </View>
                <View style={estilo.TextIndicacoes}>
                    <Text style={estilo.Text} >Restaurantes</Text>
                    <Text style={estilo.Text} >Cultural</Text>
                    <Text style={estilo.Text} >Shows</Text>
                    <Text style={estilo.Text} >baladaes</Text>
                </View>
            </View>
        </View>
        <View style={estilo.Recomendados}>
           <Text style={estilo.TxtTitulo}>Recomendados</Text>
        </View>
        <ScrollView horizontal={true} scrollEnabled={true} >
                <View style={estilo.ListaEventos} scrollEnabled={true}>
                   {eventos.map((evento, index) => (
            <View key={index} style={estilo.EventosHome}>
              
              <Image 
                source={{ uri: evento.Img1}} 
                style={estilo.ImgEvento}
              />
              <Text style={estilo.Txtevento} onChangeText={setEvento}>{evento.Nome_Evento}</Text>
              <Text style={estilo.Txtevento}>4.8</Text>
               <TouchableOpacity onPress={() => NavegaEvento(evento)} style={estilo.BtnVerMais}>
                <Text>Ver Mais</Text>
              </TouchableOpacity>
            </View>
          ))}
                   </View>
        </ScrollView>
  </View>
  );
}
