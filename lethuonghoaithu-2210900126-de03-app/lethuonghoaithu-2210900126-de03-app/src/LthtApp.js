import React, { useEffect, useState } from 'react'
import LthtListStudent from './ltht_components/LthtListStudent'
import axios from './ltht_apis/ltht-2210900126'
import LthtFormStudent from './ltht_components/LthtFormStudent';

export default function LthtApp() {
  const [lthtListStudent, setLthtListStudent] = useState([]);
  
  const lthtGetStudent = async () => {
    let lthtRes = await axios.get("lthtStudent");
    setLthtListStudent(lthtRes.data);
    console.log("App data:", lthtRes.data);
  }

  useEffect(() => {
    lthtGetStudent();
  }, []);

  const lthtHandleDelete = async (lthtStudId) => {
    await axios.delete("lthtStudent/"+lthtStudId);
    lthtGetStudent();
  }

  const lthtObjStudent = {
    "lthtStudId": "",
    "lthtStudName": "",
    "lthtStudAge": "",
    "lthtStudGender": "",
    "lthtStudEmail": "",
    "lthtStudStatus": true
  }

  const [lthtStudent, setLthtStudent] = useState(lthtObjStudent);

  const lthtHandleAdd = () => {
    lthtGetStudent();
  }

  const lthtHandleEdit = (lthtObjEditStudent) => {
    setLthtStudent(lthtObjEditStudent);
    lthtGetStudent();
  }

  return (
    <div className='container border my-3'> 
      <h1>Bai danh gia het hoc phan - Le Thuong Hoai Thu: 2210900126</h1>
      <hr/>
      <LthtListStudent renderLthtListStudent={lthtListStudent} onLthtDelete={lthtHandleDelete} onLthtEdit={lthtHandleEdit} onLthtAdd={lthtHandleAdd}/>
      <hr/>
      <LthtFormStudent renderLthtStudent={lthtStudent} onLthtEdit={lthtHandleEdit} onLthtAdd={lthtHandleAdd}/> 
      <hr/>
    </div>
  )
}
