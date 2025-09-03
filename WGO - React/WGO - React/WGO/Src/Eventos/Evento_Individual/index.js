import { useEffect } from 'react';
import { StyleSheet, Text, useColorScheme, View, Image } from 'react-native';
import { claro , escuro } from '../../Styles/Globalstyles';



export default function Evento_Individual({ route }) {
    //PARAMETROS DO EVENTO
  const { idEvento, nomeEvento } = route.params;


    const theme = useColorScheme();
    const estilo = theme === 'dark' ? escuro : claro;


    useEffect(() => {
    // Exemplo: puxar dados do evento pelo ID
    const fetchEvento = async () => {
      try {
        const res = await axios.get(`http://192.168.56.1:8800/usuarios/eventos/${idEvento}`);
        console.log(res.data);
      } catch (err) {
        console.log("Erro:", err);
      }
    };

    if (idEvento) {
      fetchEvento();
    }
  }, [idEvento]);

    return(
    <View style={estilo.container}>
    <Text style={estilo.nome} ></Text>
    <Image style={estilo.ImgEvento} source={{uri: ''}} />
    <Text style={estilo.descricao}>descrição evento</Text>
    <Text style={estilo.destaque}>destaque do cardapio</Text>
    <Text  style={estilo.preco}>faixa de preço do lugar</Text>
    <Text  style={estilo.horario}>horario de funcionamento</Text>
    <Text  style={estilo.loc}>localização</Text>
    <Text style={estilo.curtir}>curtir</Text>
    <Text  style={estilo.comentar}>comentar</Text>
    <Text  style={estilo.salvar}>salvar</Text>
    <Text  style={estilo.presença}>Marcar presença</Text>
    <Text  style={estilo.recomendados}>recomendados no fim da pagina</Text>
    </View>
    )
}
