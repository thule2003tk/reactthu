import React from 'react'

export default function LthtListStudent({renderLthtListStudent, onLthtDelete, onLthtAdd, onLthtEdit}) {
    console.log("App List:", renderLthtListStudent);
    
    // Filter and display only active students
    const lthtElementStudent = renderLthtListStudent
        .filter(lthtItem => lthtItem.lthtStudStatus === true || lthtItem.lthtStudStatus === "true")
        .map((lthtItem, lthtIndex) => {
            return (
                <tr key={lthtIndex}>
                    <td>{lthtItem.lthtStudId}</td>
                    <td>{lthtItem.lthtStudName}</td>
                    <td>{lthtItem.lthtStudAge}</td>
                    <td>{lthtItem.lthtStudGender}</td>
                    <td>{lthtItem.lthtStudEmail}</td>
                    <td>Active</td>
                    <td>
                        <button className='btn btn-success m-2' onClick={() => lthtHandleEdit(lthtItem)}>Ltht-Edit</button>
                        <button className='btn btn-danger' onClick={() => lthtHandleDelete(lthtItem.lthtStudId)}>Ltht-Remove</button>
                    </td>
                </tr>
            );
        })

    // Delete data
    const lthtHandleDelete = async (lthtStudId) => {
        if(window.confirm("Bạn có chắc muốn xóa dữ liệu có lthtStudId = " + lthtStudId)) {
            onLthtDelete(lthtStudId);
        }
    }

    // Edit
    const lthtHandleEdit = (lthtObjStudent) => {
        onLthtEdit(lthtObjStudent);
    }

    const lthtHandleAdd = (lthtObjStudent) => {
        onLthtEdit(lthtObjStudent);
    }

    return (
        <div>
            <h2>Danh sách thông tin sinh viên</h2>
            <hr/>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>lthtStudId</th>
                        <th>lthtName</th>
                        <th>lthtAge</th>
                        <th>lthtGender</th>
                        <th>lthtEmail</th>
                        <th>lthtStatus</th>
                        <th>ltht: Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {lthtElementStudent}
                </tbody>
            </table>
        </div>
    )
}
