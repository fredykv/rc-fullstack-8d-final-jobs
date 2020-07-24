import React from "react";
import axios from "axios";
import sweetalert from "sweetalert2";
import { Link } from "react-router-dom";

const CardOfferts = (props) => {
  const onClickDeleteHandler = async () => {
    try {
      sweetalert
        .fire({
          title: "¿Estás Seguro?",
          text: "Esta acción no se puede recuperar",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, borrar!",
        })
        .then(async (result) => {
          if (result.value) {
            await axios.delete(
              `http://localhost:3001/api/v1/offers/${props.data._id}`
            );
            sweetalert.fire({
              icon: "success",
              text: "Oferta eliminada...",
              width: 250,
              showConfirmButton: false,
              timer: 2000,
            });
            props.forzar();
          }
        });
    } catch (error) {}
  };
  const onClickUpdateHandler = async () => {
    props.update(props.data);
  };
  // console.log(props.data.postulateRef.length);
  return (
    <div className="card m-2 shadow border-0 d-flex flex-row justify-content-between align-items-center">
      <div className="card-body dataBody" style={{ width:"315px"}}>
        <h3 className="card-text tituloCartel "> {props.data.title} </h3>
        <h3 className="card-text datosCartel" style={{height:"35px"}}>{props.data.summary}</h3>
        <h3 className="card-text datosCartel">
          {props.data.workplace} - {props.data.availability}
        </h3>
        {props.sola ? (
          <></>
        ) : (<> {props.data.postulateRef.length === 0 ? ( <p className="card-text tiempoCartel">No hay postulaciones a esta oferta</p> ):(<>
        <Link to="/company"
          className="card-text tiempoCartel"
          onClick={() => props.adminPostulate(props.data._id)}
        >
        <p>Tiene {props.data.postulateRef.length} Postulaciones </p>
        </Link></>)}
            <p
            className={`card-text tiempoCartel ${
              props.data.active ? "text-success" : "text-muted"
            }`}
          >
            {props.data.active ? "Activa" : "Inactiva"}
          </p></>
        )}
        <p className="card-text tiempoCartel">{props.data.publicationdate}</p>
        {props.sola ? (
          <div></div>
        ) : (
          <div className="d-flex flex-nowrap">
            <button
              type="submit"
              onClick={onClickUpdateHandler}
              className="btn btn-primary rounded-pill mr-3"
            >
              Modificar
            </button>
            <button
              type="submit"
              onClick={onClickDeleteHandler}
              className="btn btn-primary rounded-pill"
            >
              Borrar
            </button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardOfferts;
