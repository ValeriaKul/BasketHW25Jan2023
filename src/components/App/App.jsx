import { useState, useEffect } from "react";
import Basket from "../Basket/Basket";
import ProductsContainer from "../ProductsContainer/ProductsContainer";
import "./App.css";

function App() {
  const basket = [
    {
      id: 1,
      title: "IPhone 14 Pro Max",
      price: 1299,
      count: 1,
      image:
        "https://img.joomcdn.net/9c19c96d4532f845f67a8e6cfd0c535490062413_original.jpeg",
    },
    {
      id: 2,
      title: "Case for IPhone 14 Pro Max",
      price: 15,
      count: 2,
      image:
        "https://img.joomcdn.net/39a903ba4925ec7bc765ba6402b815809fcf196f_original.jpeg",
    },
    {
      id: 3,
      title: "Carger for IPhone 14 Pro Max, 1m",
      price: 9,
      count: 1,
      image:
        "https://img.joomcdn.net/c796478300a69c5257bb10728b740a2ffee37418_original.jpeg",
    },
    {
      id: 4,
      title: "Wireless charger 3 in 1",
      price: 45,
      count: 1,
      image:
        "https://img.joomcdn.net/fe7949072cb621409b0105450c3dade1ec36281a_original.jpeg",
    },
    {
      id: 5,
      title: "Protective glass for IPhone 14 Pro Max",
      price: 5,
      count: 4,
      image:
        "https://img.joomcdn.net/68ef150e65932bc7bfee17ccfb243b01ad1c4104_original.jpeg",
    },
  ];

  const codes = [
    { promo: "lovereact", discount: 0.85 },
    { promo: "react", discount: 0.95 },
    { promo: "frontend", discount: 0.5 },
  ];

  const [products, setProducts] = useState(basket);
  const [price, setPrice] = useState(0);
  const [priceWithDiscount, setPriceWithDiscount] = useState(0);
  const [discount, setDiscount] = useState(1);
  const [checkDiscount, setCheckDiscount] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    countProducts();
    countTotalCost();
  }, [products]);

  function countProducts() {
    let sum = 0;
    products.forEach((el) => {
      sum += el.count;
    });
    setCount(sum);
  }

  function countTotalCost() {
    let total = 0;
    products.forEach((el) => {
      total += el.price * el.count;
    });
    setPriceWithDiscount((discount * total).toFixed(2));
    setPrice(total.toFixed(2));
  }

  function checkPromoCode() {
    let wrongCodeDetector = false;
    setCheckDiscount(false);
    codes.forEach((code) => {
      if (code.promo === promoCode) {
        wrongCodeDetector = true;
        setCheckDiscount(true);
        setPriceWithDiscount(price * code.discount);
        setDiscount(code.discount);
      }
    });
    if (!wrongCodeDetector) {
      alert("Wrong Promo Code!");
    }
  }

  function addRemoveProduct(e) {
    let newArray = [...products];
    newArray.forEach((el) => {
      if (el.id == e.target.name) {
        if (e.target.dataset.type == "increment") {
          console.log('increment');
          el.count = el.count + 1;
        } else {
          console.log('decrement');
          el.count -= 1;
        }
      }
    });
    newArray = newArray.filter((el) => el.count > 0);
    setProducts(newArray);
  }
  return (
    <div className="App">
      <div className="title">
        <h1>My basket</h1>
      </div>
      <div className="container">
          <ProductsContainer
            basket={products}
            addRemoveProduct={addRemoveProduct}
          />
          <Basket 
            checkDiscount={checkDiscount}
            setPromoCode={setPromoCode} 
            checkPromoCode={checkPromoCode}
            count= {count}
            price={price}
            priceWithDiscount={priceWithDiscount}
            discount={discount} />
        </div>
    </div>
  );
}

export default App;
