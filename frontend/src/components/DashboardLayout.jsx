import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext.jsx'
import Navbar from './Navbar.jsx'


const DashboardLayout = ({activeMenu, children}) => {

    const { user } = useContext(UserContext);
  return (
    <div>
      <Navbar activeMenu={activeMenu}/>
      {user && <div className='container mx-auto p-20 pt-4 pb-4'>{children}</div>}
    </div>
  )
}

export default DashboardLayout
