import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './styles';

interface ShoeProps {
  image: string;
  price: number;
  children: string;
}

export const Shoes = ({image, price, children}: ShoeProps) => {
  const filterDesc = (desc: string) => {
    if(desc.length > 25 ) {
      return `${desc.substring(0, 23)}...`
    }

    return desc
  }

  return (
    <TouchableOpacity style={styles.container}>
      <Image 
        source={{ uri: image}}
        style={styles.shoeImg}
      />
      <Text style={styles.shoeName} testID='product-title'>
        {filterDesc(children)}
      </Text>
      <Text style={styles.shoePrice}>R$ {price}</Text>
    </TouchableOpacity>
  );
}
