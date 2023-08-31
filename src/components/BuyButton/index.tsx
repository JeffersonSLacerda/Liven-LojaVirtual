import { Text, TouchableOpacity, View } from "react-native";

import {styles } from './styles'
import { useNavigation } from "@react-navigation/native";

interface IBuyButtonProps {
  productId: number;
}

export function BuyButton({productId}:IBuyButtonProps) {
  const navigation = useNavigation()
  const { navigate } = navigation
  navigate("Cart", {productId})

  return(
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btnContent} onPress={() => alert('Clicked')}>
        <Text style={styles.btnText} > Add to cart </Text>
      </TouchableOpacity>
    </View>
  )
}