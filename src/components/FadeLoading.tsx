import React from "react";
import { ActivityIndicator, Dimensions, StyleSheet, View } from "react-native";

type Props = {
    loading: boolean
}

const FadeLoading = ({loading}: Props) => {
  return (
    !loading ? <></>
    : (
      <>
        <View style={styles.fade} />
        <View style={styles.spinnerContainer}>
            <ActivityIndicator size="large" color="#072c78" />
        </View>
      </>
    )
  ) 
}

const styles = StyleSheet.create({
  fade: {        
      position: "absolute",
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,

      backgroundColor: 'black',
      opacity: 0.5,

      elevation: 2,
      zIndex: 8
  },
  spinnerContainer: {
      justifyContent: "center",
      alignItems: "center",

      position: "absolute",
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,

      elevation: 3,
      zIndex: 9
  }
})

export default FadeLoading;