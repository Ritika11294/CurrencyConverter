import React from 'react'

const Currency_option = ({currency, onSelect}) => {
  return (
    <option value={currency} onClick={() => onSelect(currency)}>{currency}</option>
  )
}

export default Currency_option
