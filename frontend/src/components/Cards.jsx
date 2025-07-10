import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext.jsx'
import { cardStyles } from '../assets/dummystyle'



// PROFILE INFO CARD
export const ProfileInfoCard = () => {
    const navigate = useNavigate()
    const { user, clearUser } = useContext(UserContext)

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate('/')
    }
    return (
        user && (
            <div className={cardStyles.profileCard}>
                <div className={cardStyles.profileInitialsContainer}>
                    <span className={cardStyles.profileInitialsText}>
                        {user.name ? user.name.charAt(0).toUpperCase() : ""}
                    </span>
                </div>

                <div>
                    <div className={cardStyles.profileName}>
                        {user.name || ""}
                    </div>
                    <button className={cardStyles.profileLogoutButton}
                        onClick={handleLogout}>
                        Logout
                    </button>
                </div>
            </div>
        )
    )
}