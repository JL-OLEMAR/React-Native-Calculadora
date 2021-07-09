import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'

import { BotonCalc } from '../components/BotonCalc'
import { styles } from '../theme/appTheme'

// enum: permiten definir un conjunto de constantes con nombre.
enum Operadores {
  sumar, restar, multiplicar, dividir
}

export const CalculadoraScreen = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0')
  const [numero, setNumero] = useState('0')
  const ultimaOperarion = useRef<Operadores>()

  const limpiar = () => {
    setNumero('0')
    setNumeroAnterior('0')
  }

  const armarNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto)

        // Evaluar si es otro cero, y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto)

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto)

        // Evitar 000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero)
      } else {
        setNumero(numero + numeroTexto)
      }
    } else {
      setNumero(numero + numeroTexto)
    }
  }

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''))
    } else {
      setNumero('-' + numero)
    }
  }

  const btnDelete = () => {
    let negativo = ''
    let numeroTemp = numero

    if (numero.includes('-')) {
      negativo = '-'
      numeroTemp = numero.substr(1)
    }

    if (numeroTemp.length > 1) {
      setNumero(negativo + numeroTemp.slice(0, -1))
    } else {
      setNumero('0')
    }
  }

  const cambiarNumeroAnterior = () => {
    if (numero.endsWith('.')) {
      setNumeroAnterior(numero.slice(0, -1))
    } else {
      setNumeroAnterior(numero)
    }
    setNumero('0')
  }

  const btnDividir = () => {
    cambiarNumeroAnterior()
    ultimaOperarion.current = Operadores.dividir
  }
  const btnMultiplicar = () => {
    cambiarNumeroAnterior()
    ultimaOperarion.current = Operadores.multiplicar
  }
  const btnRestar = () => {
    cambiarNumeroAnterior()
    ultimaOperarion.current = Operadores.restar
  }
  const btnSumar = () => {
    cambiarNumeroAnterior()
    ultimaOperarion.current = Operadores.sumar
  }

  const calcular = () => {
    const num1 = Number(numero)
    const num2 = Number(numeroAnterior)

    switch (ultimaOperarion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`)
        break

      case Operadores.restar:
        setNumero(`${num2 - num1}`)
        break

      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`)
        break

      case Operadores.dividir:
        if (num1 > 0 && num2 > 0) {
          setNumero(`${num2 / num1}`)
        } else {
          setNumero('0')
        }
        break

      default:
        setNumero('0')
        break
    }
    setNumeroAnterior('0')
  }

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
      >{numero}</Text>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="C" color="grisClaro" accion={limpiar} />
        <BotonCalc texto="+/-" color="grisClaro" accion={positivoNegativo} />
        <BotonCalc texto="del" color="grisClaro" accion={btnDelete} />
        <BotonCalc texto="/" color="naranja" accion={btnDividir} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="7" accion={armarNumero} />
        <BotonCalc texto="8" accion={armarNumero} />
        <BotonCalc texto="9" accion={armarNumero} />
        <BotonCalc texto="X" color="naranja" accion={btnMultiplicar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="4" accion={armarNumero} />
        <BotonCalc texto="5" accion={armarNumero} />
        <BotonCalc texto="6" accion={armarNumero} />
        <BotonCalc texto="—" color="naranja" accion={btnRestar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="1" accion={armarNumero} />
        <BotonCalc texto="2" accion={armarNumero} />
        <BotonCalc texto="3" accion={armarNumero} />
        <BotonCalc texto="+" color="naranja" accion={btnSumar} />
      </View>

      {/* Fila de botones */}
      <View style={styles.fila}>
        <BotonCalc texto="0" ancho accion={armarNumero} />
        <BotonCalc texto="." accion={armarNumero} />
        <BotonCalc texto="=" color="naranja" accion={calcular} />
      </View>
    </View>
  )
}
