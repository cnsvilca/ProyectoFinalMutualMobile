import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { UserContext } from '../../contexts/UserContext'

export const UserInfoScreen = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const handleLogout = () => {
        setCurrentUser(null)
    }

    return (
        <View >
            <View >
                <View >
                    <Text>Nombre y Apellido</Text>
                    <Text>
                        {currentUser.afiliado.name} {currentUser.afiliado.lastname}
                    </Text>
                </View>
                <View>
                    <Text>Saldo Disponible</Text>
                    <Text>$ {currentUser.afiliado.saldo}</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity  onPress={handleLogout}>
                    <Text>Salir</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
