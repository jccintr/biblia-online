import React, {useState} from 'react';
import { StyleSheet,SafeAreaView,ScrollView,StatusBar,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { cores } from '../globalStyle';
import SearchField from '../components/SearchField';
import ListItem from '../components/ListItem';


/*
adaptive icone 510   3x170
icone normal 850  5x170
*/

const Home = ({route}) => {
    const navigation = useNavigation();
    const [searchText,setSearchText] = useState('');
    const {livros} = route.params;
  

const onLivroPress = (livro) => {
    navigation.navigate('Livro',{livro: livro,name: livro.name});
}


    return (
        
        <SafeAreaView style={styles.container}>
         <StatusBar
            animated={true}
            backgroundColor="#fff"
            barStyle="dark-content"
             />
            <SearchField
                placeholder="Pesquisar livros"
                value={searchText}
                setValue={setSearchText}
                onChangeText={t=>setSearchText(t)}
            />
              <ScrollView style={{width:'100%'}} showsVerticalScrollIndicator={false}>
                    {livros.filter((livro)=>livro.name.toUpperCase().includes(searchText.toUpperCase()))
                    .map(livro => <TouchableOpacity key={livro.abbrev.pt} style={{width:'100%'}} onPress={()=>onLivroPress(livro)}><ListItem  livro={livro}/></TouchableOpacity>)}
             </ScrollView>
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
    
  });