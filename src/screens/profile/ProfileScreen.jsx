import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { LoginScreen } from '../login/LoginScreen'
import { UserInfoScreen } from '../user/UserInfoScreen'

export const ProfileScreen = () => {
    const {currentUser} = useContext(UserContext)
    return (
        <>
            {currentUser
                ? (
                    <UserInfoScreen />
                )
                : (
                    <LoginScreen />
                )}
        </>
    )
}