import React from 'react'
import axios from '../api/thuApi'
export default function ThuListUsers({renderThuListUsers, onThuDelete}) {
    console.log("ThuListUsers:",renderThuListUsers);
    // hien thi dữ liệu
    let thuElementUser = renderThuListUsers.map((thuUser,index)=>{
        return(
            <>
                <tr key={index}>
                    <td>{thuUser.id}</td>
                    <td>{thuUser.UserName}</td>
                    <td>{thuUser.Password}</td>
                    <td>{thuUser.Email}</td>
                    <td>{thuUser.Phone}</td>
                    <td>
                        <button className='btn-btn-danger'onClick={()=>thuHandleDelete(thuUser)}>Delete</button>
                    </td>
                </tr>
            </>
        )
    })
    const thuHandleDelete =  async (param)=>{
        if(window.confirm('Bạn có muốn xóa thật không?')){
            const thuRes = await axios.delete("thuUsers/"+param.id);
        }
        onThuDelete();
    }
  return (
    <div className='row'>
        <div className='col-md-12'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>UserName</th>
                        <th>Password</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                {thuElementUser}
                </tbody>

            </table>
        </div>
    </div>
  )
}
