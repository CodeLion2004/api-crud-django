import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { Modal, Button } from '@mui/material';

function ModDelet(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      // Realizar una solicitud DELETE a la API Django
      const response = await axios.delete(
        `http://localhost:8000/django/api/v1/estudiante/${props.student.id}/`
      );

      console.log(response.data);
      handleClose(); // Cerrar el modal de eliminación

      // Actualizar la lista de estudiantes en el estado del componente después de la eliminación
      props.setEstudiantes(
        props.estudiantes.filter((student) => student.id !== props.student.id)
      );
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const bodyModalDelete = (
    <div style={modalStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p>¿Estás seguro de que deseas eliminar al estudiante <strong>{props.student.nombre}</strong> ?</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 10 }}>
        <Button
          style={{ marginRight: 10 }}
          variant="contained"
          color="primary"
          onClick={() => handleDelete()}
        >
          Confirmar
        </Button>

        <Button onClick={handleClose} variant="contained" color="error">
          Cancelar
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <DeleteIcon style={{ cursor: 'pointer' }} onClick={() => setOpen(true)} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-modal-title"
        aria-describedby="delete-modal-description"
      >
        <div>{bodyModalDelete}</div>
      </Modal>
    </div>
  );
}

const modalStyle = {
  position: 'absolute',
  width: 400,
  backgroundColor: 'white',
  border: '1px solid #000',
  borderRadius: 10,
  boxShadow: 24,
  padding: 15,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default ModDelet;
