import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  box: {
    width: 120,
    height: 50,
    borderStyle: 'solid',
    borderColor: '#e6e6e6',
    justifyContent: 'center',
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 4,
    marginHorizontal: 5
  },
  selectedBox: {
    width: 120,
    height: 50,
    borderStyle: 'solid',
    borderColor: '#fff',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 4,
    marginHorizontal: 5
  },
  size: {
    color: '#e6e6e6',
    fontFamily: 'Anton_400Regular',
    fontSize: 16
  },
  selectedSize: {
    color: '#fff',
    fontFamily: 'Anton_400Regular',
    fontSize: 16
  }
})