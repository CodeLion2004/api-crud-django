import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, TextField } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';


function ModEdit(props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    nombre: props.student.nombre,
    apellido: props.student.apellido,
    edad: props.student.edad,
    correo: props.student.correo,
    carrera: props.student.carrera,
    cedula: props.student.cedula,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/django/api/v1/estudiante/${props.student.id}/`,
        form
      );
      console.log(response.data);
      handleClose(); // Cerrar el modal de edición
      props.setEstudiantes(
        props.estudiantes.map((student) =>
          student.id === props.student.id ? response.data : student
        )
      );
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const bodyModalEdit = (
    <div
      style={{
        position: "absolute",
        width: 400,
        backgroundColor: "white",
        border: "1px solid #000",
        borderRadius: 10,
        boxShadow: 24,
        padding: 15,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Editar estudiante</h1>
        <TextField
          name="nombre"
          style={{ width: "80%" }}
          label="Nombre"
          onChange={handleChange}
          required
          type="text"
          value={form.nombre}
        />
        <br />
        <TextField
          name="apellido"
          style={{ width: "80%" }}
          label="Apellido"
          onChange={handleChange}
          required
          type="text"
          value={form.apellido}
        />
        <br />
        <TextField
          name="edad"
          style={{ width: "80%" }}
          label="Edad"
          onChange={handleChange}
          required
          type="number"
          value={form.edad}
        />
        <br />
        <TextField
          name="correo"
          style={{ width: "80%" }}
          label="Correo"
          onChange={handleChange}
          required
          type="email"
          value={form.correo}
        />
        <br />
        <TextField
          name="carrera"
          style={{ width: "80%" }}
          label="Carrera"
          onChange={handleChange}
          required
          type="text"
          value={form.carrera}
        />
        <br />
        <TextField
          name="cedula"
          style={{ width: "80%" }}
          label="Cedula"
          onChange={handleChange}
          required
          type="text"
          value={form.cedula}
        />
        <br />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginTop: 10,
        }}
      >
        <Button
          style={{ marginRight: 10 }}
          variant="contained"
          color="success"
          onClick={() => handleEdit()}
        >
          Guardar
        </Button>

        <Button onClick={handleClose} variant="contained" color="error">
          Cancelar
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <EditIcon style={{ cursor: "pointer" }} onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="edit-modal-title"
        aria-describedby="edit-modal-description"
      >
        <div>{bodyModalEdit}</div>
      </Modal>
    </div>
  );
}

export default ModEdit;
