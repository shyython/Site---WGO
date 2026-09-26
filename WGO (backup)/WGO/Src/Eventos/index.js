import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Text, View, Image, TouchableOpacity, useColorScheme, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { claro, escuro } from '../Styles/Globalstyles';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../../ConfigsBanco/Config.js';

export default function Eventos() {
  const theme = useColorScheme();
  const estilo = theme === 'dark' ? escuro : claro;
  const navigation = useNavigation();

  // Estados separados por categoria
  const [restaurantes, setRestaurantes] = useState([]);
  const [Entretenimento, setEntretenimento] = useState([]);
  const [shows, setShows] = useState([]);
  const [Cultural, setCultural] = useState([]);

  // Função para buscar por categoria
  const getEventosByCategoria = async (categoria, setState) => {
    try {
      const res = await axios.get(`${API_URL}/usuarios/buscar`, {
        params: { procurar: categoria },
      });
      setState(res.data);
    } catch (err) {
      console.log(`Erro ao buscar ${categoria}:`, err.message);
    }
  };

  useEffect(() => {
    getEventosByCategoria("Restaurante", setRestaurantes);
    getEventosByCategoria("Entretenimento", setEntretenimento);
    getEventosByCategoria("Shows", setShows);
    getEventosByCategoria("Cultural", setCultural);
  }, []);

  function NavegaEvento(evento) {
    navigation.navigate("Evento_Individual", { evento });
  }

  function NavegaCategoria(categoria) {
    navigation.navigate("Pesquisa", { setCategoria: categoria });
  }

  return (
    <View style={estilo.containerEventos}>
      <View style={estilo.Header}>
        <View style={estilo.top}>
          <View style={estilo.Localete}>
            <Feather name="map-pin" color={"white"} size={35} />
            <Text style={estilo.TxtLocalete}>Santos, Sp</Text>
          </View>
          <Feather name="bell" color={"white"} size={35} style={estilo.Notif} />
        </View>
      </View>
        <ScrollView>

      {/* Restaurantes */}
      <TouchableOpacity onPress={() => NavegaCategoria("Restaurante")}>
        <View style={estilo.Categoria}>
          <Text style={estilo.Label}>Restaurantes</Text>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/254/254434.png" }} style={estilo.arrow} />
        </View>
      </TouchableOpacity>
      <ScrollView horizontal>
        <View style={estilo.ListaEventos}>
          {restaurantes.map((evento, index) => (
              <View key={index} style={estilo.Eventos}>
                <TouchableOpacity onPress={() => NavegaEvento(evento)}>
              <Image source={{ uri: evento.Img1 }} style={estilo.ImgEvento} />
              <Text style={estilo.TxtTipo}>{evento.Categoria}</Text>
              <Text style={estilo.Txtevento}>{evento.Nome_Evento}</Text>
              <Text style={estilo.Txtevento}>⭐ 4.8</Text>
                </TouchableOpacity>
              <TouchableOpacity onPress={() => NavegaEvento(evento)}>
                <Text>Ver Mais</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

        {/* Entretenimento */}
        <TouchableOpacity onPress={() => NavegaCategoria("Entretenimento")}>
            <View style={estilo.Categoria}>
            <Text style={estilo.Label}>Entretenimento</Text>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/254/254434.png" }} style={estilo.arrow} />
            </View>
        </TouchableOpacity>
        <ScrollView horizontal>
            <View style={estilo.ListaEventos}>
            {Entretenimento.map((evento, index) => (
                <View key={index} style={estilo.Eventos}>
                    <TouchableOpacity onPress={() => NavegaEvento(evento)}>
                <Image source={{ uri: evento.Img1 }} style={estilo.ImgEvento} />
                <Text style={estilo.TxtTipo}>{evento.Categoria}</Text>
                <Text style={estilo.Txtevento}>{evento.Nome_Evento}</Text>
                <Text style={estilo.Txtevento}>⭐ 4.8</Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={() => NavegaEvento(evento)}>
                    <Text>Ver Mais</Text>
                </TouchableOpacity>
                </View>
            ))}
            </View>
        </ScrollView>

        {/* Shows */}
        <TouchableOpacity onPress={() => NavegaCategoria("Show")}>
            <View style={estilo.Categoria}>
            <Text style={estilo.Label}>Shows</Text>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/254/254434.png" }} style={estilo.arrow} />
            </View>
        </TouchableOpacity>
        <ScrollView horizontal>
            <View style={estilo.ListaEventos}>
            {shows.map((evento, index) => (
                <View key={index} style={estilo.Eventos}>
                    <TouchableOpacity onPress={() => NavegaEvento(evento)}>
                <Image source={{ uri: evento.Img1 }} style={estilo.ImgEvento} />
                <Text style={estilo.TxtTipo}>{evento.Categoria}</Text>
                <Text style={estilo.Txtevento}>{evento.Nome_Evento}</Text>
                <Text style={estilo.Txtevento}>⭐ 4.8</Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={() => NavegaEvento(evento)}>
                    <Text>Ver Mais</Text>
                </TouchableOpacity>
                </View>
            ))}
            </View>
        </ScrollView>

        {/* Cultural */}
        <TouchableOpacity onPress={() => NavegaCategoria("Cultural")}>
            <View style={estilo.Categoria}>
            <Text style={estilo.Label}>Cultural</Text>
            <Image source={{ uri: "https://cdn-icons-png.flaticon.com/128/254/254434.png" }} style={estilo.arrow} />
            </View>
        </TouchableOpacity>
        <ScrollView horizontal>
            <View style={estilo.ListaEventos}>
            {Cultural.map((evento, index) => (
                <View key={index} style={estilo.Eventos}>
                    <TouchableOpacity onPress={() => NavegaEvento(evento)}>
                <Image source={{ uri: evento.Img1 }} style={estilo.ImgEvento} />
                <Text style={estilo.TxtTipo}>{evento.Categoria}</Text>
                <Text style={estilo.Txtevento}>{evento.Nome_Evento}</Text>
                <Text style={estilo.Txtevento}>⭐ 4.8</Text>
                    </TouchableOpacity>
                <TouchableOpacity onPress={() => NavegaEvento(evento)}>
                    <Text>Ver Mais</Text>
                </TouchableOpacity>
                </View>
            ))}
            </View>
        </ScrollView>
    </ScrollView>
    </View>
  );
}
