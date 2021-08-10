import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import { useCalculadora } from '../hooks/useCalculadora'
import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

export const CalculadoraScreen = () => {
  const {
    numero,
    numeroAnterior,
    armarNumero,
    limpiar,
    positivoNegativo,
    btnDelete,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular
  } = useCalculadora()

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <View style={styles.calculadoraContainer}>
      {
        (numeroAnterior !== '0') && (
          <Text style={styles.resultadoPequeño}>{numeroAnterior}</Text>
        )
      }

      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit
      >{numero}
      </Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto='C' color='grisClaro' accion={limpiar} />
        <BotonCalc texto='+/-' color='grisClaro' accion={positivoNegativo} />
        <BotonCalc texto='del' color='grisClaro' accion={btnDelete} />
        <BotonCalc texto='/' color='naranja' accion={btnDividir} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto='7' accion={armarNumero} />
        <BotonCalc texto='8' accion={armarNumero} />
        <BotonCalc texto='9' accion={armarNumero} />
        <BotonCalc texto='X' color='naranja' accion={btnMultiplicar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto='4' accion={armarNumero} />
        <BotonCalc texto='5' accion={armarNumero} />
        <BotonCalc texto='6' accion={armarNumero} />
        <BotonCalc texto='—' color='naranja' accion={btnRestar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto='1' accion={armarNumero} />
        <BotonCalc texto='2' accion={armarNumero} />
        <BotonCalc texto='3' accion={armarNumero} />
        <BotonCalc texto='+' color='naranja' accion={btnSumar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto='0' ancho accion={armarNumero} />
        <BotonCalc texto='.' accion={armarNumero} />
        <BotonCalc texto='=' color='naranja' accion={calcular} />
      </View>
    </View>
  )
}
