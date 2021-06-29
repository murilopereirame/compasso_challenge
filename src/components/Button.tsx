import React from "react";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";

interface Props {
  onPress: Function,
  children: React.ReactNode,
  style: StyleProp<ViewStyle>
}

const Button = (properties: Props) => {
  return(
    <>
      <TouchableOpacity style={properties.style} onPress={(evt) => properties.onPress(evt)}>        
        {properties.children}        
      </TouchableOpacity>
    </>
  );
}

export default Button;