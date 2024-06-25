import React, { useState } from "react";
import Navbar from "./Navbar";

const AddCourse = () => {
  const [inputData, setInputData] = useState({});
  const [result, setResult] = useState("");
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputData((values) => ({ ...values, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputData);
    fetch("http://localhost:9090/api/v1/courses", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(inputData),
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
        setResult(response);
      });
  };

  return (
    <>
      <Navbar />
      <div className="form-box mt-2">
        <form className="form" onSubmit={onSubmit}>
          <div
            className="response"
            style={{ textAlign: "center", color: "green" }}
          >
            {result}
          </div>
          <div className="row mt-2 ">
            <div className="col-6">
              <label htmlFor="" className="form-label">
                Course Name
              </label>
              <input
                type="text"
                name="courseName"
                id="courseNmae"
                className="form-control form-control-sm"
                onChange={onChangeHandler}
              />
            </div>
            <div className=" col-6">
              <label htmlFor="" className="form-label">
                Course Category
              </label>
              <input
                type="text"
                name="courseCategory"
                id="courseCategory"
                className="form-control form-control-sm"
                onChange={onChangeHandler}
              />
            </div>
            </div>
            <div className="row mt-2">
            <div className=" col-6">
              <label htmlFor="" className="form-label">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="form-control form-control-sm"
                onChange={onChangeHandler}
              />
            </div>
          
            <div className=" col-6">
              <label htmlFor="" className="form-label">
                Faculty Name
              </label>
              <input
                type="text"
                name="facultyName"
                id="facultyName"
                className="form-control form-control-sm"
                onChange={onChangeHandler}
              />
            </div>
            </div>
          <div className="row mt-2">
            <div className=" col-6">
              <label htmlFor="" className="form-label">
                Start Date
              </label>
              <input
                type="datetime-local"
                name="startDate"
                id="startDate"
                className="form-control form-control-sm"
                onChange={onChangeHandler}
              />
            </div>
            <div className=" col-6">
              <label htmlFor="" className="form-label">
                Fee
              </label>
              <input
                type="text"
                name="fee"
                id="fee"
                className="form-control form-control-sm"
                onChange={onChangeHandler}
              />
            </div>
            </div>
            <div className="row mt-2">
            <div className=" col-6">
              <label htmlFor="" className="form-label">
                Admin Name
              </label>
              <input
                type="text"
                name="adminName"
                id="adminName"
                className="form-control form-control-sm"
                onChange={onChangeHandler}
              />
            </div>
            
            <div className=" col-6">
              <label htmlFor="" className="form-label">
                Admin Contact
              </label>
              <input
                type="text"
                name="adminContact"
                id="adminContact"
                className="form-control form-control-sm"
                onChange={onChangeHandler}
              />
            </div>
            </div>
          <div className="row mt-2">
            <div className=" col-6">
              <label htmlFor="" className="form-label">
              Training Modes
              </label>
              <input
                type="text"
                name="trainingMode"
                id="trainingMode"
                className="form-control form-control-sm"
                onChange={onChangeHandler}
              />
            </div>
          
            <div className=" col-6">
              <label htmlFor="" className="form-label">
                Course Status
              </label>
              <input
                type="text"
                name="courseStatus"
                id="courseStatus"
                className="form-control form-control-sm"
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div
            className="button"
            style={{ display: "flex", justifyContent: "center" ,marginTop:"20px"}}
          >
            <button type="submit" className="btn btn-success m-2">
              Add
            </button>
            <button type="reset" className="btn btn-danger m-2">
              Clear
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddCourse;
