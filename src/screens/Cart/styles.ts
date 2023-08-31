import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center"
  },

  productContainer: {
    maxWidth: 800,
    width: '100%',
    height: 100,
    marginVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    
  },

  productImgContainer: {
    width: '30%',
    height: 100,
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 22,
  },

  productImg: {
    width: '100%',
    height: '100%',
    objectFit: 'contain'
  },

  productName: {
    fontSize: 14,
    maxWidth: '100%',
    color: '#000',
    fontWeight: '600',
    letterSpacing: 1,
  },

  productNameContent: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
  },
  productPriceContent: {
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '400',
    maxWidth: '85%',
  },
  
  qtdeControlContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 8
  },
  qtdeControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  minusButton: {
    borderRadius: 100,
    marginRight: 10,
    padding: 4,
    borderWidth: 1,
    borderColor: '#B9B9B9',
    opacity: 0.5,
  },
  plusButton: {
    borderRadius: 100,
    marginLeft: 10,
    padding: 4,
    borderWidth: 1,
    borderColor: '#B9B9B9',
    opacity: 0.5,
  }
})