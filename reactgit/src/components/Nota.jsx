import React from "react";
import "../css/style.css";

export function Nota({ notaprops, funcionEnviada }) {
    return (
        <li className="list-group-item">
            <div>
                <button onClick={() => funcionEnviada(notaprops.id)} 
                className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2">X
                </button>
                <h2>{notaprops.titulo}</h2>
                <p>{notaprops.descripcion}</p>
                

            </div>
        </li>
    )
}
