import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { claro, escuro } from '../Styles/Globalstyles';
import { useColorScheme } from 'react-native';
import { getUser } from '../../ConfigsBanco/UsuarioGlobal';
import axios from 'axios';
import { API_URL } from '../../ConfigsBanco/Config.js';
import { useNavigation } from '@react-navigation/core';

export default function Perfil() {
  const theme = useColorScheme();
  const estilo = theme === 'dark' ? escuro : claro;

  const [usuario, setUsuario] = useState(null);
  const [abaAtiva, setAbaAtiva] = useState("salvos");
  const [eventosSalvos, setEventosSalvos] = useState([]);


  const navigation = useNavigation();
   function NavegaEdit(){
    navigation.navigate('Editar_Perfil')
   }

useEffect(() => {
  const getPerfil = async () => {
    try {
      const res = await axios.get(`${API_URL}/usuarios/search/${getUser()}`);
      setUsuario(res.data); 
    } catch (err) {
      console.log("Erro ao buscar perfil:", err);
    }
  };

  getPerfil();

   
}, []);
useEffect(() => {
  const fetchEventosSalvos = async () => {
    try {
      const res = await axios.get(`${API_URL}/usuarios/eventosSalvos/${getUser()}`);
      setEventosSalvos(res.data);
    } catch (err) {
      console.error("Erro ao buscar eventos salvos:", err);
    }
  };

  fetchEventosSalvos();
}, []);



  if (!usuario) {
    return (
      <View style={estilo.containerPerfil}>
        <Text>Carregando perfil...</Text>
      </View>
    );
  }


  return (
    <View style={estilo.containerPerfil}>
      <View style={estilo.ContainerFoto}>
        <Image
          style={estilo.ImgPerfil}
          source={{ uri: "https://w7.pngwing.com/pngs/1000/665/png-transparent-computer-icons-profile-s-free-angle-sphere-profile-cliparts-free.png" || usuario.Foto  }}
        />
        <View>
          <Text style={estilo.Txtnome}>{usuario.Nome}</Text>
          <Text style={estilo.Txtnickname}>@{usuario.Username}</Text>
          <View style={estilo.Atividade}>
            <Text style={estilo.TxtAtividade}>posts</Text>
            <Text style={estilo.TxtAtividade}>seguidores</Text>
            <Text style={estilo.TxtAtividade}>seguindo</Text>
          </View>
          <Text style={estilo.bio}>{usuario.Descricao}</Text>
        </View>
      </View>
      <View style={estilo.ContainerBtns}>
        <TouchableOpacity style={estilo.BtnPefil} onPress={NavegaEdit}>
          <Text style={estilo.TxtBtn}>editar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilo.BtnPefil}>
          <Text style={estilo.TxtBtn}>compartilhar perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 50 }}>
          <TouchableOpacity onPress={() => setAbaAtiva("publicacoes")} style={{ marginHorizontal: 20 }}>
            <Text 
            style={{ 
            fontSize: 18, 
            fontWeight: abaAtiva === "publicacoes" ? "bold" : "normal",
            color: abaAtiva === "publicacoes" ? "orange" : "#ffffffff",
            textDecorationLine: abaAtiva === "publicacoes" ? "underline" : "none"
            }}>
              publicações
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setAbaAtiva("salvos")} style={{ marginHorizontal: 20 }}>
            <Text 
            style={{ 
              fontSize: 18, 
              fontWeight: abaAtiva === "salvos" ? "bold" : "normal",
              color: abaAtiva === "salvos" ? "orange" : "#ffffffff",
              textDecorationLine: abaAtiva === "salvos" ? "underline" : "none"
              
            }}>
              salvos
            </Text>
          </TouchableOpacity>
        </View>

        {abaAtiva === "salvos" && (
          <View style={estilo.ContainerSalvos}>
            {eventosSalvos.map((evento) => (
      <View key={evento.Id_Evento}>
        <TouchableOpacity onPress={() => navigation.navigate('Evento_Individual', { eventoId: evento.Id_Evento })}>
        <Image source={{ uri: evento.Img1 }} style={estilo.ImgEventoSalvo} />
        </TouchableOpacity>
      </View>
    ))}
           
          </View>
        )}

        {abaAtiva === "publicacoes" && (
          <View style={estilo.ContainerSalvos}>
          </View>
        )}

    </View>
  );
}
