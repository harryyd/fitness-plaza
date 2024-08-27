import React, { useEffect, useRef, useState } from "react";
import PaymentBreadcrum from "./PaymentBreadcrum";
import { useSelector, useDispatch } from 'react-redux'
import { calculateTotalAmount, updateCartQuantity, calculateDiscountedAmount } from "../slices/cartSlices";
import { NavLink } from 'react-router-dom'

const Cart = () => {

  const coupon = ["harry10", "yadav20"];
  const inputref = useRef(null)

  const [couponflag, setCouponflag] = useState(false)

  const showdata = useSelector(state => state.cart.item);
  console.log('check', typeof showdata)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotalAmount());

  }, [dispatch])

  let totalamount = useSelector(state => state.cart.TotalAmount);


  const incrementQuantity = (id, quantity) => {
    dispatch(updateCartQuantity({ id, quantity }))
    dispatch(calculateTotalAmount());
  }

  const decrementQuantity = (id, quantity) => {
    if (quantity < 0) quantity = 0;
    dispatch(updateCartQuantity({ id, quantity }))
    dispatch(calculateTotalAmount());
  }

  const couponhandler = () => {
    if (coupon.includes(inputref.current.value) && couponflag === false) {
      totalamount = totalamount - totalamount * 0.10;
      console.log(totalamount)
      dispatch(calculateDiscountedAmount({ totalamount }))
      setCouponflag(!couponflag);
    }
    else {
      console.log("invalid coupon ")
    }


  }
  totalamount = useSelector(state => state.cart.TotalAmount);

  // const shipingPrice = (totalamount) =>{
  //   return totalamount += totalamount* 0.45 ;
  // }
  // const coupon = ["Harry" , "yadav30"] ;  

  console.log("total", totalamount)


  return (
    <>

      {showdata.length > 0 ? (
        <section className="min-h-screen h-custom ">
          <PaymentBreadcrum />
          <hr/>
          <div className="container py-1 h-full">
            <div className="flex justify-center items-center h-full">
              <div className="w-full">
                <div className="bg-white shadow-lg rounded-lg" style={{ borderRadius: '15px' }}>
                  <div className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/3 p-5">
                        <div className="flex justify-between items-center mb-5">
                          <h1 className="font-bold text-2xl">Shopping Cart</h1>
                          <h6 className="text-muted">{`${showdata.length} item`}</h6>
                        </div>
                        <hr />
                        <div className="flex justify-between items-center mb-5">
                          <h6 className="w-1/3">Products</h6>
                          <h6 className="">Quantity</h6>
                          <h6 className="w-1/5 ml-[50px] pl-[50px]">Amount</h6>
                        </div>
                        <hr />
                        <hr className="my-4" />
                        {showdata.map((item, index,) => (

                          <div key={index} className="flex justify-between items-center mb-4">
                            <div className="w-1/6">
                              <img
                                src={item.bannerImage}
                                className="img-fluid rounded-lg"
                                alt={item.name}
                              />
                            </div>
                            <div className="w-1/3">
                              <h6 className="ml-[70px]">{item.name}</h6>

                              <h6 className="mb-0 ml-[70px] mr-[50px] text-xs text-gray-500">  {item.description.length > 30
                                ? `${item.description.slice(0, 30)}...`
                                : item.description
                              }</h6>
                            </div>
                            {
                              item.quantity > 10 ? (
                                <div className="flex items-center w-1/4">
                                  <button
                                    className="btn-link text-gray-600 px-2"
                                    onClick={() => { decrementQuantity(item.id, item.quantity - 1) }}
                                  >
                                    <i className="fas fa-minus"> - </i>
                                  </button>
                                  <p>less stock</p>
                                </div>) : (
                                <div className="flex items-center w-1/4">

                                  <button
                                    className="btn-link text-gray-600 px-2"
                                    onClick={() => { decrementQuantity(item.id, item.quantity - 1) }}
                                  >
                                    <i className="fas fa-minus"> - </i>
                                  </button>
                                  <input
                                    min="0"
                                    name="quantity"
                                    value={item.quantity}
                                    type="number"
                                    className="form-control w-16 text-center"
                                  // onChange={changeHandler}
                                  />
                                  <button
                                    className="btn-link text-gray-600 px-2"
                                    onClick={() => { incrementQuantity(item.id, item.quantity + 1) }}
                                  >
                                    <i className="fas fa-plus"> + </i>
                                  </button>
                                </div>)
                            }
                            <div className="w-1/5 text-right">
                              <h6 className="mb-0">{`₹ ${item.amount} `}</h6>
                            </div>
                            <div className="w-1/12 text-right">
                              <a href="#!" className="text-gray-600">
                                <i className="fas fa-times"></i>
                              </a>
                            </div>
                          </div>
                        ))}

                        <hr className="my-4" />

                        <div className="pt-5">
                          <h6 className="mb-0">
                            <a href="#!" className="text-gray-600">
                              <i className="fas fa-long-arrow-alt-left mr-2"></i>Back to shop
                            </a>
                          </h6>
                        </div>
                      </div>
                      <div className="md:w-1/3 bg-gray-100 p-5">
                        <h3 className="font-bold mb-5 mt-2 pt-1">Summary</h3>
                        <hr className="my-4" />

                        <div className="flex justify-between mb-4">
                          <h5 className="text-uppercase">{`items ${showdata.length}`}</h5>
                          <h5>{totalamount}</h5>
                        </div>

                        <h5 className="text-uppercase mb-3">Shipping</h5>

                        <div className="mb-4 pb-2">
                          <select className="w-full px-3 py-2 border rounded">
                            <option value="1">Free-Delivery- ₹ 0 </option>
                            <option value="1">Standard-Delivery- ₹ 50 </option>
                            <option value="2">Fast-Delivery - ₹ 100</option>
                          </select>
                        </div>

                        <h5 className="text-uppercase mb-3">Give code</h5>

                        <div className="mb-5">
                          <input
                            type="text"
                            id="form3Examplea2"
                            className="form-control form-control-lg"
                            placeholder="Enter your code"
                            ref={inputref}
                          />
                          <button className="ml-[30px] self-center px-10 py-1 font-semibold rounded border 1 border-gray-400 text-black hover:bg-black hover:text-white ease-in duration-300 p-[5px]" onClick={() => couponhandler()}> Enter </button>
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between mb-5">
                          <h5 className="text-uppercase">Total price</h5>
                          <h5>{totalamount}</h5>
                        </div>

                        <NavLink to='/confirmation'
                          type="button"
                          className="w-full bg-black text-center text-white py-3 rounded-lg"
                        >
                          Checkout
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
        :
        (<div>
          your cart is empty
        </div>)}


    </>
  )
}

export default Cart