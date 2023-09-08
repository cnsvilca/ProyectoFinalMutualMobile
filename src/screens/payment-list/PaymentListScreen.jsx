import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Pressable, FlatList } from 'react-native'
import { styles } from './PaymentListScreen.styles'
import { getCuotaByAfiliadoId } from '../../api/cuota.service'

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UserContext } from '../../contexts/UserContext';

import { Ionicons } from '@expo/vector-icons';


export const PaymentListScreen = ({ navigation }) => {

    const { currentUser } = useContext(UserContext)
    const [data, setData] = useState([])
    
    useEffect(() => {
        getCuotaByAfiliadoId(currentUser.afiliado.id_afiliado)
            .then((data) => {
                setData(data)
            })
            .catch((err) => console.log('!!!!!!!!!!! '+ err))
    }, [])

    const detalleCuota = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('Detalle', { item })}>
            <View style={styles.itemContainer}>
                <View style={styles.cardHeader}>
                    <MaterialCommunityIcons style={styles.cardIcon} name="cash-multiple" size={64} color="black" />
                    <Text style={styles.cardImporteCuota}>$ {item.monto}</Text>
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.cardItem}>Codigo:000000{item.id_cuota}</Text>
                    <Text style={styles.cardItem}>Vencimiento:{item.fecha_vencimiento}</Text>
                    <Text style={styles.cardItem}>Detalle:</Text>
                </View>
            </View>
        </Pressable>
    )

    return (
        <>
            {currentUser ?
                <View style={styles.container}>
                    <FlatList
                        data={data}
                        renderItem={detalleCuota}
                        keyExtractor={(item) => item.id}
                        style={styles.itemList}
                    ></FlatList>
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
