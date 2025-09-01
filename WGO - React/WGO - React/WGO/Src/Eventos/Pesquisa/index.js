import {React} from 'react';
import { StyleSheet, Text, View, useColorScheme, Image } from 'react-native';
import {claro, escuro} from '../../Styles/Globalstyles';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Pesquisa({route}){
        const theme = useColorScheme();
        const estilo = theme === 'dark' ? escuro : claro;

        //PARAMETRO DA PESQUISA
        const {setPesquisa} = route.params;

        const [eventos, setEventos] = useState([]);
        useEffect(() => {
            const getSearch = async () => {
             try {
                const res = await axios.get(`http://192.168.56.1:8800/usuarios/eventos/search?procurar=${setPesquisa}`);
                console.log(res.data);
                setEventos(res.data.sort((a, b) => (a.Id_Evento > b.Id_Evento ? 1 : -1)));
            } 
            catch (err)
            {
                console.log(err);
            }
            };
            if (setPesquisa) {
            getSearch();
            }
            }, [setPesquisa]);

        
        
    return(     
            <View style={estilo.ContainerPesquisa}>
                <View style={estilo.ResultadoPesquisa}>
                    <Text style={estilo.Label}>{setPesquisa}</Text>
                    {eventos.map((evento, index) => (
                                <View key={index} style={estilo.EventosHome}>
                                  
                                  <Image 
                                    source={{ uri: evento.Img3}} 
                                    style={estilo.ImgEvento}
                                  />
                                  <Text style={estilo.Txtevento}>{evento.Nome_Evento}</Text>
                                  <Text style={estilo.Txtevento}>4.8</Text>
                                  <TouchableOpacity style={estilo.BtnVerMais}>
                                    <Text style={estilo.TextBtnVer}>Ver Mais</Text>
                                  </TouchableOpacity>
                                </View>
                              ))}
                </View>
            </View>
    )
}

