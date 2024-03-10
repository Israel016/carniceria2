import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Image, Button} from '@rneui/base'
import Logo from '../../../../../assets/logoo.png';

export default function UserGuest(props) {
   const {navigation} = props;
  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        resizeMode='contain'
        style={styles.logo}
      />
      <Text style={styles.tittle}>¡Descubre tu próximo restaurante favorito con nuestra aplicación! 🍽✨</Text>
      <Text style={styles.descripcion}>En nuestra plataforma, explorarás una variedad increíble de restaurantes para cualquier ocasión, gusto o antojo. ¿Amante de la comida italiana, fanático de la comida rápida o en busca de la experiencia gourmet más refinada? Lo tenemos todo cubierto.</Text>
      
      <Button
        title="Iniciar sesion"
        type='clear'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor: '#FFF'
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 16
  },

  tittle: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: 'center',
    color: '#F78341'


  },
  descripcion: {
    padding: 16,
    textAlign: 'center'

  }
});