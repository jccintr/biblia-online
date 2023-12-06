import React, {useState,useEffect} from 'react';
import { StyleSheet,SafeAreaView,ScrollView,StatusBar,TouchableOpacity,FlatList,ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import ListItem from '../components/ListItem';
import SearchBar from '../components/SearchBar';
import Separator from '../components/Separator';
import EmptyList from '../components/EmptyList';


/*
adaptive icone 510   3x170
icone normal 850  5x170
*/

const Home = ({route}) => {
    const navigation = useNavigation();
    const [searchText,setSearchText] = useState('');
    const {livros} = route.params;
    const [isLoading,setIsLoading] = useState(false);
  

    const booksFiltered = livros.filter(livro=>livro.name.toUpperCase().includes(searchText.toUpperCase()));


    useEffect(()=>{
        navigation.setOptions({
            headerRight: ()=> <SearchBar placeholder={'pesquisar'} setValue={setSearchText} value={searchText} />
        });
    },[navigation,searchText]);


const onLivroPress = (livro) => {
    navigation.navigate('Livro',{livro: livro,name: livro.name});
}


    return (
        
        <SafeAreaView style={styles.container}>
            <StatusBar animated={true} backgroundColor="#fff" barStyle="dark-content"/>
            <FlatList 
                    style={styles.flatlist}
                    showsVerticalScrollIndicator={false}
                    data={booksFiltered}
                    ItemSeparatorComponent={Separator}
                    ListEmptyComponent={<EmptyList mensagem={'Livros não encontrados.'}/>}
                    keyExtractor={(item)=> item.abbrev.pt}
                    contentContainerStyle={booksFiltered.length===0?{flexGrow:1,alignItems:'center',justifyContent:'center'}:''}
                    renderItem={({item})=><TouchableOpacity style={{width:'100%'}} onPress={()=>onLivroPress(item)}><ListItem  livro={item}/></TouchableOpacity>}
            />    
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
    flatlist: {
        width: '100%',
    }
    
  });