import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Pressable, FlatList } from 'react-native'
import { styles } from './PaymentListScreen.styles'
import { getCuotaByAfiliadoId } from '../../api/cuota.service'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UserContext } from '../../contexts/UserContext';

import { Ionicons } from '@expo/vector-icons';


export const PaymentListScreen = () => {

    const { currentUser } = useContext(UserContext)
    const [data, setData] = useState([])

    useEffect(() => {
        if (currentUser) {
            getCuotaByAfiliadoId(currentUser.afiliado.id_afiliado)
                .then((data) => {
                    setData(data)
                })
                .catch((err) => console.log('!!!!!!!!!!! ' + err))
        }
    }, [currentUser])
    console.log(data)
    const detalleCuota = ({ item }) => (
        <Pressable>
            <View style={styles.itemContainer}>
                <View style={styles.cardHeader}>
                    <MaterialCommunityIcons style={styles.cardIcon} name="cash-multiple" size={64} color="black" />
                    <Text style={styles.cardImporteCuota}>$ {item.monto}</Text>
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.cardItem}>Comercio: {item.orden.comercio.name}</Text>
                    <Text style={styles.cardItem}>Vencimiento:{item.fecha_vencimiento}</Text>
                    <Text style={styles.cardItem}>Estado: {item.estado_pagado ? <Text style={styles.pagado}>PAGADO</Text> :<Text style={styles.debe}>DEBE</Text>}</Text>
                </View>
            </View>
        </Pressable>
    )

    return (
        <>
            {currentUser ?
                data.length !== 0 ?

                    <View style={styles.container}>
                        <View style={styles.titleCuotasContainer}>
                            <Text style={styles.titleCuotas}>CUOTAS A PAGAR A LA MUTUAL</Text>
                        </View>
                        <FlatList
                            data={data}
                            renderItem={detalleCuota}
                            keyExtractor={(item) => item.id_cuota}
                            style={styles.itemList}
                        ></FlatList>
                    </View>
                    :
                    <View style={styles.container}>
                        <View style={styles.messageContainer}>
                            <Ionicons style={styles.iconTitle} name="happy-outline" size={100} color="black" />
                            <Text style={styles.title}>MUTUAL</Text>
                            <Text style={styles.title}>APP</Text>
                            <Text style={styles.txtMessage}>No se encontraron registros de cuotas para este afiliado</Text>
                        </View>
                    </View>
                :
                <View style={styles.container}>
                    <View style={styles.messageContainer}>
                        <Ionicons style={styles.iconTitle} name="happy-outline" size={100} color="black" />
                        <Text style={styles.title}>MUTUAL</Text>
                        <Text style={styles.title}>APP</Text>
                        <Text style={styles.txtMessage}>Debe iniciar sesion</Text>
                    </View>
                </View>

            }


        </>

    )
}
