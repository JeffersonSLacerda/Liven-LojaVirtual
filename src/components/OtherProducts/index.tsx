import { ScrollView, Text, View } from "react-native";

import { styles } from "./styles";
import { Shoes } from "../Shoes";

import shoe2 from '../../assets/2.png'
import shoe3 from '../../assets/3.png'
import shoe5 from '../../assets/5.png'

export function OtherProducts() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Você também pode gostar </Text>
      <View style={styles.content}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.product}>
            <Shoes image={shoe2} price={'400,00'} onClick={() => alert('Clicked')}>
              Triple Black
            </Shoes>
          </View>

          <View style={styles.product}>
            <Shoes image={shoe3} price={'150,00'} onClick={() => alert('Clicked')}>
              Triple Red
            </Shoes>
          </View>

          <View style={styles.product}>
            <Shoes image={shoe5} price={'133,00'} onClick={() => alert('Clicked')}>
              Houston Comets Four-Peat
            </Shoes>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}