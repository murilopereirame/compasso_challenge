import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  TextInput,
  View,
} from 'react-native';

import Button from '../../components/Button';
import styles from './styles';
import PokemonCard from '../../components/PokemonCard';
import axios from 'axios';
import { Pokemon } from '../../interfaces/pokemon';
import { StackNavigationProp } from '@react-navigation/stack';
import FadeLoading from '../../components/FadeLoading';

interface Props {
  navigation: StackNavigationProp<any>
}

const Home = ({navigation}: Props) => {
  const [searchText, setSearchText] = useState('');
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [offset, setOffset] = useState(0);
  const visibleItems = ~~((Dimensions.get('window').height - 60)/120) + 2;

  useEffect(() => {
    loadPokemons();
  }, []);

  const searchPokemon = React.useCallback(async () => {
    if(searchText === '') {
      return Alert.alert(
        "Erro",
        "Preencha o nome ou id do Pokémon",
        [          
          { text: "OK", onPress: () => {} }
        ]
      );
    }

    setLoading(true);

    axios.get(`https://pokeapi.co/api/v2/pokemon/${searchText.toLowerCase()}`).then((result) => {      
      let pokemon: Pokemon = {
        name: fixName(result.data.name),
        id: result.data.id,
        image: result.data.sprites.other["official-artwork"].front_default,
        height: result.data.height,
        weight: result.data.weight,
        types: result.data.types.map((typeList: any) => {
          return typeList.type.name;
        }),
        moves: result.data.moves.map((abilitiesList: any) => {
          return abilitiesList.move.name;
        }),
        stats: result.data.stats.map((statsList: any) => {
          return {
            name: statsList.stat.name,
            base_stat: statsList.base_stat,
            effort: statsList.effort 
          };
        })
      };
      setLoading(false);
      navigation.navigate('Details', { pokemon });
    }).catch(err => {
      setLoading(false);
      if(err.response.status === 404) {
        return Alert.alert(
          "Ops...",
          "Parece que esse Pokémon não existe",
          [          
            { text: "OK", onPress: () => {} }
          ]
        );
      }
    })
  }, [searchText]);

  const loadPokemons = React.useCallback(async () => {  
    axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${visibleItems}`).then((result) => {
      let pokemonsInfo = result.data.results;
      let promises: any = [];
      let pokes: Pokemon[] = [];

      pokemonsInfo.forEach((element: any) => {
        let pokeInfoURI = element.url;
        promises.push(axios.get(pokeInfoURI).then((result) => {          
          let pokemon: Pokemon = {
            name: fixName(result.data.name),
            id: result.data.id,
            image: result.data.sprites.other["official-artwork"].front_default,
            height: result.data.height,
            weight: result.data.weight,
            types: result.data.types.map((typeList: any) => {
              return typeList.type.name;
            }),
            moves: result.data.moves.map((abilitiesList: any) => {
              return abilitiesList.move.name;
            }),
            stats: result.data.stats.map((statsList: any) => {
              return {
                name: statsList.stat.name,
                base_stat: statsList.base_stat,
                effort: statsList.effort 
              };
            })
          };          

          pokes.push(pokemon);
        }));
      });

      Promise.all(promises).then(() => {
        pokes = pokes.sort((a, b) => {
          if(a.id > b.id)
            return 1;
          else if(a.id < b.id)
            return -1;
          else
            return 0;
        })          
        pokes = pokemons.concat(pokes);
        
        setLoading(false);
        setPokemons(pokes);
        setOffset(val => {
          return val + visibleItems;
        });
      })
    }).catch(err => {
      console.log(err)
    });
  }, [offset, visibleItems, pokemons]);

  const fixName = React.useCallback((name: string) => {
    name = name.replace("-f", " Fêmea");
    name = name.replace("-m", " Macho");
    return name;
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FadeLoading loading={loading}/>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          onChangeText={setSearchText}
          placeholder="Nome ou Id do Pokémon"
        />
        <Button onPress={() => {searchPokemon()}} style={styles.btnSearch}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </View>
      <FlatList
        style={{marginTop: 20}}
        data={pokemons}
        keyExtractor={(item: any) => item?.id.toString()}
        scrollEnabled={true}
        onEndReached={() => {loadPokemons()}}
        onEndReachedThreshold={0.5}
        initialNumToRender={visibleItems}
        renderItem={({ item }) => (
          item ? <PokemonCard name={item.name} id={item.id} image={item.image} onTap={() => {
            navigation.navigate('Details', { pokemon: item });
          }}/> : null
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
