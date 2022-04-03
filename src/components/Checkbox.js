import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = (props) => {
  const { id, type, name, handleClick, isChecked, isCheckAll } = props

  const checkBox = {
    width: '17px',
    height: '17px',
    marginRight: '5px',
  }

  return (
    <input
      id={id}
      name={name}
      type={type}
      onChange={handleClick}
      checked={isCheckAll ? true : isChecked}
      style={checkBox}
    />
  )
}

Checkbox.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  handleClick: PropTypes.func,
  isChecked: PropTypes.bool,
  isCheckAll: PropTypes.bool,
}

export default Checkbox
