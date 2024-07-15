import React, { useEffect, useState } from 'react'
import LthtListTableName from './ltht_components/LthtListTableName'
import axios from './ltht_apis/ltht-2210900126'
import LthtFormTableName from './ltht_components/LthtFormTableName';

export default function LthtApp() {
//Doc du lieu tu API
  const [lthtListTableName, setLthtListTableName] = useState([]);
  const lthtGetTableName = async () => {
    let lthtRes = await axios.get("lthtTableName");
    setLthtListTableName(lthtRes.data);
    console.log("App data:", lthtRes.data);
    setLthtListTableName(lthtRes.data);
  }

  useEffect(() => {
    lthtGetTableName();
  }, []);


  //Ham Xoa
  const lthtHandleDelete = async (lthtId) => {
    let lthtRes = await axios.delete("lthtTableName/"+lthtId);
    lthtGetTableName();
  }

  const lthtObjTableName = {
    "lthtId": "",
    "lthtTbName": "",
    "lthtTbEmail": "",
    "lthtTbPhone": "",
    "lthtTbStatus": true
  }

  const [lthtTableName, setLthtTableName] = useState(lthtObjTableName);

  const lthtHandleAdd = ()=>
  {
    lthtGetTableName();
  }


  const lthtHandleEdit = (lthtObjEditTableName) => {
    setLthtTableName(lthtObjEditTableName);
    lthtGetTableName();
  }

  return (
    <div className='container border my-3'> 
      <h1>Bai danh gia het hoc phan - Le Thuong Hoai Thu: 2210900126</h1>
      <hr/>
      <LthtListTableName renderLthtListTableName = {lthtListTableName} onLthtDelete={lthtHandleDelete} onLthtEdit={lthtHandleEdit} onLthtAdd={lthtHandleAdd}/>
      <hr/>
      <LthtFormTableName renderLthtTableName = {lthtTableName} onLthtEdit={lthtHandleEdit} onLthtAdd={lthtHandleAdd}/> 
      <hr/>
    </div>
  )
}
