import React, { useContext, useState, useEffect } from "react";
import "./MyOrders.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/frontend_assets/assets";
function MyOrders() {
  const [data, setData] = useState([]);
  const { url, auth } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      `${url}/api/order/myorders`,
      {},
      {
        withCredentials: true,
      }
    );
    console.log(response.data.data);

    setData(response.data.data);
  };

  useEffect(() => {
    if (auth) {
      fetchOrders();
    }
  }, [auth]);
  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.map((order, index) => {
          return (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + " , ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>Items: {order.items.length} </p>
              <p>
                {" "}
                <span>&#x25cf;</span> <b>{order.status}</b>
                <button onClick={fetchOrders}>Track Order</button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrders;
