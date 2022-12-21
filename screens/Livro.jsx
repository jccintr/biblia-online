import React, {useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'; 
import { StyleSheet,SafeAreaView,View,ScrollView,TouchableOpacity,Text} from 'react-native';
import Capitulos from '../components/Capitulos';
import Api from '../Api';
import VersoCard from '../components/VersoCard';

const Livro = ({route}) => {
    const {livro} = route.params;
    const [versos,setVersos] = useState([]);
    const [capituloSelecionado,setCapituloSelecionado] = useState(1);


    useEffect(()=>{
        const getCapitulo = async () => {
        let json = await Api.getCapitulo(livro.abbrev.pt,capituloSelecionado);
        setVersos(json.verses);
        
        }
        getCapitulo();
    }, []);

    
    useEffect(()=>{
        const getCapitulo = async () => {
        let json = await Api.getCapitulo(livro.abbrev.pt,capituloSelecionado);
        setVersos(json.verses);
        
        }
        getCapitulo();
    }, [capituloSelecionado]);




  return (

    <View style={styles.container}>
       <Capitulos livro={livro} capituloSelecionado={capituloSelecionado} setCapituloSelecionado={setCapituloSelecionado}/>
       <ScrollView showsVerticalScrollIndicator={false}>
         {versos.map(verso=><VersoCard key={verso.number} verso={verso}/>)}
       </ScrollView>
    </View>
  )
}

export default Livro



const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
       
       
    },
   
   
   
    
  
  });