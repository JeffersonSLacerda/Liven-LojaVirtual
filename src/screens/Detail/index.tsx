import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

// import { DetailProps } from '../../routes/app.routes';
import { Header } from '../../components/Header';

import { styles } from './styles';
import { ColorPick } from '../../components/ColorPick';
import { SizePick } from '../../components/SizePick';
import { BuyButton } from '../../components/BuyButton';
import { OtherProducts } from '../../components/OtherProducts';
import { useNavigation, useRoute } from '@react-navigation/native';
import { IProduct } from '../Home';
import { api } from '../../service/api';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Loading } from '../../components/Loading';

type RoutePrams = {
  productId: number
}

export function Detail() {
  const navigation = useNavigation()
  const route = useRoute()
  const { productId } = route.params as RoutePrams

  const [product, setProduct] = useState<IProduct>();
  const [isLoading, setIsLoading] = useState(true);


  const colors = ['#ff0000', '#00ff00', '#0000ff'];
  const sizes = ['PP', 'P', 'M', 'G', 'XG']

  async function fetchProduct(){
    try {
      const {data} = await api.get(`/products/${productId}`);
      setProduct(data)
      setIsLoading(false);
    } catch (error) {
      console.error(error, 'Este erro poderia ter sido melhor tratado!')
      setIsLoading(false);
    }
  } 

  function addToCart(){
    navigation.navigate('Cart', {productId})
  }

  useEffect(()=> {
    const unsubscribe = navigation.addListener('focus', ()=> {
      fetchProduct()
    })

    return unsubscribe
  }, [navigation])

  return (
    <SafeAreaView style={styles.container}>
    { isLoading ? (
      <Loading />
    ): (
    <ScrollView > 
      <Header />
      <View>
        <Image
          source={{uri: product?.image}}
          style={styles.image}
        />
      </View>

      <View>
        <View>
          <Text style={styles.price}>{`R$ ${product?.price}`}</Text>
        </View>
        <View>
          <Text style={styles.title}>{product?.title}</Text>
        </View>
      </View>

      <View style={styles.colorContainer}>
        <ColorPick colors={colors}/>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false} 
        style={styles.sizePickContainer}
      >
        <SizePick 
          sizes={sizes}
        />
      </ScrollView>

      <View style={styles.descriptionContent}>
        <Text style={styles.description}>
          {product?.description}
        </Text>

        <Text style={styles.descriptionList}>
          - Category: {product?.category}
        </Text>
        <Text style={styles.descriptionList}>
          - Hate: {product?.rating.rate}
        </Text>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnContent} onPress={() => addToCart()}>
          <Text style={styles.btnText} > Add to cart </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>)

    }
    </SafeAreaView>
  );
}