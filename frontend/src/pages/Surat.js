import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from '../components/SideMenu'

const Surat = () => {
  return (
    <div>
      <SideMenu/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Surat