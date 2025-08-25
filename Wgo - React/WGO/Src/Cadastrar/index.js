import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity,  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


export default function Cadastrar(){
    
    return(
    <View  style={styles.container}>
        <View style={styles.BackImg}>
            <Image source={require('../Assets/bck-img.png')} style={styles.ImagemFundo} />
            <Image source={require('../Assets/Logo.png')} style={styles.Logo}/>
        </View>
        <View style={styles.Entenda}>
            <Text  style={styles.Titulotxt}>Não perca os melhores roles da sua cidade!</Text>
        </View>
        <View style={styles.Topicos}>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/1828/1828640.png'}} style={styles.Check} />
            <Text  style={styles.TxtTopicos}>Cadastre-se e aproveite todas as funcionalidades do WGO</Text>    
        </View>
        <View style={styles.Topicos}>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/1828/1828640.png'}} style={styles.Check} />
            <Text  style={styles.TxtTopicos}>Marque presença com os amigos</Text>    
        </View>
        <View style={styles.Topicos}>
            <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/1828/1828640.png'}} style={styles.Check} />
            <Text  style={styles.TxtTopicos}>Fique por dentro dos melhores roles</Text>    
        </View>
        <View>
            <TextInput style={styles.Txtinput} placeholder="Nome"></TextInput>
            <TextInput style={styles.Txtinput} placeholder="Email"></TextInput>
            <View style={styles.Inputs}>
            <TextInput style={styles.Txtinput} type="numeric" placeholder="Data de nascimento" ></TextInput>
            <TextInput style={styles.Txtinput} placeholder="Telefone"></TextInput>
            </View>
            <TextInput style={styles.Txtinput} placeholder="Senha"></TextInput>
        </View>
        <TouchableOpacity title="Cadastrar" style={styles.Btn} >
            <Text style={styles.txt}>Criar conta gratuita</Text>
        </TouchableOpacity>
    </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1
    },
        txt:{
        color:'#ffffffff',
        fontWeight: 'bold',
    },
    BackImg:{
        width:'100%',
        height:460,
        position:'absolute',
        top:0,
        backgroundColor: 'black',
        opacity:0.8,
        maxHeight:450,
    }, 
    ImagemFundo:{

        maxWidth:'100%',
        width:'100%',
        height:450,
        resizeMode:'cover',
        position:'absolute',
        top:0,
        opacity:0.5,
    },
    Logo:{
        width:100,
        height:100,
        position:'absolute',
        alignSelf:'center',
        marginTop:30,
        borderRadius:100,
        borderWidth:2,
    },
    Entenda:{
        marginTop:150,
        alignItems:'center',
    },
    Titulotxt:{
        fontSize:25,
        fontWeight:'bold',
        color:'#ffffffff',
        maxWidth:'80%',
        textAlign:'center',
    },
    Topicos:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:30,
        marginLeft:20,
    },
    Check:{
        width:30,
        height:30,
    },
    TxtTopicos:{
        color:'#ffffffff',
        fontSize:16,
        maxWidth:'80%',
        marginLeft:10,
    },
    Txtinput:{
        backgroundColor:'#ffffffff',
        width:'90%',
        height:50,
        borderRadius:10,
        paddingLeft:20,
        marginTop:20,
        alignSelf:'center',
    },
    Inputs:{
        display:'flex',
        flexDirection:'row',
        maxWidth:'50%',
        alignItems:'center',
        marginLeft:18,
    },
    Btn:{
        backgroundColor:'#325bb3ff',
        padding:10,
        width:'90%',
        alignItems:'center',
        borderRadius:5,
        marginTop:20,
        alignSelf:'center',
    }
})
