import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("http://192.168.56.1:8800/");
        setUsers(res.data.sort((a, b) => (a.Nome > b.Nome ? 1 : (b.Nome > a.Nome ? 1 : -1))));
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);

  return (
     <View style={styles.container}>
        <View style={styles.Header}>

            <View style={styles.top}>
                <View style={styles.Localete}>
                <Feather name='map-pin' color={'white'} size={35}/>
                <Text style={styles.TxtLocalete}>Santos, Sp</Text>
                </View>
                <Feather name='bell' color={'white'} size={35} style={styles.Notif}/> 
                <TextInput placeholder="Pesquisar" style={styles.input}/>
                <View style={styles.Indicacoes}>
                    <TouchableOpacity style={styles.botoes}>
                        <Image source={require('../Assets/Restaurantes.png')} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botoes}>
                        <Image source={require('../Assets/Cafe.png')} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botoes}>
                        <Image source={require('../Assets/Show.png')} style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botoes}>
                        <Image source={require('../Assets/Bar.png')} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.TextIndicacoes}>
                    <Text style={styles.Text}>Restaurantes</Text>
                    <Text style={styles.Text}>Cafe</Text>
                    <Text style={styles.Text}>Shows</Text>
                    <Text style={styles.Text}>Bares</Text>
                </View>
            </View>
        </View>
        <View style={styles.Recomendados}>
           <Text style={styles.TxtTitulo}>Recomendados</Text>
        </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
  },
  Header:{
    backgroundColor: '#3fbdc7',
  },
  txt: {
    color: '#ffffffff',
    fontWeight: 'bold',
  },
  top: {
    width: '100%',
    maxHeight: "35%",
    marginTop: 50,
    margin: 15,
  },
  Localete: {
    flexDirection: 'row',
  },
  map: {
    width: 200,
  },
  Notif: {
    position: 'absolute',
    right: 40,
  },
    TxtLocalete: {
        color: 'white',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 2,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: 'white',
        width: '90%',
        height: 50,
        borderRadius: 10,
        paddingLeft: 20,
        marginTop: 20,
        opacity: 0.5,
    },
    icon: {
        width: 50,
        height: 50,
    },
    Indicacoes:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    botoes: {
        marginTop: 20,
        width: 80,
        height: 80,
        backgroundColor: '#fb7c02',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight:15,
    },
    TextIndicacoes: {
        flexDirection: 'row',
        marginTop: 10,
    },
    Text: {
        color: 'white',
        fontSize: 15,
        marginRight: 10,
        fontWeight: 'bold',
    },
    Recomendados: {
        marginTop: 20,
        marginLeft: 15,
    },
    TxtTitulo: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
});