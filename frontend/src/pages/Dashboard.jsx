import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DashboardLayout from '../components/DashboardLayout.jsx'
import { dashboardStyles as styles } from '../assets/dummystyle.js'

const Dashboard = () => {

  const navigate = useNavigate();
  const [ openCreateModal, setOpenCreateModal ] = useState(false);
  const [allResumes, setAllResumes ] = useState([]);

  return (
  <DashboardLayout>
    <div className={styles.container}>
      <div className={styles.headerWrapper}>

        <div>
          <h1 className={styles.headerTitle}>My Resume</h1>
          <p className={styles.headerSubtitle}>
            {allResumes.length > 0 ? `You have ${allResumes.length} resumes${allResumes.length !==1 ? 's' : ''}`
            : 'Start Building your resume now!'}
          </p>
        </div>
        
      </div>
    </div>
  </DashboardLayout>
  )
}

export default Dashboard

