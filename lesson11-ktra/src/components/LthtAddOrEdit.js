import axios from './api/LthtApi';
import React, { useEffect, useState } from 'react';

export default function LthtAddOrEdit({ onLthtClose, onLthtSubmitForm, renderSinhVien }) {

    const [LthtHosv, setLthtHosv] = useState('');
    const [LthtTensv, setLthtTensv] = useState('');
    const [LthtNgaysinh, setLthtNgaysinh] = useState('');
    const [LthtNoisinh, setLthtNoisinh] = useState('');
    const [LthtMakh, setLthtMakh] = useState('');
    const [LthtHocbong, setLthtHocbong] = useState('');
    const [LthtDiemtrungbinh, setLthtDiemtrungbinh] = useState('');
    const [LthtMasv, setLthtMasv] = useState('');

    // Thiết lập giá trị ban đầu dựa trên prop renderSinhVien
    useEffect(() => {
        if (renderSinhVien) {
            setLthtHosv(renderSinhVien.Hosv || '');
            setLthtTensv(renderSinhVien.Tensv || '');
            setLthtNgaysinh(renderSinhVien.Ngaysinh || '');
            setLthtNoisinh(renderSinhVien.Noisinh || '');
            setLthtMakh(renderSinhVien.Makh || '');
            setLthtHocbong(renderSinhVien.Hocbong || '');
            setLthtDiemtrungbinh(renderSinhVien.Diemtrungbinh || '');
            setLthtMasv(renderSinhVien.Masv || '');
        }
    }, [renderSinhVien]);

    const lthtHandleClose = () => {
        onLthtClose(false);
    };

    const lthtHandleSubmit = async (event) => {
        event.preventDefault();

        // Chuẩn bị dữ liệu để gửi lên server
        let lthtObjSinhVien = {
            Hosv: LthtHosv,
            Tensv: LthtTensv,
            Ngaysinh: LthtNgaysinh,
            Noisinh: LthtNoisinh,
            Makh: LthtMakh,
            Hocbong: LthtHocbong,
            Diemtrungbinh: LthtDiemtrungbinh,
            Masv: LthtMasv
        };

        // Gửi yêu cầu POST đến server
        try {
            const lthtRes = await axios.post("lthtUsers", lthtObjSinhVien);
            console.log('Phản hồi từ yêu cầu POST:', lthtRes.data); // Giả sử xử lý phản hồi
            onLthtSubmitForm(false);
        } catch (error) {
            console.error('Lỗi khi gửi yêu cầu POST:', error);
            // Xử lý lỗi một cách thích hợp
        }
    };

    return (
        <div className=''>
            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Hosv"> Họ sinh viên</span>
                    <input type="text" className="form-control"
                        name='Hosv' value={LthtHosv} onChange={(ev) => setLthtHosv(ev.target.value)}
                        placeholder="Họ sinh viên" aria-label="Hosv" aria-describedby="Hosv" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Tensv"> Tên sinh viên</span>
                    <input type="text" className="form-control"
                        name='Tensv' value={LthtTensv} onChange={(ev) => setLthtTensv(ev.target.value)}
                        placeholder="Tên sinh viên" aria-label="Tensv" aria-describedby="Tensv" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Ngaysinh"> Ngày sinh</span>
                    <input type="date" className="form-control"
                        name='Ngaysinh' value={LthtNgaysinh} onChange={(ev) => setLthtNgaysinh(ev.target.value)}
                        placeholder="Ngày sinh" aria-label="Ngaysinh" aria-describedby="Ngaysinh" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Noisinh"> Nơi sinh</span>
                    <input type="text" className="form-control"
                        name='Noisinh' value={LthtNoisinh} onChange={(ev) => setLthtNoisinh(ev.target.value)}
                        placeholder="Nơi sinh" aria-label="Noisinh" aria-describedby="Noisinh" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Makh"> Mã khoa</span>
                    <input type="text" className="form-control"
                        name='Makh' value={LthtMakh} onChange={(ev) => setLthtMakh(ev.target.value)}
                        placeholder="Mã khoa" aria-label="Makh" aria-describedby="Makh" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Hocbong"> Học bổng</span>
                    <input type="text" className="form-control"
                        name='Hocbong' value={LthtHocbong} onChange={(ev) => setLthtHocbong(ev.target.value)}
                        placeholder="Học bổng" aria-label="Hocbong" aria-describedby="Hocbong" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="Diemtrungbinh"> Điểm trung bình</span>
                    <input type="number" className="form-control"
                        name='Diemtrungbinh' value={LthtDiemtrungbinh} onChange={(ev) => setLthtDiemtrungbinh(ev.target.value)}
                        placeholder="Điểm trung bình" aria-label="Diemtrungbinh" aria-describedby="Diemtrungbinh" />
                </div>
                <button className='btn btn-primary' name='btnLthtSave' onClick={(ev) => lthtHandleSubmit(ev)}> Ghi lại</button>
                <button className='btn btn-danger' onClick={lthtHandleClose}> Đóng</button>
            </form>
        </div>
    );
}
