import React, { useContext } from 'react'
import { LayoutTemplate, Menu, X, ArrowRight } from 'lucide-react';
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
  const [currentPage, setCurrentPage] = useState('login')

  const handleCTA = () => {
    if(!user){
      setOpenAuthModal(true)
    }else{
      navigate('/dashboard')
    }
  }

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

        {/* MOBILE MENU */}
        {mobileMenuOpen && (
          <div className={landingPageStyles.mobileMenu}>
            <div className={landingPageStyles.mobileMenuContainer}>
              {user ? (
                <div className={landingPageStyles.mobileUserInfo}>
                  <div className={landingPageStyles.mobileUserUserWelcome}>
                    Welcome Back
                    </div>
                    <button className={landingPageStyles.mobileDashboardButton}
                    onClick={() => {
                      navigate('/dashboard')
                      setMobileMenuOpen(false)
                    }}>
                      Go to DashBoard
                    </button>
                </div>
              ): (
                <button className={landingPageStyles.mobileAuthButton}
                onClick={() => {
                  setOpenAuthModal(true) 
                  setMobileMenuOpen(false)
                }}>
                  Get Started 
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT*/}

      <main className={landingPageStyles.main}>
        <section className={landingPageStyles.heroSection}>
          <div className={landingPageStyles.heroGrid}>
            {/* LEFT CONTENT */}
            <div className={landingPageStyles.heroLeft}>
              <div className={landingPageStyles.tagline}>
                Professional Resume Builder
              </div>

              <h1 className={landingPageStyles.heading}>
                <span className={landingPageStyles.headingText}>Craft</span>
                <span className={landingPageStyles.headingGradient}>Professional</span>
                <span className={landingPageStyles.headingText}>Resumes</span>
              </h1>

              <p className={landingPageStyles.description}>
                Create Job-winning resumes with exprertly templates,
                ATS-Friendly, Recruiter-approved and tailored to your career goals.
              </p>

              <div className={landingPageStyles.ctaButtons}>
                <button className={landingPageStyles.primaryButton}
                onClick={handleCTA}>
                  <div className={landingPageStyles.primaryButtonOverlay}>
                  </div>
                  <span className={landingPageStyles.primaryButtonContent}>
                    Start Building
                    <ArrowRight className={landingPageStyles.primaryButtonIcon} size={18}/>
                  </span>
                </button>

                <button className={landingPageStyles.secondaryButton} 
                onClick={handleCTA}>
                  View Templetes
                </button>
              </div>

              {/* STATS GRID */}

            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default LandingPage

