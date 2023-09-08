import React, { useContext } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './UserInfoScreen.styles'
import { UserContext } from '../../contexts/UserContext'
import { Ionicons } from '@expo/vector-icons';


export const UserInfoScreen = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext)

    const handleLogout = () => {
        setCurrentUser(null)
    }

    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <View style={styles.content}>
                    <Ionicons style={styles.iconTitle} name="happy-outline" size={100} color="black" />
                    <Text style={styles.title}>MUTUAL APP</Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Afiliado</Text>
                    <Text style={styles.profileName}>
                        {currentUser.afiliado.name} {currentUser.afiliado.lastname}
                    </Text>
                </View>
                <View style={styles.content}>
                    <Text style={styles.sectionTitle}>Saldo Disponible</Text>
                    <Text style={styles.profileInfo}>$ {currentUser.afiliado.saldo}</Text>
                    <Text style={styles.txtMessage}>Saldo disponible para emision de nuevas ordenes de compra en la mutual</Text>
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
