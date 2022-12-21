import React, {useState,useEffect} from 'react'
import { StyleSheet,Text,View,ScrollView,TouchableOpacity } from 'react-native';

const Capitulos = ({livro,capituloSelecionado,setCapituloSelecionado}) => {
    const [capitulos,setCapitulos] = useState([]);


    useEffect(()=>{
        const criaCapitulos =  () => {
        let arrCapitulos = [];
        for(let i=0;i<livro.chapters;i++){
            arrCapitulos.push(i+1);
        }
        setCapitulos(arrCapitulos);
        }
        criaCapitulos();
    }, []);

    const onPressCapitulo = (capitulo) => {
       setCapituloSelecionado(capitulo);
    }

  return (
   <View style={styles.container}>
    <ScrollView style={{width:'100%'}}horizontal={true} showsHorizontalScrollIndicator={false} >
       {capitulos.map((index) => (<TouchableOpacity key={index} onPress={()=>onPressCapitulo(index)} style={capituloSelecionado === index ? styles.chapterAreaSelected : styles.chapterArea}><Text style={capituloSelecionado===index?styles.chapterTextSelected:styles.chapterText}>{index}</Text></TouchableOpacity>))}
     </ScrollView>
   </View>
  )
}

export default Capitulos


const styles = StyleSheet.create({
    
    container:{
       height: 50,
       width: '100%',
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
       borderBottomColor: '#c1c1c1',
       borderBottomWidth: 1,
    },
    chapterArea:{
        width: 40,
        height: 40,
        backgroundColor: "#c1c1c1",
        marginHorizontal:2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    chapterAreaSelected:{
        width: 40,
        height: 40,
        backgroundColor: "#000",
        marginHorizontal:2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    chapterText:{
       fontSize:14
    },
    chapterTextSelected:{
       fontWeight:'bold',
       fontSize:14,
       color:'#fff',
    },

   
    
   
  });