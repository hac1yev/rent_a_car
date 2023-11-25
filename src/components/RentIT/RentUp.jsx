import React from 'react'
import { Link } from 'react-router-dom'

const RentUp = () => {
  return (
    <div className='rentup-container'>
        <h1 className='rentup-h1'>Avtomobilini icarəyə ver <br /> daha çox qazan</h1>
        <p>Bugün qoşul avtomobili icarəyə ver və prossesi şəxsi biznesə çevir</p>
        <Link to='/'><span>+</span> İcarəyə ver</Link>
    </div>
  )
}

export default RentUp