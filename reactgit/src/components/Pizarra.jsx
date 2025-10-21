import React, { Fragment, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Nota } from "./Nota";
import "../css/style.css";

export function Pizarra() {

    const [ listadoNotas, setNotas] = useState([
        //{ id: 1, titulo: "Nota 1", descripcion: "Descripción de la nota 1" },
        //{ id: 2, titulo: "Nota 2", descripcion: "Descripción de la nota 2" },
        //{ id: 3, titulo: "Nota 3", descripcion: "Descripción de la nota 3" },
        //{ id: 4, titulo: "Nota 4", descripcion: "Descripción de la nota 4" },
        //{ id: 5, titulo: "Nota 5", descripcion: "Descripción de la nota 5" }
    ])  

    const inputNota = useRef();
    const inputDescripcion = useRef();

    // FUNCION 
    const agregarNota = () => {
        const nuevaNota = {
            id: uuidv4(),
            titulo: inputNota.current.value,
            descripcion: inputDescripcion.current.value
        };

        setNotas(prev => [...prev, nuevaNota]);

        inputNota.current.value = "";
        inputDescripcion.current.value = "";

    }

    const eliminarNota = (id) => {
        setNotas((prev) => prev.filter((nota) => nota.id !== id));
    };

    return (
        <Fragment>
            <div className="container-fluid p-4">
                <h1>Post It 🗒</h1>
                <hr />

                <div className="d-flex gap-3 align-items-stretch">
                        <input ref={inputNota} className="form-control w-50" placeholder="Titulo" />
                        <input ref={inputDescripcion} className="form-control w-30" placeholder="Descripción" />

                        <button onClick={agregarNota}
                            className="btn btn-dark "
                            style={{ width: "20%", height: "35px" }}>
                                AGREGAR</button>
                </div>

                <ul className="d-flex flex-wrap justify-between" >
                    {
                        listadoNotas.map(nota => (
                            <Nota key={nota.id} notaprops={nota}
                            funcionEnviada={eliminarNota}
                            >
                            </Nota>
                        ))
                    }
                </ul>
            </div> 
        </Fragment>
    )
}