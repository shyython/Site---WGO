import { Text, useColorScheme, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { claro, escuro } from '../../Styles/Globalstyles';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function EventoIndividual({ route }) {
  const theme = useColorScheme();
  const estilo = theme === 'dark' ? escuro : claro;
  const navigation = useNavigation();

  const [curtida, setCurtida] = useState(false);
  const [salvo, setSalvo] = useState(false);

  const { evento } = route.params;
  const [imagemPrincipal, setImagemPrincipal] = useState(evento.Img1);

  // 🔹 estado para controlar aba
  const [abaAtiva, setAbaAtiva] = useState("informacoes");

  const iconeNaoCurtido = "https://cdn-icons-png.flaticon.com/128/1077/1077035.png"; 
  const iconeCurtido = "https://cdn-icons-png.flaticon.com/128/833/833472.png";
  const iconeSalvo = "https://cdn-icons-png.flaticon.com/128/7093/7093762.png";
  const Iconenaosalvo = "https://cdn-icons-png.flaticon.com/128/7131/7131186.png";

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={estilo.containerEvento}>
        <TouchableOpacity style={estilo.BtnVoltar} onPress={() => navigation.goBack()}>
          <Text style={estilo.TxtVoltar}>‹</Text>
        </TouchableOpacity>
        {/* imagem principal */}
        <Image style={estilo.ImgEventoIndi} source={{ uri: imagemPrincipal }} />

        {/* miniaturas */}
        <View style={estilo.ContainerMini}>
          {[evento.Img1, evento.Img2, evento.Img3, evento.Img4].map((img, index) => (
            <TouchableOpacity key={index} onPress={() => setImagemPrincipal(img)}>
              <Image style={estilo.MiniImg} source={{ uri: img }} />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={estilo.TxtNomeEvento}>{evento.Nome_Evento}</Text>


        <View style={{ flexDirection: "row", justifyContent: "center", marginVertical: 10 }}>
          <TouchableOpacity onPress={() => setAbaAtiva("avaliacoes")} style={{ marginHorizontal: 20 }}>
            <Text 
            style={{ 
            fontSize: 18, 
            fontWeight: abaAtiva === "avaliacoes" ? "bold" : "normal",
            color: abaAtiva === "avaliacoes" ? "orange" : "#ffffffff",
            textDecorationLine: abaAtiva === "avaliacoes" ? "underline" : "none"
            }}>
              Avaliações
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setAbaAtiva("informacoes")} style={{ marginHorizontal: 20 }}>
            <Text 
            style={{ 
              fontSize: 18, 
              fontWeight: abaAtiva === "informacoes" ? "bold" : "normal",
              color: abaAtiva === "informacoes" ? "orange" : "#ffffffff",
              textDecorationLine: abaAtiva === "informacoes" ? "underline" : "none"
              
            }}>
              Informações
            </Text>
          </TouchableOpacity>
        </View>

        {abaAtiva === "informacoes" && (
          <View style={estilo.ContainerInfoEve}>

            <Text style={estilo.descricao}>{evento.Descricao}</Text>

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
          </View>
        )}

        {abaAtiva === "avaliacoes" && (
          <View style={estilo.ContainerInfoEve}>

            <Text style={{ color: "#999" }}>Aqui você pode exibir comentários ou estrelas dos usuários.</Text>
          </View>
        )}

        <View style={estilo.ContainerBtns}>
          <TouchableOpacity style={estilo.Btn}>
            <Text style={estilo.TxtBtn}>Marcar presença</Text>
          </TouchableOpacity>
        </View>

        <View style={estilo.ContainerSalva}>
          <TouchableOpacity onPress={() => setCurtida(!curtida)}>
            <Image 
              source={{ uri: curtida ? iconeCurtido : iconeNaoCurtido }} 
              style={estilo.curtir} 
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSalvo(!salvo)}>
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
