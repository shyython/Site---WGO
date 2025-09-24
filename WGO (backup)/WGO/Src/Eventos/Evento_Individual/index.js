import React, { useEffect, useState } from 'react';
import { Text, useColorScheme, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { claro, escuro } from '../../Styles/Globalstyles';
import axios from 'axios';
import { useRoute, useNavigation } from '@react-navigation/native';
import { getUser } from '../../../ConfigsBanco/UsuarioGlobal';
import { API_URL } from '../../../ConfigsBanco/Config.js';

export default function EventoIndividual() {
  const theme = useColorScheme();
  const estilo = theme === 'dark' ? escuro : claro;
  const route = useRoute();
  const navigation = useNavigation();

  // params possíveis:
  // { evento }  OR { eventoId }
  const params = route.params || {};
  const passedEvento = params.evento || null;
  const passedEventoId = params.eventoId || (passedEvento && passedEvento.Id_Evento) || null;

  const [evento, setEvento] = useState(passedEvento);
  const [imagemPrincipal, setImagemPrincipal] = useState(passedEvento?.Img1 ?? null);
  const [eventosSalvos, setEventosSalvos] = useState([]);
  const [salvo, setSalvo] = useState(false);
  const [carregando, setCarregando] = useState(true);

  // 1) Se só veio o id, buscar o evento no backend
  useEffect(() => {
    const fetchEvento = async () => {
      if (evento) {
        setCarregando(false);
        return;
      }
      if (!passedEventoId) {
        // não temos evento nem id - mostra mensagem
        console.warn('Nenhum evento nem eventoId recebido nos params');
        setCarregando(false);
        return;
      }
      try {
        const res = await axios.get(`${API_URL}/usuarios/eventos/${passedEventoId}`);
        setEvento(res.data);
        setImagemPrincipal(res.data?.Img1 ?? null);
      } catch (err) {
        console.error('Erro ao buscar evento por id:', err.response?.data || err.message || err);
      } finally {
        setCarregando(false);
      }
    };
    fetchEvento();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [passedEventoId]);

  // 2) Buscar eventos salvos do usuário (lista) e checar se o evento atual está salvo
  useEffect(() => {
    const fetchSalvos = async () => {
      try {
        const res = await axios.get(`${API_URL}/usuarios/eventosSalvos/${getUser()}`);
        const lista = res.data || [];
        setEventosSalvos(lista);

        // Só verifica se já está salvo quando "evento" estiver disponível
        const idAtual = evento?.Id_Evento ?? passedEventoId;
        if (idAtual) {
          const jaSalvo = lista.some(e => e.Id_Evento === idAtual || e.id === idAtual);
          setSalvo(Boolean(jaSalvo));
        }
      } catch (err) {
        console.error('Erro ao buscar eventos salvos:', err.response?.data || err.message || err);
      }
    };
    fetchSalvos();
  }, [evento, passedEventoId]);

  // 3) Toggle salvar / remover
  const handleSalvarEvento = async () => {
    const idAtual = evento?.Id_Evento ?? passedEventoId;
    if (!idAtual) {
      console.warn('Id do evento não disponível para salvar');
      return;
    }

    try {
      if (salvo) {
        // remover salvo — DELETE (recomendo implementar esse endpoint no backend)
        await axios.delete(`${API_URL}/usuarios/salvarEvento`, {
          data: { eventoId: idAtual, usuarioId: getUser() }
        });
        setSalvo(false);
      } else {
        // salvar — POST
        await axios.post(`${API_URL}/usuarios/salvarEvento`, {
          eventoId: idAtual,
          usuarioId: getUser()
        });
        setSalvo(true);
      }
    } catch (err) {
      console.error('Erro ao (des)salvar evento:', err.response?.data || err.message || err);
    }
  };

  if (carregando) {
    return (
      <View style={estilo.containerEvento}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  if (!evento) {
    return (
      <View style={estilo.containerEvento}>
        <Text>Evento não encontrado.</Text>
      </View>
    );
  }

  // fallback para imagem
  const uriPrincipal = imagemPrincipal || evento.Img1 || evento.Img2 || 'https://via.placeholder.com/800x450?text=Sem+imagem';

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={estilo.containerEvento}>
        <TouchableOpacity style={estilo.BtnVoltar} onPress={() => navigation.goBack()}>
          <Text style={estilo.TxtVoltar}>‹</Text>
        </TouchableOpacity>

        <Image style={estilo.ImgEventoIndi} source={{ uri: uriPrincipal }} />

        <View style={estilo.ContainerMini}>
          {[evento.Img1, evento.Img2, evento.Img3, evento.Img4].filter(Boolean).map((img, index) => (
            <TouchableOpacity key={index} onPress={() => setImagemPrincipal(img)}>
              <Image style={estilo.MiniImg} source={{ uri: img }} />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={estilo.TxtNomeEvento}>{evento.Nome_Evento}</Text>

        <View style={estilo.ContainerInfoEve}>
          <Text style={estilo.descricao}>{evento.Descricao}</Text>
          <View style={estilo.Det}>
            <View>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/7291/7291700.png' }} style={{ width: 35, height: 35 }} />
              <Text style={estilo.Txtloc}>{evento.Endereco}</Text>
            </View>
            <View>
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/4283/4283102.png' }} style={{ width: 35, height: 35 }} />
              <Text style={estilo.Txthorario}>{evento.Horario}</Text>
            </View>
          </View>
        </View>

        <View style={estilo.ContainerBtns}>
          <TouchableOpacity style={estilo.Btn}>
            <Text style={estilo.TxtBtn}>Marcar presença</Text>
          </TouchableOpacity>
        </View>

        <View style={estilo.ContainerSalva}>
          <TouchableOpacity onPress={() => setSalvo(prev => !prev)}>
            <Image source={{ uri: salvo ? 'https://cdn-icons-png.flaticon.com/128/833/833472.png' : 'https://cdn-icons-png.flaticon.com/128/1077/1077035.png' }} style={estilo.curtir} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSalvarEvento}>
            <Image source={{ uri: salvo ? 'https://cdn-icons-png.flaticon.com/128/7093/7093762.png' : 'https://cdn-icons-png.flaticon.com/128/7131/7131186.png' }} style={estilo.curtir} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
