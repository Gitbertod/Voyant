import React from 'react'
import { Link } from 'react-router-dom'
import { DrawerComponent } from '../drawer/DrawerComponent'

const BurguerMenu = () => {
  return (
    <div className="flex h-16 justify-evenly items-center   ">
        <Link to="/">
          <img src="/logoVoyantColor.svg" className="h-14 align-middle " alt="Voyant Logo" />
        </Link>
        <div className="w-56"></div>
        <DrawerComponent></DrawerComponent>
      </div>
  )
}

export default BurguerMenu