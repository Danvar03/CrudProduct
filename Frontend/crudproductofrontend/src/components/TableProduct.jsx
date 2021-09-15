import React, {useState, useEffect} from "react";

const Table = () => {

    const HOST_API = 'http://localhost:8080/api'
    const[data, setData] = useState([]);

    useEffect(() => {
        async function getData() {
            let prouctData = await fetch(HOST_API + "/guardarProducto");
            let json = await ProductData.json();
            console.log(json);
            setData([...data,json]);
        }
    
        getData()
      }, [])
    

   return (
      <div>
         <h3>Tabla de Productos</h3>
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
                  data.map((prod) => (
                    <tr key={prod.id}>
                        <td>{prod.name}</td>
                        <td>{prod.code}</td>                        
                        <td>{prod.amount}</td>
                        <td>{prod.stock}</td>                    
                        <td>
                            <button classname="button muted-button">Editar</button>
                            <button classname="button muted-button">Eliminar</button>
                        </td>
                    </tr>
                  ))
               ) : (
                  <tr>
                     <td colSpan="4">La tabla no tiene productos ingresadas</td>
                  </tr>
               )}
            </tbody>
         </table>
      </div>
   );
};


