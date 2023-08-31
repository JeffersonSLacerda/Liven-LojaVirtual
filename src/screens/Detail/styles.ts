import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#FFF"
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    objectFit: 'contain'
  },
  price: {
    fontSize: 24,
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  title: {
    fontSize: 30,
    fontFamily: 'Anton_400Regular',
    opacity: 0.4,
    paddingHorizontal: '2%'
  },
  colorContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginStart: '2%'
  },
  sizePickContainer: {
    flexDirection: "row",
    width: '100%'
  },
  descriptionContent: {
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  descriptionTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  description: {
    fontSize: 16,
    lineHeight: 25
  },
  descriptionList: {
    fontSize: 16,
    lineHeight: 25
  },
  endLine: {
    borderWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: '2%'
  },

  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnContent: {
    width: '90%',
    height: 50,
    backgroundColor: '#17181a',
    borderRadius: 5,
    marginVertical: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 18,
    color: '#fff'
  }
})