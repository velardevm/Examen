import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilArrowRight,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Inicio',
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
