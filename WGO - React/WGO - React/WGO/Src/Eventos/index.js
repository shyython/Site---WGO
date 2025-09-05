import React from 'react';
import { StyleSheet, Text, View, useColorScheme, TextInput, TouchableOpacity, Image } from 'react-native';
import {claro, escuro} from '../Styles/Globalstyles';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';



export default function Eventos(){
         const theme = useColorScheme();
         const estilo = theme === 'dark' ? escuro : claro;

            const Restaurante = 'Categoria'


           const navigation = useNavigation();  
            function NavegaPesquisa(){
            navigation.navigate('Pesquisa', {
            Categoria: Restaurante})
              }

    return(
    <View  style={estilo.containerEventos}>
            <View style={estilo.Header}>

            <View style={estilo.top}>
                <View style={estilo.Localete}>
                <Feather name='map-pin' color={'white'} size={35}/>
                <Text style={estilo.TxtLocalete}>Santos, Sp</Text>
                </View>
                <Feather name='bell' color={'white'} size={35} style={estilo.Notif}/> 
            </View>
        </View >    
        <TouchableOpacity onPress={NavegaPesquisa}>
            <View style={estilo.Categoria}>
                <Text style={estilo.Label} value={Restaurante}>Restaurantes</Text>
                <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/254/254434.png'}} style={estilo.arrow}/>
            </View>
        </TouchableOpacity>
    <ScrollView horizontal={true} scrollEnabled={true}>
        <View style={estilo.ListaEventos} scrollEnabled={true}>

            <View style={estilo.Eventos}>
                <Image source={{uri:'https://media-cdn.tripadvisor.com/media/photo-m/1280/14/1f/88/07/drink-nausfrago.jpg'}} style={estilo.ImgEvento}/>
                <Text style={estilo.TxtTipo}>Italiano</Text>
                <Text style={estilo.Txtevento}>Naus restaurante bar</Text>
                <Text style={estilo.Txtevento}>4.8</Text>
            </View>
            <View style={estilo.Eventos}>
                <Image source={{uri:'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/ca/cb/0d/photo2jpg.jpg?w=900&h=500&s=1'}} style={estilo.ImgEvento}/>
                <Text style={estilo.TxtTipo}>Mexicano</Text>
                <Text style={estilo.Txtevento}>D'boa mexicano</Text>
                <Text style={estilo.Txtevento}>4.7</Text>
            </View>
            <View style={estilo.Eventos}>
                <Image source={{uri:'https://www.turismosantos.com.br/static/files_turismosantos/styles/large/public/Bistro%20Calixto.jpg?itok=IrH_qlZl'}} style={estilo.ImgEvento}/>
                <Text style={estilo.TxtTipo}>Café</Text>
                <Text style={estilo.Txtevento}>Bistro calixto café</Text>
                <Text style={estilo.Txtevento}>4.5</Text>
            </View>
        </View>
        </ScrollView>
        <TouchableOpacity>
            <View style={estilo.Categoria}>
                <Text style={estilo.Label}>Passeios</Text>
                <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/254/254434.png'}} style={estilo.arrow}/>
            </View>
        </TouchableOpacity>
    <ScrollView horizontal={true} scrollEnabled={true}>
        <View style={estilo.ListaEventos} scrollEnabled={true} >

            <View style={estilo.Eventos}>
                <Image source={{uri:'https://lh3.googleusercontent.com/proxy/OLYw79skZjI2TTA5zHxaa_mScAxbBmjyv-0sJXxtV2VOKLl3952KUGE6Eb2d2V_XquLSGlZYdSVV9B0GR6AD7hZGZrcgRFMQt6g772-yLO6u6H6YpZ30qKARQIkttKOcSLSWD9e5EP06lvEs_YjXlf3B'}} style={estilo.ImgEvento}/>
                <Text style={estilo.TxtTipo}>Cultural</Text>
                <Text style={estilo.Txtevento}>Bolsa do café</Text>
                <Text style={estilo.Txtevento}>5</Text>
            </View>
            <View style={estilo.Eventos}>
                <Image source={{uri:'https://www.santos.sp.gov.br/static/files_www/styles/newspagemodal/public/field/image/isabela_carrari_2810_0.jpg'}} style={estilo.ImgEvento}/>
                <Text style={estilo.TxtTipo}>Show</Text>
                <Text style={estilo.Txtevento}>Orquestra jovem Santos</Text>
                <Text style={estilo.Txtevento}>4.3</Text>
            </View>
            <View style={estilo.Eventos}>
                <Image source={{uri:'https://navegantes.sc.gov.br/wp-content/uploads/2025/07/IMG_0287-1376x917.jpg'}} style={estilo.ImgEvento}/>
                <Text style={estilo.TxtTipo}>Caminhada</Text>
                <Text style={estilo.Txtevento}>Cãominhada Santos</Text>
                <Text style={estilo.Txtevento}>4.6</Text>
            </View>
        </View>
        </ScrollView>
    </View>
    )
}

