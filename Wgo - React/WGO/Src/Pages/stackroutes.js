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
              tabBarStyle: 
              { backgroundColor: '#3C4E69' },
              headerShown: false,
            tabBarIcon: ({color, size})=>{
            return <Feather name='home' color={'white'} size={size}/>
            },
          }} />
        <Tab.Screen
         name="Eventos" 
         component={Eventos}
         options={{
          tabBarStyle: 
              { backgroundColor: '#3C4E69' },
               headerShown: false,
            tabBarIcon: ({color, size})=>{
            return <Feather name='map' color={'white'} size={size}/>
            },
          }} />
        <Tab.Screen
         name="Perfil" 
         component={Perfil}
         options={{
          tabBarStyle: 
              { backgroundColor: '#3C4E69' },
            tabBarIcon: ({color, size})=>{
            return <Feather name='user' color={'white'} size={size}/>
            },
          }} />
          
        <Tab.Screen 
        name="Configuracoes" 
        component={Configuracoes}
        options={{
          tabBarStyle: 
              { backgroundColor: '#3C4E69' },
            tabBarIcon: ({color, size})=>{
            return <Feather name='settings' color={'white'} size={size}/>
            },
          }} />
    </Tab.Navigator>
    )
}
