import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width * 0.95,
    backgroundColor: '#fafafa',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,
    marginTop: 20
  },
  searchBar: {
    width: Dimensions.get('window').width * 0.85,
    marginRight: 5
  },
  safeArea: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#103548'
  },
  btnSearch: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5
  }
});

export default styles;