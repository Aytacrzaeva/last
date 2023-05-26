import React from "react";
import { Helmet } from "react-helmet";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./Add.scss"
import { toast, Toaster } from "react-hot-toast";
import Header from "../components/Header";
export default function Add() {
  return (
    <>
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Header/>
      <div className="formik">
        <div className="form">
          <Formik
            initialValues={{
              title: "",
              price: 0,
              image: "",
              description: "",
            }}
            validationSchema={Yup.object({
              title: Yup.string().required("title is required"),
              price: Yup.number().required("price is required"),
              image: Yup.string().required("image is required"),
              description: Yup.string().required("description is required"),
            })}
            onSubmit={(values, { resetForm }) => {
              axios.post("http://localhost:8080/add", values).then((res) => {
                toast.success("Added new Card");
              });
              resetForm();
            }}
          >
            {({ values, handleChange, handleSubmit, dirty }) => (
              <form onSubmit={handleSubmit}>
                <label htmlFor="title" onSubmit={handleSubmit}>
                  title:
                </label>
                <input
                  type="text"
                  placeholder="title"
                  id="title"
                  onChange={handleChange}
                />
                <label htmlFor="price">Price:</label>
                <input
                  type="number"
                  placeholder="price"
                  id="price"
                  onChange={handleChange}
                />

                <label htmlFor="image">image:</label>
                <input
                  type="text"
                  placeholder="image"
                  id="image"
                  onChange={handleChange}
                />

                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  placeholder="description"
                  id="description"
                  onChange={handleChange}
                />
                <button type="submit" disabled={!dirty}>
                  Add
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      <Toaster />
    </>
  );
}
