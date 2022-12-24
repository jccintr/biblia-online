import React, {useState,useEffect} from 'react'
import { StyleSheet,Text,View,TouchableOpacity } from 'react-native';

const VersoCard = ({verso}) => {
  const [selected,setSelected] = useState(false);


  return (
    <TouchableOpacity style={selected?styles.containerSelected:styles.container} onPress={()=>setSelected(!selected)}>
       <Text style={selected?styles.verseTextSelected:styles.verseText}>{verso.number + '  '+verso.text}</Text>
    </TouchableOpacity>
  )
}

export default VersoCard 


const styles = StyleSheet.create({
    
    container:{
       flex:0,
       flexDirection: 'column',
       alignItems: 'flex-start',
       justifyContent: 'space-between',
       borderBottomColor: '#c1c1c1',
       borderBottomWidth: 1,
       padding: 5, 
    },
    containerSelected:{
      flex:0,
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      borderBottomColor: '#c1c1c1',
      borderBottomWidth: 1,
      padding: 5,
      backgroundColor: '#000',
   },
     verseText:{
      fontSize: 14,
      textAlign: 'justify',
      marginBottom:5,
      color:'#000',
    },
    verseTextSelected:{
      fontSize: 14,
      textAlign: 'justify',
      marginBottom:5,
      color:'#fff',
    },
  
  });