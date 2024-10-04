import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateuser } from '../Redux/Action'
import axios from 'axios'
import { toast } from 'react-toastify'


function Cart({dark}) {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const handelsubmit = async () => {
    const res = await axios.post("http://localhost:5000/users/payment", { cart: user.cart })
    if (res.status === 200) {
      window.location.href = res.data.url
    }
    else {
      toast.error("Your cart is empty")

    }
  }
  return (
    <section style={{ paddingTop: "50px", paddingBottom: "50px",background:dark?"black":"",color:dark?"white":"" }} className="py-20 overflow-hidden">
      <div style={{background:dark?"black":"",color:dark?"white":"" }} className="container">
        <div style={{background:dark?"black":"",color:dark?"white":"" }} className="p-8 p-lg-20">
          <h2 className="mb-8 mb-md-20">Your cart</h2>
          <div className="row align-items-center">
            <div className="col-12 col-xl-8 mb-8 mb-xl-0">
              <div className="d-none d-lg-flex row" style={{background:dark?"black":"",color:dark?"white":"" }}>
                <div className="col-12 col-lg-6" style={{background:dark?"black":"",color:dark?"white":"" }}>
                  <h4 className="mb-6 " style={{ fontSize: 16,color:dark?"white":"" }}>
                    Description
                  </h4>
                </div>
                <div className="col-12 col-lg-2">
                  <h4 className="mb-6 " style={{ fontSize: 16 }}>
                    Price
                  </h4>
                </div>
                <div className="col-12 col-lg-2 text-center">
                  <h4 className="mb-6 " style={{ fontSize: 16 }}>
                    Quantity
                  </h4>
                </div>
                <div className="col-12 col-lg-2 text-end">
                  <h4 className="mb-6 " style={{ fontSize: 16 }}>
                    Subtotal
                  </h4>
                </div>
              </div>
              <div className="mb-12 py-6 border-top border-bottom">
                {user?.cart.map(el =>
                  <div className="row align-items-center">
                    <div className="col-12 col-md-8 col-lg-6 mb-6 mb-md-0">
                      <div className="row align-items-center">
                        <div className="col-12 col-md-4 mb-3">
                          <div
                            className="d-flex align-items-center justify-content-center bg-light"
                            style={{ width: 96, height: 128 }}
                          >
                            <img
                              className="img-fluid"
                              style={{ objectFit: "contain" }}
                              src={el.product.Image}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-8">
                          <h3 className="mb-2 lead fw-bold">{el.product.title}</h3>

                        </div>
                      </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-2">
                      <p className="mb-0 lead fw-bold text-info">{el.product.price} TND </p>

                    </div>
                    <div className="col-auto col-md-2">
                      <div className="d-inline-flex align-items-center px-4 fw-bold text-secondary border rounded-2">

                        <span
                          className="form-control px-2 py-4 text-center text-md-end border-0"
                          style={{ width: 48 }}

                        >{el.quantity}</span>

                      </div>
                    </div>



                    <div className="col-auto col-md-2 text-end">
                      <p className="lead fw-bold text-info">{el.product.price * el.quantity}</p>
                      <button onClick={() => dispatch(updateuser({ cart: user.cart.filter(product => product.product._id != el.product._id) }))} style={{ background:dark?"white":"black",color:dark?"black":"white", borderRadius: "5px" }}>
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>

                  </div>
                )}
              </div>
              <div className="d-flex flex-wrap flex-md-nowrap align-items-center mb-lg-n4">
                <span className="flex-shrink-0 me-12 mb-4 mb-lg-0 fw-bold">
                  Apply discount code:
                </span>
                <input
                  className="form-control me-6 mb-4 mb-lg-0 px-8 py-4 fw-bold border"
                  type="text"
                  placeholder="SUMMER30X"
                />
                <a className="flex-shrink-0 btn btn-sm btn-dark" href="#">
                  Apply
                </a>
              </div>
            </div>
            <div className="col-12 col-xl-4">
              <div className="p-6 p-md-12 bg-info">
                <h3 className="mb-6 text-white">Cart totals</h3>
                <div className="d-flex mb-8 align-items-center justify-content-between pb-5 border-bottom border-info-light">
                  <span className="text-light">Subtotal</span>
                  <span className="lead fw-bold text-white">{user?.cart.reduce((acc, el) => acc + Number(el.quantity) * Number(el.product.price), 0)}TND </span>

                </div>
                <h4 className="mb-2 lead fw-bold text-white">Shipping</h4>
                <div className="d-flex mb-2 justify-content-between align-items-center">
                  <span className="text-light">Next day</span>
                  <span className="lead fw-bold text-white">7 TND</span>
                </div>
                <div className="d-flex mb-10 justify-content-between align-items-center">
                  <span className="text-light">Delivery throughout the republic</span>
                  <span className="lead fw-bold text-white">-</span>
                </div>
                <div className="d-flex mb-10 justify-content-between align-items-center">
                  <span className="lead fw-bold text-white">Order total</span>
                  <span className="lead fw-bold text-white">{user?.cart.reduce((acc, el) => acc + Number(el.quantity) * Number(el.product.price), 7)}TND</span>
                </div>
                <button onClick={handelsubmit} className="btn btn-primary w-100 text-uppercase">
                  Go to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Cart