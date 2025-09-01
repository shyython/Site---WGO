import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Text, View, Image, TextInput, TouchableOpacity, useColorScheme, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import {claro, escuro} from '../Styles/Globalstyles';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const theme = useColorScheme();
     const estilo = theme === 'dark' ? escuro : claro;

    const [pesquisa, setPesquisa] = useState('')
    
  const [eventos, setEventos] = useState([]);
  const navigation = useNavigation();
  function NavegaPesquisa(){
  navigation.navigate('Pesquisa', {
            setPesquisa: pesquisa})
   }
  useEffect(() => {
    const getEvent = async () => {
      try {
        const res = await axios.get("http://192.168.56.1:8800/usuarios/eventos");
        console.log(res.data)
        setEventos(res.data.sort((a, b) => (a.Id_Evento > b.Id_Evento ? 1 : (b.Id_Evento > a.Id_Evento ? 1 : -1))));
      } catch (err) {
        console.log(err);
      }
    };
    getEvent();
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
                <TextInput placeholder="Pesquisar" style={estilo.input} onEndEditing={NavegaPesquisa} value={pesquisa} onChangeText={setPesquisa}/>
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
        <ScrollView horizontal={true} scrollEnabled={true} >
                <View style={estilo.ListaEventos} scrollEnabled={true}>
                   {eventos.map((evento, index) => (
            <View key={index} style={estilo.EventosHome}>
              
              <Image 
                source={{ uri: evento.Img3}} 
                style={estilo.ImgEvento}
              />
              <Text style={estilo.Txtevento}>{evento.Nome_Evento}</Text>
              <Text style={estilo.Txtevento}>4.8</Text>
              <TouchableOpacity style={estilo.BtnVerMais}>
                <Text style={estilo.TextBtnVer}>Ver Mais</Text>
              </TouchableOpacity>
            </View>
          ))}
                   </View>
        </ScrollView>
  </View>
  );
}
