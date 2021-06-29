import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageContainer: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,    
    alignItems: 'flex-start',    
  },
  pokeImage: {
    alignSelf: 'center',
    width: Dimensions.get('window').width * 0.75,
    height: Dimensions.get('window').width * 0.75
  },
  typesContainer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,    
  },
  statName: {
    fontWeight: 'bold',
    color: '#E5E8ED'
  },
  statText: {
    flexDirection: 'row'    
  },
  safeArea: {
    flex: 1,
    height: '100%',
    backgroundColor: '#103548',
  },
  statValue: {
    color: '#E5E8ED'
  },
  pokeBasicInfo: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10
  },
  pokeName: {
    color: '#E5E8ED',
    fontWeight: 'bold',
    fontSize: 26,
    includeFontPadding: false
  },
  pokeId: {
    color: '#E5E8ED',
    includeFontPadding: false,
  },
  movesContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  movesTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#E5E8ED'
  },
  movesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.9,
    marginBottom: 10
  },
  moveText: {
    color: '#E5E8ED',
  },
  moveTextContainer: {
    borderRadius: 5,
    backgroundColor: '#051313',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
    width: 115,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  goBackContainer: {
    padding: 10
  }
});

export default styles;