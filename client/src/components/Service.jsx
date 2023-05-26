import React, { useEffect, useState } from "react";
import "./Service.scss";
import {Link} from "react-router-dom"
import axios from "axios";
const Service = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [dummys, setDummy] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8080/add").then((res) => {
      setData(res.data);
    });
  },[searchValue==="",dummys]);
  return (
    <div className="service">
      <div className="service__top">
        <h2>OUR SERVICE</h2>
        <div id="line"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
        </p>
        <input
          type="text"
          onChange={(e) => {
            setSearchValue(e.target.value);
            setData(data.filter((item) => item.title.includes(searchValue)));
          }}
        />

        <button
          onClick={() => {
            setData([...data.sort((a, b) => b.price - a.price)]);
          }}
        >
          Sort by price
        </button>
      </div>
      <div className="service__bottom" >
      {data.map((item, index) => {
        return (
            <div className="service__bottom__item" key={index}>
              <div className="service__bottom__item__img">
                <img src={item.image} alt="" />
              </div>
              <div className="service__bottom__item__text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <button onClick={(e)=>{
                  axios.delete(`http://localhost:8080/add/${item._id}`).then((res)=>{
                    setDummy(true);
                  })
                }}>Delete</button>
                <Link to={`${item._id}`}>Go detail</Link>
              </div>
            </div>
        );
      })}
      </div>
    </div>
  );
};

export default Service;
