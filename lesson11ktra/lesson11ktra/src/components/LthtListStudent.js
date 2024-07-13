import React from 'react'
import axios from '../api/LthtApi';

export default function LthtListStudent({ renderLthtListStudent, onLthtDelete , onLthtEdit }) {
    console.log("LthtListStudent:", renderLthtListStudent);
    const lthtHandleEdit = (student) => {
        onLthtEdit(student);
    };

    if (!Array.isArray(renderLthtListStudent)) {
        return <div>No data available</div>;
    }
    
    const lthtHandleDelete = async (param) => {
        if (window.confirm("Ban co muon xoa khong?")) {
                const lthtRes = await axios.delete("SINHVIEN/" + param.LthtMaSV);
                console.log("SINHVIEN/" + param.LthtMaSV);
                onLthtDelete();
        }
    }

    let lthtElementStudent = renderLthtListStudent.map((SINHVIEN, index) => {
        return (
            <>
                <tr key={index}>
                    <td>{SINHVIEN.LthtMaSV}</td>
                    <td>{SINHVIEN.LthtHoSV}</td>
                    <td>{SINHVIEN.LthtTenSV}</td>
                    <td>{SINHVIEN.LthtPhai}</td>
                    <td>{SINHVIEN.LthtNgaySinh}</td>
                    <td>{SINHVIEN.LthtNoiSinh}</td>
                    <td>{SINHVIEN.LthtMaKH}</td>
                    <td>{SINHVIEN.LthtHocBong}</td>
                    <td>{SINHVIEN.LthtDiemTrungBinh}</td>
                    <td>
                        <button className='btn btn-success' onClick={() => lthtHandleEdit(SINHVIEN)}>Edit</button>
                        <button className='btn btn-danger' onClick={()=>lthtHandleDelete(SINHVIEN)}>Remove</button>
                    </td>
                </tr>
            </>
        )
    })

    return (
        <div className='row'>
            <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <th>MaSV</th>
                        <th>HoSV</th>
                        <th>TenSV</th>
                        <th>LthtPhai</th>
                        <th>NgaySinh</th>
                        <th>NoiSinh</th>
                        <th>MaKH</th>
                        <th>HocBong</th>
                        <th>DiemTrungBinh</th>
                        
                    </thead>
                    <tbody>
                        {lthtElementStudent}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
