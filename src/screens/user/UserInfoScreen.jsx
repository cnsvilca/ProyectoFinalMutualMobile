import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './UserInfoScreen.styles'
import { UserContext } from '../../contexts/UserContext'

export const UserInfoScreen = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const handleLogout = () => {
        setCurrentUser(null)
    }

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Nombre y Apellido</Text>
                    <Text style={styles.profileName}>
                        {currentUser.afiliado.name} {currentUser.afiliado.lastname}
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Saldo Disponible</Text>
                    <Text style={styles.profileInfo}>$ {currentUser.afiliado.saldo}</Text>
                </View>
            </View>
            <View style={styles.section}>
                <TouchableOpacity style={styles.button} onPress={handleLogout}>
                    <Text style={styles.buttonText}>Salir</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
