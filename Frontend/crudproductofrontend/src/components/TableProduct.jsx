import React, {useState, useEffect, useContext} from "react";
import { Store } from "../Provider";

const TableProduct = () => {

    const HOST_API = 'http://localhost:8080/api'
    const { dispatch, state } = useContext(Store);
    const[data, setData] = useState([]);
    console.log("data: ",data)
    console.log("--------------")

   return (
      <div>
         <h2>Tabla de itemuctos</h2>
         <table>
            <thead>
               <tr>
                  <th>Nombre</th>
                  <th>Codigo de barras</th>
                  <th>Cantidad</th>
                  <th>Precio</th>                  
               </tr>
            </thead>
            <tbody>
               {
                  data.length > 0 ? (
                  data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.code}</td>                        
                        <td>{item.amount}</td>
                        <td>{item.stock}</td>                    
                        <td>
                            <button classname="button muted-button">Editar</button>
                            <button classname="button muted-button">Eliminar</button>
                        </td>
                    </tr>
                  ))
               ) : (
                  <tr>
                     <td colSpan="4">La tabla no tiene itemuctos ingresadas</td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
};


export default TableProduct;