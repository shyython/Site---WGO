import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Feather from 'react-native-vector-icons/Feather';
import Home from "../Home";
import Eventos from "../Eventos";
import Perfil from "../Perfil";
import Configuracoes from "../Configuracoes";
import Pesquisa from "../Eventos/Pesquisa";
import Evento_Individual from "../Eventos/Evento_Individual";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{ tabBarStyle: { backgroundColor: '#272727' }, headerShown: false, tabBarIcon: ({color, size})=>{ return <Feather name='home' color={'white'} size={size}/> }, }} />
      <Tab.Screen name="Eventos" component={Eventos} options={{ tabBarStyle: { backgroundColor: '#272727' }, headerShown: false, tabBarIcon: ({color, size})=>{ return <Feather name='map' color={'white'} size={size}/> }, }} />     
      <Tab.Screen name="Perfil" component={Perfil} options={{ tabBarStyle: { backgroundColor: '#272727' }, tabBarIcon: ({color, size})=>{ return <Feather name='user' color={'white'} size={size}/> }, }} />
      <Tab.Screen name="Configuracoes" component={Configuracoes} options={{ tabBarStyle: { backgroundColor: '#272727' }, tabBarIcon: ({color, size})=>{ return <Feather name='settings' color={'white'} size={size}/> }, }} />
    </Tab.Navigator>
  );
}

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={TabRoutes} options={{ headerShown: false }} />
      <Stack.Screen name="Pesquisa" component={Pesquisa} options={{ headerShown: false }} />
      <Stack.Screen name="Evento_Individual" component={Evento_Individual} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
