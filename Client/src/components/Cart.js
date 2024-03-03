import React from "react";
import { useSelector } from "react-redux";
import handleCart from "../redux/reducer/handleCart";
import { IncreaseQuantity } from "../redux/action";
import { useDispatch } from "react-redux";
import { delCart } from "../redux/action";
import { NavLink } from "react-router-dom";
function Cart() {
  const getdata = useSelector((state) => state.handleCart);
  // console.log(getdata);
  const dispatch = useDispatch();

  const IncreaseQty = (id) => {
    // console.log(id);
    dispatch(IncreaseQuantity(id));
  };

  const DeleteItem = (id) => {
    // console.log(product)
    dispatch(delCart(id));
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {getdata.length > 0 ? (
            <>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata &&
                    getdata.map((item) => (
                      <tr key={item.id}>
                        <td className="d-flex">
                          <img
                            src={item.image}
                            alt={item.title}
                            style={{ maxWidth: "100px" }}
                          />
                          <div className="ps-5">
                            <h5>{item.title.substring(0, 20)}...</h5>
                            <h6>Estimated Shifted Date : June 6th</h6>
                          </div>
                        </td>
                        <td>
                          <h5 className="pt-5">$ {item.price}</h5>
                        </td>
                        <td>
                          <h5 className="mt-5">
                            {" "}
                            <button className="btn btn-outline-dark ">
                              -
                            </button>{" "}
                            {item.qty}{" "}
                            <button
                              className="btn btn-outline-dark"
                              onClick={() => IncreaseQty(item.id)}
                            >
                              +
                            </button>
                          </h5>
                        </td>
                        <td className="">
                          <h5 className="pt-5">
                            $ {item.price * item.qty.toFixed(2)}{" "}
                            <button
                              className="ms-4"
                              style={{ border: "none" }}
                              onClick={() => DeleteItem(item.id)}
                            >
                              X
                            </button>
                          </h5>{" "}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
           
                  <NavLink
                    to="/checkout"
                    className="btn btn-outline-primary  w-25 mx-auto mt-5"
                  >
                    Proceed To checkout
                  </NavLink>
             
            </>
          ) : (
            <h1 className="text-center pt-5">Your Cart Is Empty</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
