import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./Detail.scss"
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:8080/add/${id}`).then((res) => {
      setData(res.data);
    });
  });
  return (
    <div>
      <Helmet>
        <title>Detail</title>
      </Helmet>
      <Header/>
      <div className="detail">
        <div className="detail__content">

        <div className="detail__img">
          <img
            src={data.image}
            alt=""
          />
        </div>
        <div className="detail__items">
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          
        </div>

        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Detail;

