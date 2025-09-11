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
  const navigation = useNavigation();
   function NavegaEdit(){
    navigation.navigate('Editar_Perfil')
   }

useEffect(() => {
  const getPerfil = async () => {
    try {
      const res = await axios.get(`${API_URL}/usuarios/search/${getUser()}`);
      setUsuario(res.data); 
      console.log(res.data)
    } catch (err) {
      console.log("Erro ao buscar perfil:", err);
    }
  };

  getPerfil();

   
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
          source={{ uri:usuario.Foto  }}
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
      <Text style={estilo.salvos}>Publicações</Text>
      <Text style={estilo.salvos}>Salvos</Text>
    </View>
  );
}
