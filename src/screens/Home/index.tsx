import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";

import banner from '../../assets/banner.png';
import { api } from "../../service/api";
import { Shoes } from "../../components/Shoes";

import { Loading } from "../../components/Loading";

export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: {
    count: number;
    rate: number;
  },
  title: string;
}

export function Home() {
  const navigation = useNavigation()

  const [products, setProducts] = useState<IProduct[]>([])
  const [amount, setAmount] = useState(1)
  const [isLoading, setIsLoading] = useState(true);

  async function fetchProducts(){
    try {
      const {data} = await api.get('/products?limit=6');
      setProducts(data)
      setIsLoading(false);
    } catch (error) {
      console.error(error, 'Este erro poderia ter sido melhor tratado!')
      setIsLoading(false);
    }
  } 

  function handleDetail(productId: number) {
    navigation.navigate('Detail', {productId})
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={banner}
          style={styles.banner}
          />

        <View style={styles.textContainer}>
          <Text style={styles.textTitle}>Roupas</Text>
          <Text style={styles.textCategory}>°</Text>
          <Text style={styles.textCategory}>MASCULINO</Text>

          <TouchableOpacity style={styles.buttonFilter}>
            <MaterialIcons 
              name="filter-list"
              size={24}
              color="#000"
              />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      
        {isLoading?(
          <Loading />
        ): (
          <ScrollView>
        <Text style={styles.textTitle} >LANÇAMENTOS</Text>

        <View style={styles.containerItems}>
          <Shoes image={products[0].image} price={products[0].price} onClick={() => handleDetail(products[0].id)}>
            {products[0].title}
          </Shoes>
          <Shoes image={products[1].image} price={products[1].price} onClick={() => handleDetail(products[1].id)}>
            {products[1].title}
          </Shoes>
        </View>
        <View style={styles.containerItems}>
          <Shoes image={products[2].image} price={products[2].price} onClick={() => handleDetail(products[2].id)}>
            {products[2].title}
          </Shoes>
          <Shoes image={products[3].image} price={products[3].price} onClick={() => handleDetail(products[3].id)}>
            {products[3].title}
          </Shoes>
        </View>
        <View style={styles.containerItems}>
          <Shoes image={products[4].image} price={products[4].price} onClick={() => handleDetail(products[4].id)}>
            {products[4].title}
          </Shoes>
          <Shoes image={products[5].image} price={products[5].price} onClick={() => handleDetail(products[5].id)}>
            {products[5].title}
          </Shoes>
        </View>
      </ScrollView>
        )}
    </SafeAreaView>
  )
}