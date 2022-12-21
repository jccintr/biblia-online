import React, {useState,useEffect} from 'react';
import { StyleSheet, Text, SafeAreaView,View,ScrollView, StatusBar, ActivityIndicator,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { cores } from '../globalStyle';
import SearchField from '../components/SearchField';
import Api from '../Api';
import ListItem from '../components/ListItem';



const Home = () => {
    const navigation = useNavigation();
    const [searchText,setSearchText] = useState('');
    const [isLoading,setIsLoading] = useState(true);
    const [livros,setLivros] = useState([]);

    useEffect(()=>{
        const getBooks = async () => {
        let json = await Api.getBooks();
        setLivros(json);
        setIsLoading(false);
        }
        getBooks();
    }, []);

    const onLivroPress = (livro) => {
        navigation.navigate('Livro',{livro: livro,name: livro.name});
      
    }


    return (
        
        <SafeAreaView style={styles.container}>
            <StatusBar/>
            <SearchField
                placeholder="Pesquisar livros"
                value={searchText}
                onChangeText={t=>setSearchText(t)}
            />
              <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
            {livros.filter((livro)=>livro.name.toUpperCase().includes(searchText.toUpperCase()))
             .map(livro => <TouchableOpacity key={livro.abbrev.pt} style={{width:'100%'}} onPress={()=>onLivroPress(livro)}><ListItem  livro={livro}/></TouchableOpacity>)}
             </ScrollView>
              {isLoading&&<ActivityIndicator style={styles.loading} size="large" color="#00f"/>}
             
        </SafeAreaView>
       
       )
}

export default Home


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 4,
        paddingTop: 4,
    },
    menu:{
        width: '90%',
        height: 50,
        backgroundColor: cores.botaoBackground,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        marginBottom: 20,
      
      },
     menuText: {
       fontWeight: 'bold',
       fontSize: 20,
       color: '#fff',
      
       
    },
    loading:{
    
        alignItems: 'center',
        justifyContent: 'flex-end',
      }
    
  });