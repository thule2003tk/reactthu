import React from 'react'

export default function ThuListUsers({renderThuListUsers}) {
    console.log("ThuListUsers:",renderThuListUsers);
    // hiener thi đữ liệu
    let thuElementUser = renderThuListUsers.map((thuUser,index)=>{
        return(
            <>
                <tr>
                    <td>{thuUser.id}</td>
                    <td>{thuUser.UserName}</td>
                    <td>{thuUser.Password}</td>
                    <td>{thuUser.Email}</td>
                    <td>{thuUser.Phone}</td>
                    <td>...</td>
                </tr>
            </>
        )
    })
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
