import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import { Image, SafeAreaView, ScrollView, Animated, View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import TypeBadge from "../../components/TypeBadge";
import { Pokemon } from "../../interfaces/pokemon";
import styles from './styles';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Details = (navigation: any) => {
  const pokemon: Pokemon = navigation.route.params.pokemon;

  const typeColor = React.useCallback((type: string) => {
    switch(type) {
      case 'normal':
        return '#A8A77A';
      case 'fire':
        return '#EE8130';
      case 'water':
        return '#6390F0';
      case 'electric':
        return '#F7D02C';
      case 'grass':
        return '#7AC74C';
      case 'ice':
        return '#96D9D6';
      case 'fighting':
        return '#C22E28';
      case 'poison':
        return '#A33EA1';
      case 'ground':
        return '#E2BF65';
      case 'flying':
        return '#A98FF3';
      case 'psychic':
        return '#F95587';
      case 'bug':
        return '#A6B91A';
      case 'rock':
        return '#B6A136';
      case 'ghost':
        return '#735797';
      case 'dragon':
        return '#6F35FC';
      case 'dark':
        return '#705746';
      case 'steel':
        return '#B7B7CE';
      case 'fairy':
        return '#D685AD';
      default:
        return '#FAFAFA';
    }
  }, []);

  return(
    <>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView>
          <View style={[styles.imageContainer, {backgroundColor: typeColor(pokemon.types[0])}]}>
            <View style={styles.goBackContainer}>
              <TouchableOpacity onPress={() => {
                navigation.navigation.pop();
              }}>
                <FontAwesomeIcon style={{color: '#E5E8ED'}} icon={faChevronLeft} />
              </TouchableOpacity>
            </View>
            <Image style={styles.pokeImage} source={{uri: pokemon.image}} />                        
          </View>    
          <View style={styles.pokeBasicInfo}>
            <Text style={styles.pokeName}>#{pokemon.id.toString().padStart(3, "0")} {pokemon.name}</Text>            
          </View>
          <View style={styles.statsContainer}>
            <View style={styles.statText}>
              <Text style={styles.statName}>HP: </Text>
              <Text style={styles.statValue}>{pokemon.stats.find(elem => elem.name === "hp")?.base_stat}</Text>
            </View>
            <View style={styles.statText}>
              <Text style={styles.statName}>ATK: </Text>
              <Text style={styles.statValue}>{pokemon.stats.find(elem => elem.name === "attack")?.base_stat}</Text>
            </View>
            <View style={styles.statText}>
              <Text style={styles.statName}>DEF: </Text>
              <Text style={styles.statValue}>{pokemon.stats.find(elem => elem.name === "defense")?.base_stat}</Text>
            </View>
          </View>      
          <View style={styles.typesContainer}>
            {
              pokemon.types.map((type, index) => {
                return <TypeBadge key={`tp-${index}`} type={type} color={typeColor(type)}/>
              })
            }
          </View>
          <View style={styles.movesContainer}>
            <Text style={styles.movesTitle}>habilidades</Text>
            <View style={styles.movesList}>
              {
                pokemon.moves.map((elem, index) => {                  
                  return <View key={`mov-${index}`} style={styles.moveTextContainer}>
                    <Text style={styles.moveText}>{elem}</Text>
                  </View>
                })
              }              
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Details;