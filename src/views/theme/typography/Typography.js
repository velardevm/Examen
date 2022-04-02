import React, { useEffect, useState } from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CCardHeader,
  CRow,
  CListGroup,
  CListGroupItem,
  CFormLabel,
  CFormInput,
} from '@coreui/react'

const Typography = () => {
  const [grupos, setGrupos] = useState([])
  const [tablaGrupos, setTablaGrupos] = useState([])
  const [busqueda, setBusqueda] = useState('')

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const url = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/groups/:cesar'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setGrupos(resultado.data.groups)
        setTablaGrupos(resultado.data.groups)
      } catch (error) {
        console.log('error', error)
      }
    }
    obtenerClientes()
  }, [])

  const handleChange = (e) => {
    setBusqueda(e.target.value)
    filtrar(e.target.value)
  }

  const filtrar = (busqueda) => {
    let restultados = tablaGrupos.filter((elemento) => {
      if (elemento.name.toString().toLowerCase().includes(busqueda.toLowerCase())) {
        return elemento
      }
    })
    setGrupos(restultados)
  }

  return (
    <>
      <CRow>
        <CCol md={12} style={{ marginBottom: '15px' }}>
          <CCol md={6}>
            <CFormLabel style={{ marginTop: '5px' }}>Buscar grupo</CFormLabel>
            <CFormInput
              type="text"
              onChange={handleChange}
              value={busqueda}
              style={{ marginBottom: '7px' }}
              placeholder="Buscar..."
            />
          </CCol>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Bar Chart</CCardHeader>
            <CCardBody>
              {grupos.map((item) => (
                <CListGroup key={item.id}>
                  <CListGroupItem>{item.name}</CListGroupItem>
                </CListGroup>
              ))}
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Line Chart</CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem>Cras justo odio</CListGroupItem>
                <CListGroupItem>Dapibus ac facilisis in</CListGroupItem>
                <CListGroupItem>Morbi leo risus</CListGroupItem>
                <CListGroupItem>Porta ac consectetur ac</CListGroupItem>
                <CListGroupItem>Vestibulum at eros</CListGroupItem>
              </CListGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Typography
