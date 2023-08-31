import { TouchableOpacity, View } from "react-native";

import {styles} from './styles'
interface ColorPickProps {
  colors: string[]
}


export function ColorPick({colors}: ColorPickProps) {
  return(
    colors.map( (color, key) => (
      <View key={key} testID="colors">
      <TouchableOpacity 
        style={[styles.colorSelect, {backgroundColor: `${color}`}]}
      />
      </View>
    ))
    
  )
}