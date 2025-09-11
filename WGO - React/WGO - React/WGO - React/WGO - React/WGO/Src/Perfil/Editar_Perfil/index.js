import { useEffect, useState } from 'react';
import { Text, View,useColorScheme } from 'react-native';
import { claro,escuro } from '../../Styles/Globalstyles';
import { getUser } from '../../../ConfigsBanco/UsuarioGlobal';
import axios from 'axios';
import { API_URL } from '../../../ConfigsBanco/Config.js';


export default function Editar_Perfil(){
   const theme = useColorScheme();
   const estilo = theme === 'dark' ? escuro : claro;
   const [usuario, setUsuario] = useState(null);
   console.log(getUser())
   console.log(API_URL)
   console.log(usuario)

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

    return(
    <View  style={estilo.container_edit}>
    <Text  style={estilo.txt}>{usuario.Username}</Text>
    </View>
    )
}
