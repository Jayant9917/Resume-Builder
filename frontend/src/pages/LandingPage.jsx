import React, { useContext } from 'react'
import { LayoutTemplate, Menu, X } from 'lucide-react';
import { landingPageStyles, } from '../assets/dummystyle'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext.jsx';
import { ProfileInfoCard } from '../components/Cards.jsx';


const LandingPage = () => {
  const { user } = useContext(UserContext)
  const navigate = useNavigate()
  const [openAuthModal, setOpenAuthModal] = useState(false)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className={landingPageStyles.container}>
      {/* HEADER */}
      <header className={landingPageStyles.header}>
        <div className={landingPageStyles.headerContainer}>
            <div className={landingPageStyles.logoContainer}>
                <div className={landingPageStyles.logoIcon}>
                  <LayoutTemplate className={landingPageStyles.logoIconInner}/>
                </div>
                <span className={landingPageStyles.logoText}>
                  ResumeXpert
                </span>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button className={landingPageStyles.mobileMenuButton}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? 
              <X size={24} className={landingPageStyles.mobileMenuIcon}/> :
              <Menu size={24} className={landingPageStyles.mobileMenuIcon}/>}
            </button>

            {/* DESKTOP NAVIGATION */}
            <div className='hidden md:flex items-center '>
              {user ? (
                <ProfileInfoCard/>
              ) : (
                <button className={landingPageStyles.desktopAuthButton} onClick={() => setOpenAuthModal(true)}>
                  <div className={landingPageStyles.desktopAuthButtonOverlay}></div>
                  <span className={landingPageStyles.desktopAuthButtonText}>Get Started</span>
                </button>
              )}
            </div>
        </div>
      </header>
    </div>
  )
}

export default LandingPage

