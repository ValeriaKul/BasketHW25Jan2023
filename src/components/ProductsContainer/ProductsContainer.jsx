import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import container from "./style.module.css";

export default function ProductsContainer({ basket, addRemoveProduct}) {
  return (
    <>
      <ul className={container.container}>
        {basket.map((product) => (
          <ItemCard product={product} key={product.id} addRemoveProduct={addRemoveProduct} />
        ))}
      </ul>
    </>
  );
}
