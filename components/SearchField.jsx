import React from 'react'
import { StyleSheet, View,TextInput,TouchableOpacity} from 'react-native';
import { FontAwesome,AntDesign } from '@expo/vector-icons';
import { cores } from '../globalStyle';

const SearchField = ( {placeholder, value,setValue, onChangeText}) => {
  return (
    <View style={styles.inputArea}>
      <FontAwesome name="search" size={22} color={cores.iconeSearchField} />
      <TextInput style={styles.input}
         placeholder={placeholder}
         value={value}
         onChangeText={onChangeText}
      />
      {value.length>0&&<TouchableOpacity onPress={()=>setValue('')}><AntDesign name="closecircleo" size={22} color={cores.iconeSearchField} /></TouchableOpacity>}
    </View>
  )
}

export default SearchField


const styles = StyleSheet.create({
    inputArea: {

        width: '100%',
        height: 50,
        flexDirection: 'row',
        borderColor: '#c1c1c1',
        borderWidth: 1,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
    },
    input: {
      flex: 1,
      fontSize: 16,
      paddingHorizontal: 4,
      marginLeft: 10,
    },
   
  });