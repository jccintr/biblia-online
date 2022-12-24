import React, {useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'; 
import { StyleSheet,SafeAreaView,View,ScrollView,TouchableOpacity,StatusBar,ActivityIndicator} from 'react-native';
import Capitulos from '../components/Capitulos';
import Api from '../Api';
import VersoCard from '../components/VersoCard';
//import { StatusBar } from 'expo-status-bar';

const Livro = ({route}) => {
    const {livro} = route.params;
    const [versos,setVersos] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [capituloSelecionado,setCapituloSelecionado] = useState(1);
    
   


    useEffect(()=>{
        const getCapitulo = async () => {
          setIsLoading(true);  
        let json = await Api.getCapitulo(livro.abbrev.pt,capituloSelecionado);
        setVersos(json.verses);
        setIsLoading(false);
        }
        getCapitulo();
    }, [capituloSelecionado]);

/*
    const onSelectCapitulo = async  (capitulo) => {

      setIsLoading(true);  
      let json = await Api.getCapitulo(livro.abbrev.pt,capitulo);
      setCapituloSelecionado(capitulo);
      setVersos(json.verses);
      setIsLoading(false);

    }

*/


  return (

    <View style={styles.container}>
       <StatusBar
            animated={true}
            backgroundColor="#fff"
            barStyle="dark-content"
             />
       {livro.chapters>1?<Capitulos livro={livro} capituloSelecionado={capituloSelecionado} setCapituloSelecionado={setCapituloSelecionado}/>:''}
       <ScrollView showsVerticalScrollIndicator={false}>
         {versos.map(verso=><VersoCard key={verso.number} verso={verso} /> )}
       </ScrollView>
       {isLoading&&<ActivityIndicator style={styles.loading} size="large" color="#000"/>}
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
    loading:{
        position: 'absolute',
        top: '50%',
        
  
   }
   
   
   
    
  
  });