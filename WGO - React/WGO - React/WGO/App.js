import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './Src/Pages';
import Home from './Src/Home'; 
import StackRoutes from './Src/Pages/stackroutes';
import Cadastrar from './Src/Cadastrar';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio"
       screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Home" component={StackRoutes} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}