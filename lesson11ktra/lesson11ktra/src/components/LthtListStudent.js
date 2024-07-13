import React from 'react';
import axios from '../api/LthtApi';

export default function LthtListStudent({ renderLthtListStudent, onLthtDelete, onLthtEdit }) {
    console.log("LthtListStudent:", renderLthtListStudent);

    const lthtHandleEdit = (student) => {
        onLthtEdit(student);
    };

    const lthtHandleDelete = async (student) => {
        if (window.confirm("Bạn có chắc muốn xóa không?")) {
            try {
                await axios.delete(`SINHVIEN/${student.LthtMaSV}`);
                onLthtDelete();
            } catch (error) {
                console.error("Error deleting student:", error);
            }
        }
    };

    const lthtElementStudent = renderLthtListStudent.map((student, index) => (
        <tr key={index}>
            <td>{student.LthtMaSV}</td>
            <td>{student.LthtHoSV}</td>
            <td>{student.LthtTenSV}</td>
            <td>{student.LthtPhai}</td>
            <td>{student.LthtNgaySinh}</td>
            <td>{student.LthtNoiSinh}</td>
            <td>{student.LthtMaKH}</td>
            <td>{student.LthtHocBong}</td>
            <td>{student.LthtDiemTrungBinh}</td>
            <td>
                <button className='btn btn-success' onClick={() => lthtHandleEdit(student)}>Edit</button>
                <button className='btn btn-danger' onClick={() => lthtHandleDelete(student)}>Remove</button>
            </td>
        </tr>
    ));

    return (
        <div className='row'>
            <div className='col-md-12'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th>MaSV</th>
                            <th>HoSV</th>
                            <th>TenSV</th>
                            <th>LthtPhai</th>
                            <th>NgaySinh</th>
                            <th>NoiSinh</th>
                            <th>MaKH</th>
                            <th>HocBong</th>
                            <th>DiemTrungBinh</th>
                            <th>Chức năng</th>
                        </tr>
                    </thead>
                    <tbody>
                        {lthtElementStudent}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
