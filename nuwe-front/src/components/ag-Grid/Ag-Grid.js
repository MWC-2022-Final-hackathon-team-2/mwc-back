import React, { useState, useEffect } from 'react';
import './Ag-Grid.css';
import MaterialTable from "material-table";
import axios from 'axios';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const columns= [
  { title: 'Company', field: 'company' },
  { title: 'Website', field: 'website' },
  { title: 'Total Flights', field: 'totalFlights' },
  { title: 'Total Seats', field: 'totalSeats', type: 'numeric'}
];
const baseUrl="http://localhost:2743/api/v1/company";


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));

function AgGrid() {
  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [companySeleccionado, setCompanySeleccionado]=useState({
    company: "",
    _id: "",
    website: "",
    totalFlights: "",
    totalSeats: ""
  })

  const handleChange=e=>{
    const {name, value}=e.target;
    setCompanySeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl)
    .then(response=>{
     setData(response.data.datos);
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPost=async()=>{
      console.log('a');
    await axios.post(baseUrl, companySeleccionado)
    .then(response=>{
      setData(data.datos.concat(response.data.datos));
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPut=async()=>{
     
    await axios.patch(baseUrl+"/"+companySeleccionado._id, companySeleccionado)
    .then(response=>{
      var dataNueva= data;
      dataNueva.map(company=>{
        if (company._id === companySeleccionado._id) {
          company.company = companySeleccionado.company;
          company.website = companySeleccionado.website;
          company.totalFlights = companySeleccionado.totalFlights;
          company.totalSeats = companySeleccionado.totalSeats;
        }
      });
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionDelete=async()=>{
    await axios.delete(baseUrl + "/" + companySeleccionado._id)
    .then(response=>{
      setData(data.filter(company => company._id !== companySeleccionado._id));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const seleccionarCompany = (company, caso) => {
    setCompanySeleccionado(company);
    (caso==="Editar")?abrirCerrarModalEditar()
    :
    abrirCerrarModalEliminar()
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  useEffect(()=>{
    peticionGet();
  }, [])

  const bodyInsertar=(
    <div className={styles.modal}>
      < h3 > Add a new Company </h3>
      <TextField className={styles.inputMaterial} label="Company" name="company" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="País" name="pais" onChange={handleChange}/>          
<br />
<TextField className={styles.inputMaterial} label="Ventas" name="ventas" onChange={handleChange}/>
      <br />
<TextField className={styles.inputMaterial} label="Género" name="genero" onChange={handleChange}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Edit Company</h3>
      <TextField className={styles.inputMaterial} label="Company" name="company" onChange={handleChange} value={companySeleccionado&&companySeleccionado.company}/>
      <TextField className={styles.inputMaterial} label="Company" name="company" onChange={handleChange} value={companySeleccionado&&companySeleccionado.company}/>
      <br />
      <TextField className={styles.inputMaterial} label="País" name="pais" onChange={handleChange} value={companySeleccionado&&companySeleccionado.website}/>          
<br />
<TextField className={styles.inputMaterial} label="Ventas" name="ventas" onChange={handleChange} value={companySeleccionado&&companySeleccionado.totalFlights}/>
      <br />
<TextField className={styles.inputMaterial} label="Género" name="genero" onChange={handleChange} value={companySeleccionado&&companySeleccionado.totalSeats}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEliminar=(
    <div className={styles.modal}>
      <p>Are you sure you want to Delete the Company <b>{companySeleccionado && companySeleccionado.company}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )

  return (
    <div className="App">
     <MaterialTable
          columns={columns}
          data={data}
          title="Flight Companys"  
          actions={[
            {
              icon: 'edit',
              tooltip: 'Editar Artista',
              onClick: (event, rowData) => seleccionarCompany(rowData, "Editar")
            },
            {
              icon: 'delete',
              tooltip: 'Eliminar Artista',
              onClick: (event, rowData) => seleccionarCompany(rowData, "Eliminar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header:{
              actions: "Acciones"
            }
          }}
        />


        <Modal
        open={modalInsertar}
        onClose={abrirCerrarModalInsertar}>
          {bodyInsertar}
        </Modal>

        
        <Modal
        open={modalEditar}
        onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>

        <Modal
        open={modalEliminar}
        onClose={abrirCerrarModalEliminar}>
          {bodyEliminar}
        </Modal>
    </div>
  );
}

export default AgGrid;

