import React from 'react'

export default function Basket({checkDiscount, setPromoCode, checkPromoCode, count, price, priceWithDiscount, discount}) {
  return (
    <>
        <div className="basket">
          {!checkDiscount && (
            <div className="promoContainer">
              <input
                className="promoCode"
                placeholder=" Promo code"
                type="text"
                onChange={(e) => setPromoCode(e.target.value)}
              ></input>
              <button onClick={checkPromoCode} className="btn_apply">
                Apply
              </button>
            </div>
          )}
          <div className="total">
            <div>
              <p>Products </p>
              <p>Price </p>
              <p>Price with discount </p>
              <p>Discount </p>
            </div>
            <div>
              <p>{count}</p>
              <p>{price} $</p>
              <p className='priceDiscount'>{priceWithDiscount} $</p>
              <p>{Math.round((1 - discount) * 100)} %</p>
            </div>
          </div>
          <button className="btn_buy">Buy</button>
        </div>
    </>
  )
}
