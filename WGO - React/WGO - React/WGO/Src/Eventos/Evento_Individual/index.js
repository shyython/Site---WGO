import {Text, useColorScheme, View, Image, Scr } from 'react-native';
import { claro , escuro } from '../../Styles/Globalstyles';
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';



export default function EventoIndividual({ route }) {
  const theme = useColorScheme();
  const estilo = theme === 'dark' ? escuro : claro;
  const { evento } = route.params;
  return (
    <ScrollView  vertical={true}>
      <View style={estilo.containerEvento}>
        <Image style={estilo.ImgEventoIndi} source={{uri: evento.Img1}} />
          <View style={estilo.ContainerMini}>
            <Image style={estilo.MiniImg} source={{uri: evento.Img2}} />
            <Image style={estilo.MiniImg} source={{uri: evento.Img3}} />
            <Image style={estilo.MiniImg} source={{uri: evento.Img4}} />
          </View>
          <View style={estilo.ContainerInformacoes}>
            <Text style={estilo.TxtNomeEvento} >{evento.Nome_Evento}</Text>
            <Text style={estilo.descricao}>{evento.Descricao}</Text>
          </View>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/7291/7291700.png'}} style={{width:35, height:35}}></Image>
            <Text  style={estilo.Txtloc}>{evento.Endereco}</Text>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/4283/4283102.png'}} style={{width:35, height:35}}></Image>
            <Text  style={estilo.Txthorario}>{evento.Horario}</Text>
        <Text style={estilo.curtir}>curtir</Text>
        <Text  style={estilo.salvar}>salvar</Text>
        <Text  style={estilo.presença}>Marcar presença</Text>
        <Text  style={estilo.recomendados}>recomendados no fim da pagina</Text>
      </View>
    </ScrollView >

  );
}