import React, { useState } from "react";
import axios from "axios";
import {
  Modal,
  Button,
  TextField,
  Alert
} from "@mui/material";

function ModInsert(props) {
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false); 
  const [form, setForm] = useState({
    nombre:'',
    apellido: '',
    edad: '',
    correo:'',
    carrera:'',
    cedula:'',
  })

  const handleChange = event =>{
    const {name, value} = event.target;
      setForm((estadoAnterior) => ({
        ...estadoAnterior, [name]: value
      }))
      console.log(form);
    }

    const Send_Data = async () => {
      if (form.apellido && form.nombre && form.carrera && form.cedula && form.edad && form.correo) {
        try {
          const response = await axios.post('http://localhost:8000/django/api/v1/estudiante/', form);
          console.log(response.data);
          handleOpen(); // Cerrar el modal
          setForm({})
          props.setEstudiantes([...props.estudiantes, response.data]);
        } catch (error) {
          console.error("Error sending data:", error);
        }
      } else {
        setShowAlert(true)
      }
      
    }

  const handleOpen = () => {
    setOpen(!open);
    setForm({})
    setShowAlert(false)
  };

  const modalStyle = {
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
  };

  const bodyModal = (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <TextField
          name="nombre"
          style={{ width: "80%" }}
          label="Nombre"
          onChange={handleChange}
          required
          type="text"
        />
        <br />
        <TextField
          name="apellido"
          style={{ width: "80%" }}
          label="Apellido"
          onChange={handleChange}
          required
          type="text"
        />
        <br />
        <TextField
          name="edad"
          style={{ width: "80%" }}
          label="Edad"
          onChange={handleChange}
          required
          type="number"
        />
        <br />
        <TextField
          name="correo"
          style={{ width: "80%" }}
          label="Correo"
          onChange={handleChange}
          required
          type="email"
        />
        <br />
        <TextField
          name="carrera"
          style={{ width: "80%" }}
          label="Carrera"
          onChange={handleChange}
          required
          type="text"
        />
        <br />
        <TextField
          name="cedula"
          style={{ width: "80%" }}
          label="Cedula"
          onChange={handleChange}
          required
          type="text"
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
          onClick={()=>Send_Data()}>
          Agregar
        </Button>

        <Button onClick={handleOpen} variant="contained" color="error">
          Cancelar
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Agregar
      </Button>
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div style={modalStyle}>
          <h2 id="parent-modal-title" align="center"> Agregar Estudiante </h2>
          {showAlert && (
            <Alert severity="warning" onClose={() => setShowAlert(false)}>
              Por favor, rellena todos los campos del formulario
            </Alert>
          )}
          {bodyModal}
        </div>
      </Modal>
    </div>
  );
}

export default ModInsert;
