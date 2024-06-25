import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const ReportFilter = () => {
  const [courseNames, setCourseNames] = useState([]);
  const [courseCategories, setCourseCategories] = useState([]);
  const [facultyNames, setFacultyNames] = useState([]);
  const [trainingModes, setTrainingModes] = useState([]);
  const [courseStatuses, setCourseStatuses] = useState([]);

  const [dataRes, setDataRes] = useState({});
  const [courseSearchResults, setCourseSearchResults] = useState([]);

  const onChangeHandler = (event) => {
    let value = "";
    const name = event.target.name;
    if (event.target.value !== "select") {
      value = event.target.value;
    }
    setDataRes((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    fetch("http://localhost:9090/api/v1/courses/names", {
      method: "Get",
    })
      .then((data) => data.json())
      .then((data) => {
        setCourseNames(data);
        console.log(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:9090/api/v1/courses/categories", {
      method: "Get",
    })
      .then((data) => data.json())
      .then((data) => {
        setCourseCategories(data);
        console.log(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:9090/api/v1/courses/faculty-names", {
      method: "Get",
    })
      .then((data) => data.json())
      .then((data) => {
        setFacultyNames(data);
        console.log(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);
  useEffect(() => {
    fetch("http://localhost:9090/api/v1/courses/statuses", {
      method: "Get",
    })
      .then((data) => data.json())
      .then((data) => {
        setCourseStatuses(data);
        console.log(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9090/api/v1/courses/training-modes", {
      method: "Get",
    })
      .then((data) => data.json())
      .then((data) => {
        setTrainingModes(data);
        console.log(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(dataRes);
    fetch("http://localhost:9090/api/v1/courses/filter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataRes),
    })
      .then((data) => data.json())
      .then((data) => {
        setCourseSearchResults(data);
        console.log(data);
      })
      .catch((error) => {
        alert(error);
      });
  };


  const exportExcel=()=>{
   
    fetch("http://localhost:9090/api/v1/courses/excel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      responseType: "blob",
      body: JSON.stringify(dataRes),
    })
    .then((response) => response.blob())
    .then(response=>{
      var file=window.URL.createObjectURL(response);
      var a=document.createElement('a');
      a.href=file;
      a.download="test.xlsx";
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
      .catch((error) => {
        alert(error);
      });
  };
  const exportPdf=()=>{
   
    fetch("http://localhost:9090/api/v1/courses/pdf", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataRes),
    })
      .then((response) => response.blob())
      .then(response=>{
        var file=window.URL.createObjectURL(response);
        var a=document.createElement('a');
        a.href=file;
        a.download="test.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <>
    <Navbar/>
      <div className="main">
        <div className="left">
          <form onSubmit={onSubmit}>
            <label for="searchId" class="form-label">
              Course Name
            </label>
            <select
              className="form-select form-select-sm"
              name="courseName"
              value={dataRes?.courseName}
              onChange={onChangeHandler}
            >
              <option value="select">Select</option>
              {courseNames.map((res) => {
                return (
                  <option key={res} value={res}>
                    {res}
                  </option>
                );
              })}
            </select>

            <label for="searchId" class="form-label mt-3">
              Course Category
            </label>

            <select
              className="form-select form-select-sm"
              name="courseCategory"
              value={dataRes?.courseCategory}
              onChange={onChangeHandler}
            >
              <option value="select">Select</option>
              {courseCategories.map((res) => {
                return (
                  <option key={res} value={res}>
                    {res}
                  </option>
                );
              })}
            </select>

            <label for="searchId" class="form-label mt-3">
              Faculty Name
            </label>

            <select
              className="form-select form-select-sm"
              name="facultyName"
              value={dataRes?.facultyName}
              onChange={onChangeHandler}
            >
              <option value="select">Select</option>
              {facultyNames.map((res) => {
                return (
                  <option key={res} value={res}>
                    {res}
                  </option>
                );
              })}
            </select>

            <label for="searchId" class="form-label mt-3">
              training Modes
            </label>

            <select
              className="form-select form-select-sm"
              name="trainingMode"
              value={dataRes?.trainingMode}
              onChange={onChangeHandler}
            >
              <option value="select">Select</option>
              {trainingModes.map((res) => {
                return (
                  <option key={res} value={res}>
                    {res}
                  </option>
                );
              })}
            </select>

            <label for="searchId" class="form-label mt-3">
              course Statuses
            </label>

            <select
              className="form-select form-select-sm"
              name="courseStatus"
              value={dataRes?.courseStatus}
              onChange={onChangeHandler}
            >
              <option value="select">Select</option>
              {courseStatuses.map((res) => {
                return (
                  <option key={res} value={res}>
                    {res}
                  </option>
                );
              })}
            </select>

            <button className="btn btn-primary m-3 align-center">Search</button>
          </form>
        </div>
        <div className="right ">
          { courseSearchResults.length>0 &&
        <div className="export " style={{float:"right", margin:"5px",marginRight:"20px"}}>
             <button className="btn btn-warning btn-sm" style={{marginRight:"10px"}} onClick={exportPdf}>Export as PDF</button><button className="btn btn-warning btn-sm " onClick={exportExcel}>Export as Excel</button>
        </div>}
          <table className="table table-sm table-hover " >
            <thead className="table-dark">
              <tr>
                <th scope="col">Course Id</th>
                <th scope="col">Course Name</th>
                <th scope="col">Course Category</th>
                <th scope="col">Faculty Name</th>
                <th scope="col">Location</th>
                <th scope="col">Admin Contact</th>
                <th scope="col">Training Mode</th>
                <th scope="col">Start Date</th>
                <th scope="col">Course Status</th>
              </tr>
            </thead>
            <tbody>
              {courseSearchResults.map((data) => {
                return (
                  <tr>
                    <td>{data.courseId}</td>
                    <td>{data.courseName}</td>
                    <td>{data.courseCategory}</td>
                    <td>{data.facultyName}</td>
                    <td>{data.location}</td>
                    <td>{data.adminContact}</td>
                    <td>{data.trainingMode}</td>
                    <td>{data.startDate}</td>
                    <td>{data.courseStatus}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        
        </div>
      
      </div>
      
    </>
  );
};

export default ReportFilter;
