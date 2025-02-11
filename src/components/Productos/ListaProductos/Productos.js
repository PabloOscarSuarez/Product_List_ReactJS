import React from "react";
import Producto from "../Producto";

export function ListaProductos({ productos }) {
  return (
    <div>
      <h2 className="text-center my-5"> Lista de Productos</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <ul>
            {productos.map((producto, id) => (
              <Producto key={id} info={producto} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
