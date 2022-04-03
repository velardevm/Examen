import React, { useEffect, useState } from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CPaginationItem,
  CCol,
  CPagination,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { Link } from 'react-router-dom'

const Empleados = () => {
  const ITEMS_PAGE = 10
  const [clientes, setClientes] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [items, setItems] = useState([...clientes].splice(0, ITEMS_PAGE))

  useEffect(() => {
    const obtenerClientes = async () => {
      try {
        const url =
          'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:cesar'
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setClientes(resultado.data.employees)
        setItems(resultado.data.employees.splice(0, ITEMS_PAGE))
      } catch (error) {
        console.log('error', error)
      }
    }
    obtenerClientes()
  }, [])

  const nextHandler = () => {
    const totalElementos = clientes.length
    const nextPage = currentPage + 1
    const firstIndex = nextPage * ITEMS_PAGE

    if (firstIndex === totalElementos) return
    setItems([...clientes].splice(firstIndex, ITEMS_PAGE))
    setCurrentPage(nextPage)
  }

  const prevHandler = () => {
    const prevPage = currentPage - 1
    if (prevPage < 0) return

    const firstIndex = prevPage * ITEMS_PAGE
    setItems([...clientes].splice(firstIndex, ITEMS_PAGE))
    setCurrentPage(prevPage)
  }

  return (
    <>
      <CRow>
        <CCol xs={12} md={12} lg={12} align="end">
          <Link
            style={{ textDecoration: 'none', color: '#1976D2' }}
            to={{ pathname: '/empleados/formulario' }}
          >
            <CButton color="primary" align="end" style={{ marginBottom: '12px' }}>
              Registrar cliente
            </CButton>
          </Link>
        </CCol>
        <CCol xs>
          <CCard className="mb-4">
            <CCardBody>
              <br />
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">Nombre</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Apellidos</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Cumpleaños</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {items.map((item) => (
                    <CTableRow v-for="item in tableItems" key={item.id}>
                      <CTableDataCell className="text-center">
                        <div>{item.last_name}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.name}</div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <div>{item.birthday}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
          <CPagination align="center" aria-label="Page navigation example">
            <CPaginationItem onClick={prevHandler}>Anterior página</CPaginationItem>
            <CPaginationItem onClick={nextHandler}>Siguiente página</CPaginationItem>
          </CPagination>
        </CCol>
      </CRow>
    </>
  )
}

export default Empleados
