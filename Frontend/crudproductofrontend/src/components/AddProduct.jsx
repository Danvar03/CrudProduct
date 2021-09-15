import React, { Fragment } from 'react'
import { useForm } from 'react-hook-form'

const HOST_API = 'http://localhost:8080/api'


const AddProduct = (props) => {

  const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {       
       console.log(data)
      props.addProduct(data)
      
   }

    return (
        <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nombre</label>
            <input 
                type="text" 
                name="name"
                {...register('name',{required: {value: true, message: 'Nombre requerido'}})}
                />
            <div>
                {errors?.name?.message}
            </div>
            <label>Código</label>
            <input 
                type="text" 
                name="code" 
                {...register('code',{required: {value: true, message: 'Valor requerido'}})}
                />
            <div>
                {errors?.username?.message}
            </div>
            <label>Precio</label>
            <input 
                type="text" 
                name="price" 
                {...register('price',{required: {value: true, message: 'Valor requerido'}})}
                />
            <div>
                {errors?.username?.message}
            </div>
            <label>Cantidad</label>
            <input 
                type="number" 
                name="amount" 
                {...register('amount',{required: {value: true, message: 'Valor requerido'}})}
                />
            <div>
                {errors?.username?.message}
            </div>           
            
            <button type="submit">Agregar Usuario</button>
        </form>
        </Fragment>
        
      );
}
 
export default AddProduct;