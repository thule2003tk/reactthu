import axios from '../api/thuApi'
import React, { useEffect, useState } from 'react'

export default function ThuFormAddOrEdit({onThuClose, onThuSubmitForm, renderUsers}) {

    console.log(renderUsers);
    const [thuId, setThuId] = useState(0);
    const [thuUserName, setThuUserName] = useState("");
    const [thuPassword, setThuPassword] = useState("");
    const [thuEmail, setThuEmail] = useState("");
    const [thuPhone, setThuPhone] = useState("");

    useEffect(()=>{
        setThuId(renderUsers.id)
        setThuUserName(renderUsers.UserName)
        setThuPassword(renderUsers.Password)
        setThuEmail(renderUsers.Email)
        setThuPhone(renderUsers.Phone)
    },[renderUsers])


    const thuHandleClose = ()=>{
        onThuClose(false);
    }

    const thuHandleSubmit= async (event)=>{
        event.preventDefault();
        console.log(thuId,thuUserName,thuPassword,thuEmail,thuPhone);
        // post -> api
        let thuObjUser = {
            UserName: thuUserName,
            Password: thuPassword,
            Email: thuEmail,
            Phone: thuPhone,
            id: thuId
        }
        const thuRes = await axios.post("thuUsers",thuObjUser);

        onThuSubmitForm(false)

    }
  return (
    <div className=''>
      <form>
        <div className="input-group mb-3">
            <span className="input-group-text" id="id">Id</span>
            <input type="text" class="form-control" 
                name='id' value={thuId} onChange={(ev)=>setThuId(ev.target.value)}
                placeholder="id" aria-label="id" aria-describedby="id"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="UserName">UserName</span>
            <input type="text" class="form-control" 
                name='UserName' value={thuUserName} onChange={(ev)=>setThuUserName(ev.target.value)}
                placeholder="UserName" aria-label="UserName" aria-describedby="UserName"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Password">Password</span>
            <input type="password" class="form-control" 
                name='Password' value={thuPassword} onChange={(ev)=>setThuPassword(ev.target.value)}
                placeholder="Password" aria-label="Password" aria-describedby="Password"/>
        </div>
        <div className="input-group mb-3">
            <span className="input-group-text" id="Email">Email</span>
            <input type="email" class="form-control" 
                name='Email' value={thuEmail} onChange={(ev)=>setThuEmail(ev.target.value)}
                placeholder="Email" aria-label="Email" aria-describedby="Email"/>
        </div>
        
        <div className="input-group mb-3">
            <span className="input-group-text" id="Phone">Phone</span>
            <input type="number" class="form-control" 
                name='Phone' value={thuPhone} onChange={(ev)=>setThuPhone(ev.target.value)}
                placeholder="Phone" aria-label="Phone" aria-describedby="Phone"/>
        </div>
        <button className='btn btn-primary' name='btnThuSave' onClick={(ev)=>thuHandleSubmit(ev)}>Ghi lại</button>
        <button className='btn btn-danger' onClick={thuHandleClose}>Đóng</button>
      </form>
    </div>
  )
}
