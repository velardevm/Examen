import React from 'react'

// Formulario
const Formulario = React.lazy(() => import('./views/forms/Formularios'))

//Navegacion
const Carousel = React.lazy(() => import('./views/dashboard/Dashboard'))
const Empleados = React.lazy(() => import('./views/theme/colors/Colors'))
const Grupos = React.lazy(() => import('./views/theme/typography/Typography'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/carousel', name: 'Carousel', component: Carousel },
  { path: '/empleados/formulario', name: 'Formulario', component: Formulario, exact: true },
  { path: '/theme', name: 'Theme', component: Empleados, exact: true },
  { path: '/empleados', name: 'Clientes', component: Empleados },
  { path: '/grupos', name: 'Grupos', component: Grupos },
]

export default routes
