import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CButton,
  CFormLabel,
  CFormInput,
} from '@coreui/react'
import Moment from 'moment'
import { useHistory } from 'react-router-dom'

const Formularios = () => {
  const [nombre, setNombre] = useState('')
  const [apellidos, setApellidos] = useState('')
  const [cumpleaños, setCumpleaños] = useState('')
  const history = useHistory()

  const handleChange = async (e) => {
    e.preventDefault()
    const objetoCliente = {
      name: apellidos,
      last_name: nombre,
      birthday: Moment(cumpleaños).format('YYYY/MM/DD'),
    }
    console.log('objetoCliente', objetoCliente)
    try {
      const url =
        'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:cesar'
      const respuesta = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(objetoCliente),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      // console.log(respuesta)
      const resultado = await respuesta.json()
      //console.log(resultado)
      history.push('/empleados')
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <CRow className="justify-content-md-center">
      <CCol xs lg="8">
        <CCard border="light" className="bg-white shadow-sm">
          <CCardHeader>
            <strong>Registrar cliente</strong>
          </CCardHeader>
          <CCardBody>
            <CForm onSubmit={handleChange}>
              <CRow>
                <CCol md={6} className="mb-3">
                  <CFormLabel htmlFor="1">Nombre</CFormLabel>
                  <CFormInput
                    maxLength="30"
                    type="text"
                    id="1"
                    placeholder="Nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </CCol>
                <CCol md={6} className="mb-3">
                  <CFormLabel htmlFor="2">Apellidos</CFormLabel>
                  <CFormInput
                    maxLength="30"
                    type="text"
                    id="2"
                    placeholder="Apellidos"
                    value={apellidos}
                    onChange={(e) => setApellidos(e.target.value)}
                  />
                </CCol>
              </CRow>
              <CRow className="align-items-center">
                <CCol md={6} className="mb-3">
                  <CFormLabel htmlFor="3">Fecha de cumpleaños</CFormLabel>
                  <CFormInput
                    type="date"
                    id="3"
                    placeholder="name@example.com"
                    value={cumpleaños}
                    onChange={(e) => setCumpleaños(e.target.value)}
                  />
                </CCol>
              </CRow>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton type="submit" color="primary">
                  Registrar cliente
                </CButton>
              </div>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Formularios
