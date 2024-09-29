import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from '../components/SideMenu'
function Pembayaran() {
  return (
    <div>
      <SideMenu/>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Pembayaran