import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateuser } from '../Redux/Action';

function Product() {
  const products = useSelector(state => state.products)
  console.log(products);
  const user=useSelector(state=>state.user)
  const dispatch=useDispatch()
  
  return (
    <section style={{ paddingTop: "50px", paddingBottom: "50px" }} className="py-20 bg-light overflow-hidden">
      <div className="container">
        <h2 className="mb-16 mb-md-24">Discover our products</h2>
        <div className="row mb-24">
          <div style={{ display: "flex", justifyContent: "center", gap: "100px", alignItems: "center", flexWrap: "wrap" }} >
            {products.map(product =>
              <div className="p-6 bg-white">
                <span className="badge bg-transparent border border-2 border-danger rounded-pill fw-bold text-danger">
                  -15%
                </span>

                <img
                  className="mb-5 mx-auto w-100 img-fluid"
                  style={{ height: 224, objectFit: "contain" }}
                  src={product.Image}
                  alt=""
                />
                <h5 className="mb-2">{product.title}</h5>
                <p className="h6 text-info">
                  <span>{product.price} TND</span>

                </p>


                <svg 
                onClick={()=>dispatch(updateuser({cart:user.cart.find(el=>el.product._id===product._id)?user.cart.map(el=>el.product._id===product._id?{...el,quantity:el.quantity+1}:el):[...user.cart,{product,quantity:1}]}))}
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x={5} width={2} height={12} fill="#161616" />
                  <rect
                    x={12}
                    y={5}
                    width={2}
                    height={12}
                    transform="rotate(90 12 5)"
                    fill="#161616"
                  />
                </svg>

              </div>
            )}

          </div>
        </div>
        <div className="text-center">
          <a className="btn btn-primary" href="#">
            Show More
          </a>
        </div>
      </div>
    </section>

  )
}

export default Product