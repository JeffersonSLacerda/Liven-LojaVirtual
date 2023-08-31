import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from "./styles";
import { Header } from "../../components/Header";
import { CartList } from "../../components/CartList";
import { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { api } from "../../service/api";
import { IProduct } from "../Home";

type RoutePrams = {
  productId: number
}

export function Cart() {
  const navigation = useNavigation()
  const route = useRoute()
  const {productId} = route.params as RoutePrams

  const [product, setProduct] = useState<IProduct>();
  const [amount, setAmount] = useState(1)
  const [total, setTotal] = useState(null);

  async function fetchProducts(){
    try {
      const {data} = await api.get(`/products/${productId}`);
      setProduct(data)
    } catch (error) {
      console.error(error, 'Internal Server Error!')
    }
  } 

  function getTotal() {
    if(product?.price) setAmount(product.price * amount)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  function removeItemFromCart() {
    alert('Remove this')
  }

  function addOne() {
    setAmount(state => state++)
  }

  function removeOne() {
    if(amount <= 1)
      removeItemFromCart()

    setAmount((state) => state--)
  }

  function renderProducts() {
    return(
      <TouchableOpacity style={styles.productContainer}>
        <View style={styles.productImgContainer}>
          <Image 
            source={{uri: product?.image}} 
            style={styles.productImg}
          />
        </View>
        <View style={styles.productNameContent}>
          <Text numberOfLines={2} style={styles.productName}>
            {product?.title}
          </Text>
          <View style={styles.productPriceContent}>
            <Text style={styles.productPrice}>
            {`R$${product?.price}`}
            </Text>
          </View>
        </View>
        <View style={styles.qtdeControlContent}>
          <View style={styles.qtdeControl}>
            <TouchableOpacity style={styles.minusButton} onPress={() => removeOne()}>
              <MaterialIcons
                name="remove"
                style={{
                  fontSize: 16,
                  color: '#777777',
                }}
              />
            </TouchableOpacity>
            <Text> {amount} </Text>
            <TouchableOpacity style={styles.plusButton} onPress={() => addOne()}>
              <MaterialIcons
                name="add"
                style={{
                  fontSize: 16,
                  color: '#777777',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return(
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        {product ? renderProducts(): null}
      </ScrollView>
    </SafeAreaView>
  )
}