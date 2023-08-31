import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, View } from "react-native";

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
  // const { productId } = route.params as RoutePrams

  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  const colors = ['#ff0000', '#00ff00', '#0000ff'];
  const sizes = [40, 41, 42, 43, 44, 45]

  async function fetchProduct(){
    try {
      const {data} = await api.get('/products/1');
      setProduct(data)
      setIsLoading(false);
    } catch (error) {
      console.error(error, 'Este erro poderia ter sido melhor tratado!')
      setIsLoading(false);
    }
  } 

  useEffect(()=> {
    fetchProduct()
  }, [])

  return (
    <SafeAreaView>
    { isLoading ? (
      <Loading />
    ): (
    <ScrollView style={styles.container}> 
      <Header />

      {/* <Image 
        source={{uri: '../../assets/detail.png'}}
        style={styles.image}
        resizeMode='cover'
      /> */}

      <View>
        <View>
          <Text style={styles.price}>R$ 230,00</Text>
        </View>
        <View>
          <Text style={styles.title}>Nike Shocks</Text>
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
        <Text style={styles.descriptionTitle}>
          Nike Shocks
        </Text>
        <Text style={styles.description}>
          O brilho perdura no Nike Shocks, o tênis original do basquete que dá um toque de inovação naquilo que você conhece bem: sobreposições costuradas e duráveis, acabamentos simples e a quantidade perfeita de brilho para fazer você se destacar.
        </Text>

        <Text style={styles.descriptionList}>
          - Categoria: Amortecimento
        </Text>
        <Text style={styles.descriptionList}>
          - Material: Mash
        </Text>
      </View>

      <BuyButton />

      <View style={styles.endLine} />

      {/* <OtherProducts /> */}
    </ScrollView>)

    }
    </SafeAreaView>
  );
}