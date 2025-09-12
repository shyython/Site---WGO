import { useEffect, useState } from 'react';
import { Text, View,useColorScheme, Image, TextInput, TouchableOpacity } from 'react-native';
import { claro,escuro } from '../../Styles/Globalstyles';
import { getUser } from '../../../ConfigsBanco/UsuarioGlobal';
import axios from 'axios';
import { API_URL } from '../../../ConfigsBanco/Config.js';




export default function Editar_Perfil(){
   const theme = useColorScheme();
   const estilo = theme === 'dark' ? escuro : claro;
   const [usuario, setUsuario] = useState(null);



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
 if (!usuario) {
    return (
      <View style={estilo.containerPerfil}>
        <Text>Carregando perfil...</Text>
      </View>
    );
  }

    return(
      <View  style={estilo.container_edit}>
        <Image style={estilo.ImgPerfilEdit}
          source={{ uri:usuario.Foto  }}/> 
          <View style={estilo.Infos}>
      
      <TextInput style={estilo.InputEditBio}  multiline={true} placeholder={usuario.Descricao} placeholderTextColor={'white'}></TextInput>
      
      <TextInput style={estilo.InputEdit} placeholder={usuario.Username} placeholderTextColor={'white'}></TextInput>
      <TextInput style={estilo.InputEdit} placeholder={usuario.Email} placeholderTextColor={'white'}></TextInput>
      <TextInput style={estilo.InputEdit} placeholder={usuario.Telefone} placeholderTextColor={'white'}></TextInput>
      <View style={estilo.Btns}>
      <TouchableOpacity style={estilo.BtnEdit}>
        <Text style={estilo.TxtBtn}>Voltar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.BtnEdit}>
        <Text style={estilo.TxtBtn}>Salvar</Text>
      </TouchableOpacity>
      </View>
          </View>

      </View>
    )
}
