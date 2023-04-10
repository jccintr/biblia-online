import React, {useState} from 'react'
import { StyleSheet,Text,TouchableOpacity } from 'react-native';





const VersoCard = ({verso,selectedVersos,setSelectedVersos}) => {
  

  const onVersoPress = (verseNumber) => {
    let newArr = []
    newArr.push(...selectedVersos);

    if (newArr.includes(verseNumber)) { // se estiver no array, remove
       
       const index = newArr.indexOf(verseNumber);
       if (index > -1){
        newArr.splice(index,1);
       }

    } else {  // não está no array, adiciona

      newArr.push(verseNumber);

    }
    
     setSelectedVersos(newArr);
  }

  return (
    <TouchableOpacity style={selectedVersos.includes(verso.number)?styles.containerSelected:styles.container} onPress={()=>onVersoPress(verso.number)}>
       <Text style={selectedVersos.includes(verso.number)?styles.verseTextSelected:styles.verseText}>{verso.number + '  '+verso.text}</Text>
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