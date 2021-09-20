import React, { useState, Fragment } from "react";
import "./Styles.css";

import { useForm } from "react-hook-form";

const HOST_API = "http://localhost:8080/api";

const AddProduct = (props) => {
  const [product, setProduct] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data, e) => {
    e.preventDefault();
    setProduct((producto) => [...product, data]);
    console.log(data);
    e.target.reset();
  };


  return (
    <Fragment>
      <h1> PRODUCTOS </h1>
      <h4> Llene la siguiente información para agregar un producto: </h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          {...register("name", {
            required: { value: true, message: "Nombre requerido" },
          })}
        />
        <div>{errors?.name?.message}</div>
        <label>Código</label>
        <input
          type="text"
          name="code"
          {...register("code", {
            required: { value: true, message: "Valor requerido" },
          })}
        />
        <div>{errors?.username?.message}</div>
        <label>Precio</label>
        <input
          type="text"
          name="price"
          {...register("price", {
            required: { value: true, message: "Valor requerido" },
          })}
        />
        <div>{errors?.username?.message}</div>
        <label>Cantidad</label>
        <input
          type="number"
          name="amount"
          {...register("amount", {
            required: { value: true, message: "Valor requerido" },
          })}
        />
        <div>{errors?.username?.message}</div>

        <button type="submit">Agregar Producto</button>
      </form>
    </Fragment>
  );
};

export default AddProduct;
