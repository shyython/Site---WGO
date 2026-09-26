import { useEffect, useState } from 'react';
import { Text, View, useColorScheme, Image, TextInput, TouchableOpacity } from 'react-native';
import { claro, escuro } from '../../Styles/Globalstyles';
import { getUser} from '../../../ConfigsBanco/UsuarioGlobal';
import axios from 'axios';
import { API_URL } from '../../../ConfigsBanco/Config.js';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

export default function Editar_Perfil() {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const theme = useColorScheme();
  const estilo = theme === 'dark' ? escuro : claro;
  const [usuario, setUsuario] = useState(null);

  const [descricao, setDescricao] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  useEffect(() => {
    const getPerfil = async () => {
      try {
        const res = await axios.get(`${API_URL}/usuarios/search/${getUser()}`);
        setUsuario(res.data);
        setDescricao(res.data.Descricao || '');
        setUsername(res.data.Username || '');
        setEmail(res.data.Email || '');
        setTelefone(res.data.Telefone || '');
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

 const updatePerfil = async () => {
  
  try {
    
    await axios.put(`${API_URL}/usuarios/update/${getUser()}`, {
      Foto: image || usuario.Foto,
      Descricao: descricao,
      Username: username,
      Email: email,
      Telefone: telefone,
    });

    alert("Perfil atualizado com sucesso!");
    navigation.goBack(); 
  } catch (error) {
  if (error.response) {
    console.log("Erro resposta servidor:", error.response.status, error.response.data);
  } else if (error.request) {
    console.log("Sem resposta, problema na conexão:", error.request);
  } else {
    console.log("Erro na requisição:", error.message);
  }}
};

  return (
    <View style={estilo.container_edit}>
      <TouchableOpacity onPress={pickImage}>
        <Image 
          style={estilo.ImgPerfilEdit}
          source={{ uri: image ||"https://w7.pngwing.com/pngs/1000/665/png-transparent-computer-icons-profile-s-free-angle-sphere-profile-cliparts-free.png"  || usuario.Foto }} 
        />
      </TouchableOpacity>

      <View style={estilo.Infos}>
        <TextInput
          style={estilo.InputEditBio}
          multiline={true}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Descrição"
          placeholderTextColor={'white'}
        />

        <TextInput
          style={estilo.InputEdit}
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          placeholderTextColor={'white'}
        />

        <TextInput
          style={estilo.InputEdit}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          placeholderTextColor={'white'}
        />

        <TextInput
          style={estilo.InputEdit}
          value={telefone}
          onChangeText={setTelefone}
          placeholder="Telefone"
          placeholderTextColor={'white'}
        />

        <View style={estilo.Btns}>
          <TouchableOpacity style={estilo.BtnEdit} onPress={() => navigation.goBack()}>
            <Text style={estilo.TxtBtn}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilo.BtnEdit} onPress={updatePerfil}>
            <Text style={estilo.TxtBtn}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
