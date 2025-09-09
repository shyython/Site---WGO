import { StyleSheet } from 'react-native';



export const claro = StyleSheet.create({
  // GERAIS (login etc.)
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#3C4E69' },
  logo: { width: 310, height: 200, marginBottom: 20 },
  Input: {
    height: 40, width: '80%', borderColor: '#B0B0B0', borderWidth: 1, marginBottom: 10,
    paddingHorizontal: 10, marginTop: 10, borderRadius: 5, backgroundColor: '#FFFFFF', color: '#000000',
  },
  label: { color: '#333333', padding: 10, textAlign: 'start' },
  Btn: { backgroundColor: '#E55B06', padding: 10, width: '80%', alignItems: 'center', borderRadius: 5, marginTop: 10 },
  BtnText: { color: '#FFFFFF', fontWeight: 'bold' },

  // CADASTRAR
  Cad_container: { flex: 1, backgroundColor: '#FFFFFF' },
  Cad_txt: { color: '#222222', fontWeight: 'bold' },
  Cad_BackImg: { width: '100%', height: 460, position: 'absolute', top: 0, backgroundColor: '#FFFFFF', opacity: 0.7, maxHeight: 450 },
  Cad_ImagemFundo: { maxWidth: '100%', width: '100%', height: 450, resizeMode: 'cover', position: 'absolute', top: 0, opacity: 0.5 },
  Cad_Logo: { width: 310, height: 100, position: 'absolute', alignSelf: 'center', marginTop: 30 },
  Cad_Entenda: { marginTop: 150, alignItems: 'center' },
  Cad_Titulotxt: { fontSize: 25, fontWeight: 'bold', color: '#222222', maxWidth: '80%', textAlign: 'center' },
  Cad_Topicos: { flexDirection: 'row', alignItems: 'center', marginTop: 30, marginLeft: 20 },
  Cad_Check: { width: 30, height: 30, tintColor: '#3A68CD' },
  Cad_TxtTopicos: { color: '#333333', fontSize: 16, maxWidth: '80%', marginLeft: 10 },
  Cad_Txtinput: {
    backgroundColor: '#FFFFFF', color: '#000000', width: '90%', height: 50, borderRadius: 10,
    paddingLeft: 20, marginTop: 20, alignSelf: 'center', borderWidth: 1, borderColor: '#CCCCCC',
  },
  Cad_Inputs: { display: 'flex', flexDirection: 'row', maxWidth: '50%', alignItems: 'center', marginLeft: 18 },
  Cad_Btn: { backgroundColor: '#3A68CD', padding: 10, width: '90%', alignItems: 'center', borderRadius: 5, marginTop: 20, alignSelf: 'center' },
  Cad_BtnText: { color: '#FFFFFF', fontWeight: 'bold' },

  // HOME
  containerHome: { flex: 1, backgroundColor: '#F5F6FA' },
  Header: { backgroundColor: '#3C4E69', padding: 10 },
  txt: { color: '#222222', fontWeight: 'bold' },
  top: { width: '100%', maxHeight: '35%', marginTop: 50, margin: 15 },
  Localete: { flexDirection: 'row' },
  map: { width: 200 },
  Notif: { position: 'absolute', right: 40 },
  TxtLocalete: { color: '#000000', fontSize: 20, marginLeft: 10, marginTop: 2, fontWeight: 'bold' },
  input: {
    backgroundColor: '#FFFFFF', width: '90%', height: 50, borderRadius: 10, paddingLeft: 20, marginTop: 20,
    color: '#000000', borderWidth: 1, borderColor: '#CCCCCC',
  },
  icon: { width: 50, height: 50 },
  Indicacoes: { flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20 },
  botoes: {
    marginTop: 20, width: 80, height: 80, backgroundColor: '#E55B06', borderRadius: 10,
    justifyContent: 'center', alignItems: 'center', marginRight: 15,
  },
  TextIndicacoes: { flexDirection: 'row', marginTop: 10 },
  Text: { color: '#222222', fontSize: 15, marginRight: 10, fontWeight: 'bold' },
  Recomendados: { marginTop: 20, marginLeft: 15 },
  EventosHome: {
    marginTop: 10, marginLeft: 15, backgroundColor: '#FFFFFF', paddingLeft: 2, paddingRight: 2,
    maxHeight: 240, borderRadius: 2, borderWidth: 1, borderColor: '#E0E0E0',
  },
  TxtTitulo: { color: '#000000', fontSize: 20, fontWeight: 'bold' },
  BtnVerMais: { backgroundColor: '#E55B06', maxWidth: '90%', padding: 2, borderRadius: 3, alignItems: 'center', marginLeft: 8 },
  TextBtnVer: { color: '#FFFFFF' },

  // EVENTOS (lista)
  containerEventos: { backgroundColor: '#F5F6FA', flex: 1 },
  Label: { fontSize: 20, fontWeight: 'bold', margin: 10, color: '#000000' },
  arrow: { width: 15, height: 15, margin: 15, tintColor: '#333333' },
  Categoria: { flexDirection: 'row', justifyContent: 'space-between' },
  Eventos: { marginTop: 10, marginLeft: 15 },
  ListaEventos: { flexDirection: 'row', justifyContent: 'space-between' },
  ImgEvento: {
    marginTop: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, width: 200, height: 150,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 4,
  },
  Txtevento: { color: '#333333', fontSize: 15, marginTop: 5 },
  TxtTipo: {
    color: '#000000', fontSize: 12, marginTop: -20, marginLeft: 5,
    backgroundColor: 'rgba(255,255,255,0.8)', padding: 2, maxWidth: '70%', borderRadius: 5,
    fontWeight: 'bold', textAlign: 'center',
  },

  // PESQUISA
  ContainerPesquisa: { flex: 1, backgroundColor: '#F5F6FA' },
  ResultadoPesquisa: { backgroundColor: '#F5F6FA', marginTop: 25, alignItems: 'center' },
  EventosPesquisa: { backgroundColor: '#F5F6FA', alignItems: 'center' },
  BtnVerMaisPesquisa: { backgroundColor: '#E55B06', padding: 2, width: 150, height: 30, alignItems: 'center', borderRadius: 3 },

  // PERFIL
  containerPerfil: { backgroundColor: '#FFFFFF' },
  ImgPerfil: { width: 100, height: 100, borderRadius:100 },
  Txtnome: { color: '#000000', fontWeight: 'bold' },
  Txtnickname: { color: '#000000', fontWeight: 'bold', fontSize: 20 },
  ContainerFoto: { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 30 },
  Atividade: { display: 'flex', flexDirection: 'row' },
  TxtAtividade: { color: '#333333', marginLeft: 6 },
  ContainerBtns: { display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' },
  TxtBtn: { color: '#000000' },

  // EVENTO INDIVIDUAL
  ImgEventoIndi: {
    marginTop: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, width: '100%', height: '30%',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 3, elevation: 4,
  },
  TxtNomeEvento: { color: '#000000', fontWeight: 'bold', fontSize: 40, textAlign: 'center' },
  MiniImg: { width: 100, height: 100, borderColor: '#CCCCCC', borderWidth: 2, borderRadius: 10 },
  ContainerMini: { marginTop: -45, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' },
  containerEvento: { display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF', minHeight: 1500 },
  descricao: { color: '#ffffffff', maxWidth: '80%', textAlign: 'center', marginTop: 15, backgroundColor: '#3C4E69', padding: 5, borderRadius: 5 },
  ContainerInformacoes: { alignItems: 'center' },
  Txtloc: { color: '#333333', maxWidth: '60%' },
  Txthorario: { color: '#333333' },
  Det: { marginTop: 10, marginBottom: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' },
  curtir: { width: 40, height: 40 },
  ContainerSalva: { display: 'flex', flexDirection: 'row', marginLeft: 280 },
});
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
    flex:1,
    backgroundColor:'#272727',
    
  },
  ResultadoPesquisa:{
    backgroundColor:'#272727',
    marginTop: 25,
    alignItems:'center'
  },
  EventosPesquisa:{
    backgroundColor:'#272727',
    alignItems:'center'

  },
  BtnVerMaisPesquisa:{
    backgroundColor:'#E55B06',
    padding:2,
    width:150,
    height:30,
    alignItems:'center',
    borderRadius:3
  },

  //Perfil

  containerPerfil:{
    backgroundColor:"#272727"
  },
  ImgPerfil:{
    width:100,
    height:100,
    borderRadius:200
  },
  bio:{
    marginTop:20,
    marginBottom:20,
    color:'white',
    maxWidth:'70%'
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

  TxtBtn:{
    color:'white'
  },

  //EVENTO INDIVIDUAL

  ImgEventoIndi:{
            margintop:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        width:'100%',
        height:'30%',
            shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
  },
  TxtNomeEvento:{
    color:'white',
    fontWeight:'bold',
    fontSize:40,
    textAlign:'center'
  },
  MiniImg:{
    width:100,
    height:100,
    borderColor:'gray',
    borderWidth:2,
    borderRadius:10,
  },
  ContainerMini:{
    marginTop:-45,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  containerEvento:{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'#272727',
    minHeight:1500,
  },
  descricao:{
    color:'white',
    maxWidth:'80%',
    textAlign:'center',
    marginTop:15,
    backgroundColor:'#E55B06',
    padding:5,
    borderRadius:5,
  },
  ContainerInformacoes:{
    alignItems:'center'
  },
  Txtloc:{
    color:'white',
    maxWidth:'60%'
  },
  Txthorario:{
    color:'white',
  },
  Det:{
    marginTop:10,
    marginBottom:40,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  curtir:{
    width:40,
    height:40,
  },
  ContainerSalva:{
    display:'flex',
    flexDirection:'row',
    marginLeft:280,
  }
});



