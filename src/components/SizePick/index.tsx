import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { useState } from "react";

interface SizePickProps {
  sizes:  string[];
}

export function SizePick({sizes}: SizePickProps) {
  const [selectedSize, setSelectedSize] = useState('')

  function onSelectSize(selectedSize: string) {
    setSelectedSize(selectedSize)
  }

  return (
    sizes.map((size, key) => (
      <TouchableOpacity 
        key={key}
        style={selectedSize === size ? styles.selectedBox : styles.box}
        onPress={() => onSelectSize(size)}
      >
        <Text style={styles.size}> {size} </Text>
      </TouchableOpacity>
    ))
  )
}