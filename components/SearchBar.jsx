import React from 'react';
import { StyleSheet, View,TextInput,TouchableOpacity} from 'react-native';
import { FontAwesome,AntDesign } from '@expo/vector-icons';


const SearchBar = ( {placeholder, value,setValue}) => {
  return (
    <View style={styles.inputArea}>
      <FontAwesome name="search" size={18} color={'#a1a1a1'} />
      <TextInput style={styles.input}
         placeholder={placeholder}
         value={value}
         onChangeText={t=>setValue(t)}
         placeholderTextColor={'#a1a1a1'}
      />
      {value.length>0&&<TouchableOpacity onPress={()=>setValue('')}><AntDesign name="close" size={18} color={'#a1a1a1'} /></TouchableOpacity>}
    </View>
  )
}

export default SearchBar


const styles = StyleSheet.create({
    inputArea: {
        width: 160,
        height: 34,
        flexDirection: 'row',
        backgroundColor: '#e1e1e1',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        borderRadius: 15,
    },
    input: {
      flex: 1,
      fontSize: 16,
      paddingHorizontal: 4,
     
      color: '#a1a1a1',
    },
   
  });