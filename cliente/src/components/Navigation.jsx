import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div>
        <Link to="/estudiantes"> Estudiantes </Link>
        <Link to="/form-estudiantes"> Agregar estudiante </Link>
    </div>
  )
}