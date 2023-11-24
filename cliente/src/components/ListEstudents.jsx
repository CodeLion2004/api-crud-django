import React from 'react';
import { useState, useEffect } from 'react';
import { getAllStudents } from '../api/StudentsApi';
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, TablePagination } from '@mui/material';
import ModDelet from './ModDelet';
import ModInsert from './ModInsert';
import ModEdit from './ModEdit';

function ListEstudents() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    async function CargarStudents() {
      try {
        const response = await getAllStudents();
        setEstudiantes(response.data);
        console.log('res', response.data);
      } catch (error) {
        console.error('Error al obtener estudiantes:', error);
      }
    }
    CargarStudents();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Listado Estudiantes</h1>
      <TableContainer>
        <ModInsert setEstudiantes={setEstudiantes} estudiantes={estudiantes} />
        <Table style={{ marginTop: 3 }}>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NOMBRE</TableCell>
              <TableCell>APELLIDOS</TableCell>
              <TableCell>EDAD</TableCell>
              <TableCell>CORREO</TableCell>
              <TableCell>CARRERA</TableCell>
              <TableCell>CEDULA</TableCell>
              <TableCell>ACCIONES</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {estudiantes
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.nombre}</TableCell>
                  <TableCell>{item.apellido}</TableCell>
                  <TableCell>{item.edad}</TableCell>
                  <TableCell>{item.correo}</TableCell>
                  <TableCell>{item.carrera}</TableCell>
                  <TableCell>{item.cedula}</TableCell>
                  <TableCell>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <ModEdit
                        student={item}
                        setEstudiantes={setEstudiantes}
                        estudiantes={estudiantes}
                      />
                      <ModDelet
                        student={item}
                        setEstudiantes={setEstudiantes}
                        estudiantes={estudiantes}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 50]}
          component="div"
          count={estudiantes.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={(event, newPage) => setPage(newPage)}
          onRowsPerPageChange={(event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
          }}
        />
      </TableContainer>
    </div>
  );
}

export default ListEstudents;
