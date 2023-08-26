import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { signin } from '../../api/user.service'
import { UserContext } from '../../contexts/UserContext'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../utils/theme'
import { getAfiliados } from '../../api/afiliado.service'

export const LoginScreen = () => {
    const navigation = useNavigation()
    const { setCurrentUser } = useContext(UserContext)
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const handleLogin = ({ username, password }) => {
        const data = { username, password }
        signin(data)
            .then((res) => {
                if (res.credentials != null) {
                    getAfiliados()
                        .then((afiliados) => {
                            const afiliado = afiliados.find((afiliado) => afiliado.user.username === username)
                            if (username === afiliado.user.username) {
                                setCurrentUser({ username,password,afiliado})
                                navigation.navigate('Profile')
                            }
                        })
                } else {
                    throw new Error('usuario/contraseña incorrectos')
                }
            })
            .catch((err) => console.warn(err))

    }

    return (
        <View >
            <View >
                <Ionicons name="happy-outline" size={100} color="black" />
                <Text >MUTUAL</Text>
                <Text >APP</Text>
            </View>

            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        
                        placeholder='Usuario'
                        placeholderTextColor={COLORS.primary}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        autoCapitalize='none'
                    />
                )}
                name='username'
                rules={{ required: 'El nombre de usuario es requerido' }}
            />
            {errors.username && <Text>{errors.username.message}</Text>}
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        
                        placeholder='Contraseña'
                        placeholderTextColor={COLORS.primary}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        secureTextEntry
                    />
                )}
                name='password'
                rules={{ required: 'La constraseña es requerida' }}
            />
            {errors.password && <Text>{errors.password.message}</Text>}
            <TouchableOpacity onPress={handleSubmit(handleLogin)}>
                <Text>Iniciar Sesion</Text>
            </TouchableOpacity>
        </View>
    )
}
