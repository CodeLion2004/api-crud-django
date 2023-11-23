// import React from 'react'
// import { useState,useEffect } from 'react'
// import { getAllStudents } from "../api/StudentsApi";
// import MUIDataTable from 'mui-datatables'

// function ListEstudents() {

//   const [estudiantes, setEstudiantes] = useState([])
  

//     useEffect(() => {
//     async function CargarStudents() {
//       try {
//         const response = await getAllStudents();
//         setEstudiantes(response.data);
//         console.log('res', response.data);
//       } catch (error) {
//         console.error("Error al obtener estudiantes:", error);
//       }
//     }
//     CargarStudents();
//   }, []);

//   //DEFINIMOS LAS COLUMNAS 
//   const columns=[
//     {
//       name: 'id',
//       label: 'ID'
//     },
//     {
//       name: 'nombre',
//       label: 'NOMBRE'
//     },
//     {
//       name: 'apellido',
//       label: 'APELLIDOS'
//     },
//     {
//       name: 'edad',
//       label: 'EDAD'
//     },
//     {
//       name: 'correo',
//       label: 'CORREO'
//     },
//     {
//       name: 'carrera',
//       label: 'CARRERA'
//     },
//     {
//       name: 'cedula',
//       label: 'CEDULA'
//     },
//   ]

//   const options = {
//     onRowsDelete: (rowsDeleted) => {
//       const updatedEstudiantes = estudiantes.filter(
//         (_, index) => !rowsDeleted.data.includes(index)
//       );
//       setEstudiantes(updatedEstudiantes);
//       console.log('Rows deleted:', rowsDeleted);
//     },
//   };


//   return (
//     <MUIDataTable
//       title={"LISTADO ESTUDIANTES"}
//       data={estudiantes}
//       columns={columns}
//       options={options}
//     />
//   )
// }

// export default ListEstudents






// import React from "react";
// import { useEffect, useState } from "react";
// import { getAllStudents } from "../api/StudentsApi";

// function ListEstudents() {
//   const [estudiantes, setEstudiantes] = useState([]);

//   useEffect(() => {
//     let mount = true;
//     getAllStudents().then((res) => {
//       console.log("res", res.data);
//       setEstudiantes(res.data);
//       return () => (mount = false);
//     });
//   }, []);

//   return (
//     <div>
//       <h3>Lista de estudiantes</h3>

//       <table>
//         <thead>
//           <td>ID</td>
//           <td>NOMBRE</td>
//           <td>APELLIDO</td>
//           <td>EDAD</td>
//           <td>CORREO</td>
//           <td>CARRERA</td>
//           <td>CEDULA</td>
//         </thead>

//         <tbody>
//           {estudiantes.map((item) => {
//             return <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.nombre}</td>
//               <td>{item.apellido}</td>
//               <td>{item.edad}</td>
//               <td>{item.correo}</td>
//               <td>{item.carrera}</td>
//               <td>{item.cedula}</td>
//               <td><button>editar</button></td>
//             </tr>;
//           })}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default ListEstudents;





import React from 'react'
import { useState,useEffect } from 'react'
import { getAllStudents } from "../api/StudentsApi";
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ModInsert from './ModInsert';



function ListEstudents() {

    const [estudiantes, setEstudiantes] = useState([])
    
    useEffect(() => {
      async function CargarStudents() {
        try {
          const response = await getAllStudents();
          setEstudiantes(response.data);
          console.log("res", response.data);
        } catch (error) {
          console.error("Error al obtener estudiantes:", error);
        }
      }
      CargarStudents();
    }, []);


  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Listado Estudiantes</h1>
      <TableContainer >
        <ModInsert setEstudiantes={setEstudiantes} estudiantes={estudiantes}/>
        <Table style={{marginTop: 3}}>
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
            {estudiantes.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.nombre}</TableCell>
                <TableCell>{item.apellido}</TableCell>
                <TableCell>{item.edad}</TableCell>
                <TableCell>{item.correo}</TableCell>
                <TableCell>{item.carrera}</TableCell>
                <TableCell>{item.cedula}</TableCell>
                <TableCell>
                  <EditIcon />
                  &nbsp;&nbsp;&nbsp;
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ListEstudents;

