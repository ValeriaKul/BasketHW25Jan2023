import React from "react";
import container from "./style.module.css";

export default function ItemCard({ product, addRemoveProduct }) {
  const { id, title, price, count, image } = product;
  return (
    <li className={container.product}>
      <div className={container.image}>
        <img src={image} alt="img"></img>
      </div>
      <div className={container.descr}>
        <p className={container.title}>{title}</p>
        <p className={container.price}>$ {price}</p>
        <div className={container.buttons}>
          <button
            name={id}
            className={container.decrease}
            data-type="decrement"
            onClick={addRemoveProduct}
          >
            {" "}
            -{" "}
          </button>
          <p className={container.count}>{count}</p>
          <button
            name={id}
            className={container.increase}
            data-type="increment"
            onClick={addRemoveProduct}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </li>
  );
}
