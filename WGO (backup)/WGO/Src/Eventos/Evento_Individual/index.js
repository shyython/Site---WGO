import { Text, useColorScheme, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { claro, escuro } from '../../Styles/Globalstyles';
import { useState } from 'react';

export default function EventoIndividual({ route }) {
  const theme = useColorScheme();
  const estilo = theme === 'dark' ? escuro : claro;
  const [curtida, setCurtida] = useState(false);
  const [salvo, setSalvo] = useState(false);

  const { evento } = route.params;

  const [imagemPrincipal, setImagemPrincipal] = useState(evento.Img1);

  const iconeNaoCurtido = "https://cdn-icons-png.flaticon.com/128/1077/1077035.png"; 
  const iconeCurtido = "https://cdn-icons-png.flaticon.com/128/833/833472.png";
  const iconeSalvo = "https://cdn-icons-png.flaticon.com/128/7093/7093762.png";
  const Iconenaosalvo = "https://cdn-icons-png.flaticon.com/128/7131/7131186.png";

  function like() {
    setCurtida(!curtida); 
  }
  function save() {
    setSalvo(!salvo); 
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={estilo.containerEvento}>

        <Image style={estilo.ImgEventoIndi} source={{ uri: imagemPrincipal }} />

        <View style={estilo.ContainerMini}>
          {[evento.Img1, evento.Img2, evento.Img3, evento.Img4].map((img, index) => (
            <TouchableOpacity key={index} onPress={() => setImagemPrincipal(img)}>
              <Image style={estilo.MiniImg} source={{ uri: img }} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={estilo.ContainerInformacoes}>
          <Text style={estilo.TxtNomeEvento}>{evento.Nome_Evento}</Text>
          <Text style={estilo.descricao}>{evento.Descricao}</Text>
        </View>

        <View style={estilo.Det}>
          <View>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/7291/7291700.png'}} style={{width:35, height:35}} />
            <Text style={estilo.Txtloc}>{evento.Endereco}</Text>
          </View>
          <View>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/4283/4283102.png'}} style={{width:35, height:35}} />
            <Text style={estilo.Txthorario}>{evento.Horario}</Text>
          </View>
        </View>

        <View style={estilo.ContainerBtns}>
          <TouchableOpacity style={estilo.Btn}>
            <Text style={estilo.TxtBtn}>Marcar presença</Text>
          </TouchableOpacity>
        </View>

        <View style={estilo.ContainerSalva}>
          <TouchableOpacity onPress={like}>
            <Image 
              source={{ uri: curtida ? iconeCurtido : iconeNaoCurtido }} 
              style={estilo.curtir} 
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={save}>
            <Image 
              source={{ uri: salvo ? iconeSalvo : Iconenaosalvo }} 
              style={estilo.curtir} 
            />
          </TouchableOpacity>
        </View>
        
        <Text style={estilo.recomendados}>recomendados no fim da pagina</Text>
      </View>
    </ScrollView>
  );
}
