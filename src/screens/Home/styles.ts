import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 8,
  },
  banner: {
    width: '100%'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  textTitle: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  textCategory: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%',
    color: '#CECECF'
  },
  buttonFilter: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center'
  },
  line: {
    borderBottomColor: '#D8D8D8',
    borderBottomWidth: 2,
  },
  containerItems: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})