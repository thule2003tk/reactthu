import { useState, useEffect } from 'react';
import React from 'react';
import axios from './api/LthtApi';
import LthtListStudent from './components/LthtListStudent';
import LthtAddOrEdit from './components/LthtAddOrEdit';

const LthtApp = () => {
  const [lthtListStudent, setLthtListStudent] = useState([]);
  const [lthtStudentToEdit, setLthtStudentToEdit] = useState(null);
  const lthtHandleEdit = (student) => {
    setLthtStudentToEdit(student);
    setLthtAddOrEdit(true); // Open the form for editing
  };
  // doc du lieu tu api
  const lthtGetAllStudent = async () => {
    try {
      const lthtResponse = await axios.get("LthtSinhVien");
      console.log("API Data:", lthtResponse.data);
      setLthtListStudent(lthtResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    lthtGetAllStudent();
    console.log("Day la State Data:", lthtListStudent);
  }, ); // Empty dependency array to run the effect only once

  const [lthtAddOrEdit, setLthtAddOrEdit] = useState(false);
  const lthtInitStudent = {
    LthtHoSV: "Le",
    LthtTenSV: "Thu",
    LthtPhai: true,
    LthtNgaySinh: 482003,
    LthtNoiSinh: "Ha Nam",
    LthtMaKH: "CNT",
    LthtHocBong:"000",
    LthtDiemTrungBinh: "10",
    LthtMaSV: "2210900126"
  }

  const [lthtStudent, setLthtStudent] = useState(lthtInitStudent);
  //Ham xu ly them moi
  const lthtHandleAddNew = () => {
    setLthtAddOrEdit(true);
  }

  const lthtHandleClose = (param) => {
    setLthtAddOrEdit(param);
  }
  const lthtHandleSubmit = async (param) => {
    console.log("Submitted data:", param);
  
    try {
      await axios.post("LthtSinhVien", param);
      await lthtGetAllStudent();
      setLthtAddOrEdit(false); // Close the form after submission
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }
  
  const LthtHandleDelete = () => {
    lthtGetAllStudent();
  };
  let lthtElementForm = lthtAddOrEdit === true ? (
    <LthtAddOrEdit
      renderStudent={lthtStudent}
      onLthtClose={lthtHandleClose}
      onLthtSubmitForm={lthtHandleSubmit}
    />
  ) : (
    ""
  );
  
  return (
    <div className='container border my-3'>
      <h1>Làm việc với API</h1>
      <hr />
      <LthtListStudent renderLthtListStudent={lthtListStudent} onLthtDelete={LthtHandleDelete} onLthtEdit={lthtHandleEdit} />
      <button className='btn btn-primary' onClick={lthtHandleAddNew}>Thêm mới</button>
      <hr />
      {lthtElementForm}
    </div>
  )
}

export default LthtApp;
