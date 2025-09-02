import { StyleSheet } from 'react-native';



export const claro = StyleSheet.create({
   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3C4E69',
  },
  logo: {
    width: 310,
    height: 200,
    marginBottom: 20,
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
    backgroundColor: '#E55B06',
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    borderRadius: 15,
  },

  //CADASTRAR
    Cad_container:{
        flex:1
    },
        txt:{
        color:'#ffffffff',
        fontWeight: 'bold',
    },
    Cad_BackImg:{
        width:'100%',
        height:460,
        position:'absolute',
        top:0,
        backgroundColor: 'black',
        opacity:0.8,
        maxHeight:450,
    }, 
    Cad_ImagemFundo:{

        maxWidth:'100%',
        width:'100%',
        height:450,
        resizeMode:'cover',
        position:'absolute',
        top:0,
        opacity:0.5,
    },
    Cad_Logo:{
        width:310,
        height:100,
        position:'absolute',
        alignSelf:'center',
        marginTop:30,

    },
    Cad_Entenda:{
        marginTop:150,
        alignItems:'center',
    },
    Cad_Titulotxt:{
        fontSize:25,
        fontWeight:'bold',
        color:'#ffffffff',
        maxWidth:'80%',
        textAlign:'center',
    },
    Cad_Topicos:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:30,
        marginLeft:20,
    },
    Cad_Check:{
        width:30,
        height:30,
    },
    Cad_TxtTopicos:{
        color:'#ffffffff',
        fontSize:16,
        maxWidth:'80%',
        marginLeft:10,
    },
    Cad_Txtinput:{
        backgroundColor:'#ffffffff',
        width:'90%',
        height:50,
        borderRadius:10,
        paddingLeft:20,
        marginTop:20,
        alignSelf:'center',
    },
    Cad_Inputs:{
        display:'flex',
        flexDirection:'row',
        maxWidth:'50%',
        alignItems:'center',
        marginLeft:18,
    },
    Cad_Btn:{
        backgroundColor:'#325bb3ff',
        padding:10,
        width:'90%',
        alignItems:'center',
        borderRadius:5,
        marginTop:20,
        alignSelf:'center',
    },

  //HOME

    containerHome: {
     flex: 1,
  },
  Header:{
    backgroundColor: '#3C4E69',
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

    //Eventos
    containerEventos:{
        backgroundColor:'#ffffffff',
    },
    Label:{
        fontSize:20,
        fontWeight:'bold',
        margin:10,
    },
    arrow:{
        width:15,
        height:15,
        margin:15,
    },
    Categoria:{
        flexDirection:'row',
        justifyContent: 'space-between'
        
    },
    Eventos:{
        marginTop:10,
        marginLeft:15,
        
    },
    ListaEventos:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    ImgEvento:{
        margintop:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        width:200,
        height:150,
            shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    Txtevento:{
        color:'#000000ff',
        fontSize:15,
        marginTop:5,
    },
    TxtTipo:{
        color:'#000000ff',
        fontSize:12,
        marginTop:-20,
        marginLeft:5,
        backgroundColor:'#ffffffd3',
        padding:2,
        maxWidth:'70',
        borderRadius:5,
        fontWeight:'bold',
        TextAlign:'center',
    },
})
export const escuro = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000d3', 
  },
  logo: {
    width: 310,
    height: 200,
    marginBottom: 20,

  },
  Input: {
    height: 40,
    width: '80%',
    borderColor: '#ffffffff', 
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: '#ffffffff',
    color: '#000000ff',

  },
  label: {
    color: '#ffffffff', 
    padding: 10,
    textAlign: 'start',
  },
  Btn: {
    backgroundColor: '#E55B06', 
    padding: 10,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  BtnText: {
    color: '#fff', 
    fontWeight: 'bold',
  },

  //CADASTRAR
   Cad_container: {
    flex: 1,
    backgroundColor: '#121212', // fundo escuro padrão
  },
  Cad_txt: {
    color: '#E0E0E0', // texto claro
    fontWeight: 'bold',
  },
  Cad_BackImg: {
    width: '100%',
    height: 460,
    position: 'absolute',
    top: 0,
    backgroundColor: 'black',
    opacity: 0.7, 
    maxHeight: 450,
  },
  Cad_ImagemFundo: {
    maxWidth: '100%',
    width: '100%',
    height: 450,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    opacity: 0.4,
  },
  Cad_Logo: {
    width: 310,
    height: 100,
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 30,

  },
  Cad_Entenda: {
    display: 'flex',
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Cad_Titulotxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    maxWidth: '80%',
    textAlign: 'center',
  },
  Cad_Topicos: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: 20,
  },
  Cad_Check: {
    width: 30,
    height: 30,
    tintColor: '#3A68CD',
  },
  Cad_TxtTopicos: {
    color: '#E0E0E0',
    fontSize: 16,
    maxWidth: '80%',
    marginLeft: 10,
  },
  Cad_Txtinput: {
    backgroundColor: '#686868ff',
    color: '#FFFFFF',
    width: '90%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 20,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#333',

  },
  Cad_Inputs: {
    display: 'flex',
    flexDirection: 'row',
    maxWidth: '50%',
    alignItems: 'center',
    marginLeft: 18,
  },
  Cad_Btn: {
    backgroundColor: '#3A68CD',
    padding: 10,
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center',
  },
  Cad_BtnText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  

  //HOME
  containerHome: {
    flex: 1,
    backgroundColor: '#000000ff', 
  },
  Header: {
    backgroundColor: '#272727', 
    padding: 10,
  },
  txt: {
    color: '#E0E0E0', 
    fontWeight: 'bold',
  },
  top: {
    width: '100%',
    maxHeight: '35%',
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
    color: '#FFFFFF',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 2,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#575757ff', 
    width: '90%',
    height: 50,
    borderRadius: 10,
    paddingLeft: 20,
    marginTop: 20,
    color: '#000000ff', 
  },
  icon: {
    width: 50,
    height: 50,
  },
  Indicacoes: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  botoes: {
    marginTop: 20,
    width: 80,
    height: 80,
    backgroundColor: '#E55B06', 
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  TextIndicacoes: {
    flexDirection: 'row',
    marginTop: 10,
  },
  Text: {
    color: '#E0E0E0', 
    fontSize: 15,
    marginRight: 10,
    fontWeight: 'bold',
  },
  Recomendados: {
    marginTop: 20,
    marginLeft: 15,
  },
   EventosHome: {
    marginTop: 10,
    marginLeft: 15,
    backgroundColor:'#272727',
    paddingLeft:2,
    paddingRight:2,
    maxHeight:240,
    borderRadius:2,
  },
  TxtTitulo: {
    color: '#FFFFFF', 
    fontSize: 20,
    fontWeight: 'bold',
  },
  BtnVerMais:{
    backgroundColor: '#E55B06',
    maxWidth:'90%',
    padding:2,
    borderRadius:3, 
    alignItems:'center',
    marginLeft:8,
  },
  TextBtnVer:{
    color: '#FFFFFF', 
  },

  //Eventos
   containerEventos: {
    backgroundColor: '#121212', 
    flex: 1,
  },
  Label: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    color: '#FFFFFF', 
  },
  arrow: {
    width: 15,
    height: 15,
    margin: 15,
    tintColor: '#E0E0E0', 
  },
  Categoria: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Eventos: {
    marginTop: 10,
    marginLeft: 15,
  },
  ListaEventos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ImgEvento: {
    marginTop: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    width: 200,
    height: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 6,
  },
  Txtevento: {
    color: '#E0E0E0', 
    fontSize: 15,
    marginTop: 5,
  },
  TxtTipo: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: -20,
    marginLeft: 5,
    backgroundColor: 'rgba(50, 50, 50, 0.8)', 
    padding: 2,
    maxWidth: '70%',
    borderRadius: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  //PESQUISA

  ContainerPesquisa:{
    backgroundColor:'#272727',
    marginTop: 25,
  },
  ResultadoPesquisa:{
    backgroundColor:'blue',
  },

  //Perfil

  containerPerfil:{
    backgroundColor:"#272727"
  },
  ImgPerfil:{
    width:100,
    height:100
  },
  Txtnome:{
    color:'white',
    fontWeight:'bold',
  },
  Txtnickname:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  ContainerFoto:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly',
    marginBottom:30,
  },
  Atividade:{
    display:'flex',
    flexDirection:'row',

  },
  TxtAtividade:{
    color:'white',
    marginLeft:6
  },
  ContainerBtns:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly'

  },
  Btn:{
    borderWidth:1,
    borderColor:'gray'
    
  },
  TxtBtn:{
    color:'white'
  }
});



