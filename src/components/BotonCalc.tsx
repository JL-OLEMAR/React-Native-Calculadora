import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
    texto: string,
    color?: 'grisOscuro' | 'naranja' | 'grisClaro',
    ancho?: boolean,
    accion: (numeroTexto: string) => void
}

export const BotonCalc = ({
  texto,
  color = 'grisOscuro',
  ancho = false,
  accion
}: Props) => {
  return (
    <TouchableOpacity onPress={() => accion(texto)}>
      <View style={[
        styles.boton,
        (ancho) && styles.widthCero,
        (color === 'grisClaro') && styles.colorGrisClaro,
        (color === 'naranja') && styles.colorNaranja
      ]}>

        <Text style={{
          ...styles.botonTexto,
          color: (color === 'grisClaro') ? 'black' : 'white'
        }}
        >{texto}</Text>

      </View>
    </TouchableOpacity>
  )
}
