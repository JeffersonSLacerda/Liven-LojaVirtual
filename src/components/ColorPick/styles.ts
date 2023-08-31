import { Dimensions, StyleSheet } from "react-native";

const allWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
  colorSelect: {
    width: allWidth * 0.05,
    height: allWidth * 0.05,
    borderRadius: (allWidth * 0.05 )/2,
    marginHorizontal: '2.5%',
    elevation: 5
  }
})