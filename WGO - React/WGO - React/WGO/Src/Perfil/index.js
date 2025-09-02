import {React} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { claro, escuro } from '../Styles/Globalstyles';
import { useColorScheme } from 'react-native';


export default function Perfil(){
      const theme = useColorScheme();
      const estilo = theme === 'dark' ? escuro : claro;

    return(
    <View style={estilo.containerPerfil}>
        <View style={estilo.ContainerFoto}>
            <Image style={estilo.ImgPerfil} source={{uri: 'https://marketplace.canva.com/N2Y1c/MAEbiyN2Y1c/1/tl/canva-user-profile-avatar-MAEbiyN2Y1c.png'}} />            
            <View>
                    <Text style={estilo.Txtnome}>Nome do usuario</Text>
                    <Text style={estilo.Txtnickname}>@ do usuario</Text>
                <View style={estilo.Atividade}>
                    <Text style={estilo.TxtAtividade}>posts</Text>
                    <Text style={estilo.TxtAtividade}>seguidores</Text>
                    <Text style={estilo.TxtAtividade}>seguindo</Text>
                </View>
            </View>
        </View>
        <View style={estilo.ContainerBtns}>
            <TouchableOpacity style={estilo.BtnPefil}>
                <Text style={estilo.TxtBtn}>editar perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity style={estilo.BtnPefil}>
                <Text style={estilo.TxtBtn}>compartilhar perfil</Text>
            </TouchableOpacity>
        </View>
    <Text style={estilo.salvos}>Publicações</Text>
    <Text style={estilo.salvos}>Salvos</Text>
    </View>
    )
}
