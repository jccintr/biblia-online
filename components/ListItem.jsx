import React from 'react';
import { StyleSheet,Text,View } from 'react-native';
import { Entypo } from '@expo/vector-icons';


const ListItem = ({livro}) => {
  return (
    <View style={styles.container}>
        <View style={styles.livroArea}>
            <Text style={styles.text}>{livro.name}</Text>
            <View style={styles.capitulosArea}>
                <Text style={styles.capituloText}>{livro.chapters}</Text>
            </View>
        </View>
        <Entypo name="chevron-small-right" size={30} color="black" />  
    </View>
  )
}

export default ListItem

const styles = StyleSheet.create({
    
    container:{
       height: 50,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       
    },
    livroArea:{
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft:4,
    },
   text:{
      fontSize: 18,
   },
   capitulosArea:{
    backgroundColor: "#d1d1d1",
    borderRadius: 10,
    padding: 7,
    width: 40,
   
    alignItems: 'center',
   },
   capituloText:{
    
    fontSize: 12,
   }
    
  });