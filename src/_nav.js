import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilArrowRight } from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Carousel',
    to: '/carousel',
    icon: <CIcon icon={cilArrowRight} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Empleados',
    to: '/empleados',
    icon: <CIcon icon={cilArrowRight} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Grupos',
    to: '/grupos',
    icon: <CIcon icon={cilArrowRight} customClassName="nav-icon" />,
  },
]

export default _nav
