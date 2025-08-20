import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';



export default function Inicio() {
  const navigation = useNavigation();
  function NavegaHome(){
  navigation.navigate('Home')
}
  return (
      
      <View style={styles.container}>
        <Image source={require('../Assets/Logo.png')} style={styles.logo} />
        <TextInput placeholder="Digite seu email" style={styles.Input}></TextInput>
        <TextInput placeholder="Digite seu senha" style={styles.Input}></TextInput>
      
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '80%'}}>
          <TouchableOpacity>
            <Text style={styles.label}>Esqueci a senha</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text  style={styles.label}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.Btn} onPress={NavegaHome}>
          <Text>Entrar</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
        </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#99b7e0',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 2,
  },
  Input: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  label: {
    color: 'white',
    padding: 10,
    textDecorationLine: 'underline',
    textAlign: 'start',
  },
  Btn: {
    backgroundColor: '#3A68CD',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
});
