import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator();
import Home from '../Home';
import Eventos from '../Eventos';
import Perfil from '../Perfil';
import Configuracoes from '../Configuracoes';

export default function StackRoutes(){
    return(
    
    <Tab.Navigator>
       <Tab.Screen
             name="Home"
            component={Home}
             options={{
              headerShown: false,
            tabBarIcon: ({color, size})=>{
            return <Feather name='home' color={color} size={size}/>
            },
          }} />
        <Tab.Screen
         name="Eventos" 
         component={Eventos}
         options={{
            tabBarIcon: ({color, size})=>{
            return <Feather name='map' color={color} size={size}/>
            },
          }} />
        <Tab.Screen
         name="Perfil" 
         component={Perfil}
         options={{
            tabBarIcon: ({color, size})=>{
            return <Feather name='user' color={color} size={size}/>
            },
          }} />
          
        <Tab.Screen 
        name="Configuracoes" 
        component={Configuracoes}
        options={{
            tabBarIcon: ({color, size})=>{
            return <Feather name='settings' color={color} size={size}/>
            },
          }} />
    </Tab.Navigator>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#1e3f5aff'
    },
        txt:{
        color:'#ffffffff',
        fontWeight: 'bold',
    }
})
