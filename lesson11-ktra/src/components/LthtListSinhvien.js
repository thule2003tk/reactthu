import React from 'react'

export default function LthtListSinhVien({renderLthtListSinhVien}) {
    console.log("LthtListSinhVien:",renderLthtListSinhVien);
    // hiển thị dữ liệu
    let lthtElementSinhVien = renderLthtListSinhVien.map((lthtSinhVien,index)=>{
        return(
            <>
                <tr>
                    <td>{lthtSinhVien.LthtHosv}</td>
                    <td>{lthtSinhVien.LthtTensv}</td>
                    <td>{lthtSinhVien.LthtNgaysinh}</td>
                    <td>{lthtSinhVien.LthtNoisinh}</td>
                    <td>{lthtSinhVien.LthtMakh}</td>
                    <td>{lthtSinhVien.LthtHocbong}</td>
                    <td>{lthtSinhVien.LthtDiemtrungbinh}</td>
                    <td>{lthtSinhVien.LthtMasv}</td>
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
                        <th>Họ sinh viên </th>
                        <th>Tên sinh viên </th>
                        <th>Ngày sinh </th>
                        <th>nơi sinh </th>
                        <th>Mã khoa </th>
                        <th>Học bổng </th>
                        <th>Điểm trung bình </th>
                        <th>Mã sinh viên</th>
                    </tr>
                </thead>
                <tbody>
                {lthtElementSinhVien}
                </tbody>

            </table>
        </div>
    </div>
  )
}
