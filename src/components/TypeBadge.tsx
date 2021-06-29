import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface TypeProps {
  type: string, 
  color: string
}

const TypeBadge = ({type, color}: TypeProps) => {
  return(
    <>
      <View style={[styles.typeContainer, {backgroundColor: color}]}>
        <Text style={styles.typeText}>
          {type}
        </Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  typeContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: 125,
    alignItems: 'center',
    borderRadius: 15    
  },
  typeText: {
    color: '#FFF',    
    fontWeight: 'bold'
  }
});

export default TypeBadge;