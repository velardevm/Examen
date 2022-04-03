import React, { useEffect, useState } from 'react'
import './styles.css'
import { Droppable, Draggable } from 'react-tiny-drag-drop'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import {
  CCard,
  CCardBody,
  CCol,
  CButton,
  CRow,
  CFormLabel,
  CFormInput,
  CFormCheck,
} from '@coreui/react'
import Checkbox from '../../components/Checkbox'

const Grupos = () => {
  const [grupos, setGrupos] = useState([])
  const [tablaGrupos, setTablaGrupos] = useState([])
  const [busqueda, setBusqueda] = useState('')
  const [groupByEmployees, setGroupByEmployees] = useState([])
  const [groupTitle, setGroupTitle] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isCheckAll, setIsCheckAll] = useState(false)
  const [isCheck, setIsCheck] = useState([])

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

  const showInConsole = (e) => {
    if (isCheckAll === true) {
      console.log('===EMPLEADOS===')
      groupByEmployees.map((item) => console.log(item.name))
    } else {
      console.log('===EMPLEADOS===')
      isCheck.forEach(function (elemento) {
        console.log(elemento)
      })
    }
  }

  const filtrar = (busqueda) => {
    let restultados = tablaGrupos.filter((elemento) => {
      if (elemento.name.toString().toLowerCase().includes(busqueda.toLowerCase())) {
        return elemento
      }
    })
    setGrupos(restultados)
  }

  const handleDropEmployees = useFunction((groupName, currentKey, currentContext) => {
    //Validar si ya se ha añadido el grupo
    if (currentKey === groupTitle) return alert('El grupo ya ha sido añadido anteriormente')
    setGroupTitle(currentKey)
    setIsCheck([])
    let a = [...grupos]

    a.forEach((v) => {
      if (currentKey === v.name) {
        let id = v.id

        const url = `https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:cesar/getByGroup?id=${id}`
        fetch(url)
          .then((response) => {
            if (response.status == '200') {
              response.json().then((res) => {
                setErrorMessage('')
                setGroupByEmployees(res.data.employees)
              })
            } else if (response.status == '500') {
              setErrorMessage('El grupo no cuenta con registros')
              return
            }
          })
          .catch((err) => {
            console.log(err, 'error')
          })
        setIsCheckAll(true)
      }
    })
  })

  const handleDropGroups = useFunction((groupName, currentKey, currentContext) => {
    setGroupTitle(currentKey)
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

  const handleClick = (e) => {
    const { id, checked, name } = e.target
    setIsCheckAll(false)
    setIsCheck([...isCheck, name])
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== name))
    }
  }

  const renderCheckList = groupByEmployees.map(({ id, name }) => {
    let idString = name.toString()
    return (
      <>
        <CCol md={12}>
          <Checkbox
            key={idString}
            type="checkbox"
            name={name}
            id={idString}
            handleClick={handleClick}
            isChecked={isCheck.includes(idString)}
            isCheckAll={isCheckAll}
          />
          {name}
        </CCol>
      </>
    )
  })

  const cleanTarget = () => {
    setGroupTitle('')
    setGroupByEmployees([])
    setErrorMessage('')
  }

  const handleSelectAll = () => {
    setIsCheckAll(!isCheckAll)
    setIsCheck(groupByEmployees.map((li) => li.name.toString()))
    if (isCheckAll) {
      setIsCheck([])
    }
  }

  const context = 'names'

  const divStyle = {
    overflowY: 'scroll',
    height: '250px',
    position: 'relative',
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
      </CRow>

      <CRow>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardBody>
              <Droppable
                context={context}
                onDrop={(currentKey, currentContext) => {
                  handleDropGroups('a', currentKey, currentContext)
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
                  handleDropEmployees('b', currentKey, currentContext)
                }}
              >
                <div className="Droppable">
                  <CRow>
                    <CCol md={1} style={{ marginTop: '6px' }}>
                      {groupTitle === '' ? null : (
                        <Checkbox
                          id="selectAll"
                          type="checkbox"
                          name="selectAll"
                          handleClick={handleSelectAll}
                          isChecked={isCheckAll}
                          isCheckAll={isCheckAll}
                        />
                      )}
                    </CCol>
                    <CCol md={9} style={{ marginTop: '5px' }}>
                      <h5>{groupTitle === '' ? 'Arrastra grupo' : groupTitle}</h5>
                    </CCol>
                    <CCol md={2}>
                      <IconButton aria-label="delete" onClick={cleanTarget}>
                        <DeleteIcon />
                      </IconButton>
                    </CCol>
                  </CRow>
                  <CCol md={12} style={{ marginTop: '15px' }}>
                    <div style={divStyle}>
                      {errorMessage === '' ? renderCheckList : <p>{errorMessage}</p>}
                    </div>
                  </CCol>
                </div>
              </Droppable>
              <CCol xs={12} md={12} lg={12} align="end">
                <Button
                  style={{ marginTop: '15px' }}
                  variant="contained"
                  endIcon={<SendIcon />}
                  onClick={showInConsole}
                >
                  Continuar
                </Button>
              </CCol>
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

export default Grupos
