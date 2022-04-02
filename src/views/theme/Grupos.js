import React, { useEffect, useState } from 'react'
import './styles.css'
import { Droppable, Draggable } from 'react-tiny-drag-drop'
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
  CFormCheck,
} from '@coreui/react'

const Typography = () => {
  const [grupos, setGrupos] = useState([])
  const [tablaGrupos, setTablaGrupos] = useState([])
  const [busqueda, setBusqueda] = useState('')

  const [groupA, setGroupA] = useState(['Noel', 'Joel', 'Boel'])
  const [groupB, setGroupB] = useState([])

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

  /**
   * Callback function for handling of drop events
   */
  const handleDrop = useFunction((groupName, currentKey, currentContext) => {
    // Copy state variables to new, local variables to work with.
    let a = [...groupA]
    let b = [...groupB]

    // Remove the dropped item if found in group A
    a.forEach((v, i) => {
      if (currentKey === v) {
        a.splice(i, 1)
      }
    })

    // Remove the dropped item if found in group B
    b.forEach((v, i) => {
      if (currentKey === v) {
        b.splice(i, 1)
      }
    })

    // Items will always be added to the bottom in this simple demo.
    // A Droppable can be added to each Draggable to determine sort order in
    // the group, but that's out of scope for this demo.
    if (groupName === 'a') {
      a.push(currentKey)
    } else {
      b.push(currentKey)
    }

    // Update state
    setGroupA(a)
    setGroupB(b)
  })

  /**
   * Function for handling render of a group of Draggable's
   * @param {*} list
   */
  const renderList = (list) => {
    return list.map((item) => (
      <Draggable key={item.id} context={context} dataKey={item.name}>
        <div className="Draggable">{item.name}</div>
      </Draggable>
    ))
  }

  const renderCheckList = (list) => {
    console.log('list', list)
    return list.map((name) => (
      <CFormCheck id="defaultCheck1" label={name} key={name} className="another" />
    ))
  }

  const context = 'names'

  /**
   * Render
   */
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

      <CRow>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardBody>
              <Droppable
                context={context}
                onDrop={(currentKey, currentContext) => {
                  handleDrop('a', currentKey, currentContext)
                }}
              >
                <div className="Droppable">
                  <h4>Grupos</h4>
                  {renderList(grupos)}
                </div>
              </Droppable>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardBody>
              <Droppable
                context={context}
                onDrop={(currentKey, currentContext) => {
                  handleDrop('b', currentKey, currentContext)
                }}
              >
                <div className="Droppable">
                  <h4>Group B</h4>
                  {renderCheckList(groupB)}
                </div>
              </Droppable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

/**
 * Use react callback
 *
 * @param {*} callback
 */
function useFunction(callback) {
  const ref = React.useRef()
  ref.current = callback

  return React.useCallback(function () {
    const callback = ref.current
    if (typeof callback === 'function') {
      return callback.apply(this, arguments)
    }
  }, [])
}

export default Typography
