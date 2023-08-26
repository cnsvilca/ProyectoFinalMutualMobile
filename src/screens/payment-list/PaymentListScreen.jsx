import React, { useContext } from 'react'
import { View, Text, Pressable, FlatList } from 'react-native'
import { data } from '../../api/data'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { UserContext } from '../../contexts/UserContext';
import { Ionicons } from '@expo/vector-icons';




export const PaymentListScreen = ({ navigation }) => {

    const { currentUser } = useContext(UserContext)

    const detalleCuota = ({ item }) => (
        <Pressable onPress={() => navigation.navigate('Detalle', { item })}>
            <View>
                <View>
                    <MaterialCommunityIcons name="cash-multiple" size={64} color="black" />
                    <Text>$ {item.monto}</Text>
                </View>
                <View>
                    <Text>Codigo:000000{item.id}</Text>
                    <Text>Vencimiento:{item.fecha_vencimiento}</Text>
                    <Text>Detalle: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, amet.</Text>
                </View>
            </View>
        </Pressable>
    )

    return (
        <>
            {currentUser ?
                <View>
                    <FlatList
                        data={data}
                        renderItem={detalleCuota}
                        keyExtractor={(item) => item.id}
                    ></FlatList>
                </View>
                :
                <View>
                    <View>
                        <Ionicons name="happy-outline" size={100} color="black" />
                        <Text>MUTUAL</Text>
                        <Text>APP</Text>
                        <Text>Debe iniciar sesion</Text>
                    </View>
                </View>


            }
        </>

    )
}
