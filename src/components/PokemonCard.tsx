import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";

interface Props {  
  id: number,
  name: string,  
  image: string,
  onTap: Function
}

const PokemonCard = (info: Props) => {
  return(    
    <TouchableHighlight style={{marginBottom: 10, borderRadius: 10}}  onPress={() => {info.onTap()}}>
      <View style={styles.pokeContainer}>
        <Image style={styles.pokeImage} source={{uri: info.image}} />
        <View style={styles.pokeInfo}>
          <Text style={styles.pokeName}>{info.name}</Text>  
          <Text style={styles.pokeIndex}>#{info.id.toString().padStart(3, "0")}</Text>
        </View>      
      </View>    
    </ TouchableHighlight >
  )
};

const styles = StyleSheet.create({
  pokeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    padding: 10,
    width: Dimensions.get('window').width * 0.95,
    borderColor: '#E5E8ED',
    borderRadius: 10,
    borderWidth: .5,
    backgroundColor: '#E5E8ED', 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 3
  },
  pokeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4E545C',        
    includeFontPadding:false,    
  },
  pokeIndex: {
    fontSize: 14,
    color: '#4E545C',    
    includeFontPadding:false
  },
  pokeImage: {
    width: 75, 
    height: 75, 
    backgroundColor: '#D0D7D7', 
    borderRadius: 10,
    marginRight: 10
  },
  pokeInfo: {    
    display: 'flex',
    alignItems: 'flex-start'
  }
});

export default PokemonCard;