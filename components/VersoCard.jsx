import React from 'react'
import { StyleSheet,Text,View } from 'react-native';

const VersoCard = ({verso}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.verseTitle}>{`Versículo ${verso.number}`}</Text>
      <Text style={styles.verseText}>{verso.text}</Text>
    </View>
  )
}

export default VersoCard 


const styles = StyleSheet.create({
    
    container:{
       flex:0,
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'space-between',
       borderBottomColor: '#c1c1c1',
       borderBottomWidth: 1,
       paddingHorizontal:5, 
      
    },
    verseTitle:{
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom:5,
    },
    verseText:{
      fontSize: 16,
      textAlign: 'justify',
    }
    
    
    
   
  });