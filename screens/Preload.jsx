import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView,Image,ActivityIndicator,StatusBar,Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/biblia-icone.png';
//import { StatusBar } from 'expo-status-bar';
import { cores } from '../globalStyle';
import Api from '../Api';

const Preload = () => {
    const navigation = useNavigation();
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        const getBooks = async () => {
        let json = await Api.getBooks();
        setIsLoading(false);
        navigation.reset({
            routes:[{name:'Home',params:{livros: json}}] 
          }); 
        }
        getBooks();
    }, []);

   return (
      <SafeAreaView style={styles.container}>
         <StatusBar
            animated={true}
            backgroundColor="#000"
            barStyle="light-content"
             />
          <Image source={logo} style={styles.imagelogo}/>
          <Text style={styles.appName}>Bíblia Sagrada Digital</Text>
          <ActivityIndicator style={styles.loading} size="large" color="#fff"/>
      </SafeAreaView>
     )
}

export default Preload


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
     },
    body:{
      flex:1,
      alignItems:'center',
      justifyContent: 'flex-start',
    },
    sectionTitle:{
      fontWeight:'bold',
      fontSize: 26,
    },
    imagelogo:{
      height: 150,
      width: 150,
      
  },
  loading:{
     marginTop: 10,
  },
  appName:{
    marginTop: 10,
    color: cores.branco,
    fontWeight: 'bold',
    fontSize: 18,
  }
  
  }); 