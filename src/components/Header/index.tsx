import { TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

export function Header(){
  const navigation = useNavigation()

  function handleGoHome() {
    navigation.navigate('Home')
  }
  
  return(
    <View style={styles.container}>
      <TouchableOpacity >
        <MaterialIcons 
          name='keyboard-arrow-left'
          size={24}
          color={'#fff'}
          onPress={() => handleGoHome()}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <MaterialIcons 
          name='shopping-cart'
          size={24}
          color={'#fff'}
        />
      </TouchableOpacity>
    </View>
  )
}