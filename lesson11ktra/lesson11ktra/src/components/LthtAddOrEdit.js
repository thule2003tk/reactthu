import React, { useEffect, useState } from 'react';
import axios from '../api/LthtApi';

export default function LthtAddOrEdit({ onLthtClose, onLthtSubmitForm, renderStudent }) {
    console.log(renderStudent);
    const [lthtMaSV, setLthtMaSV] = useState('');
    const [lthtHoSV, setLthtHoSV] = useState('');
    const [lthtTenSV, setLthtTenSV] = useState('');
    const [lthtPhai, setLthtPhai] = useState('');
    const [lthtNgaySinh, setLthtNgaySinh] = useState('');
    const [lthtNoiSinh, setLthtNoiSinh] = useState('');
    const [lthtMaKH, setLthtMaKH] = useState('');
    const [lthtHocBong, setLthtHocBong] = useState('');
    const [lthtDiemTrungBinh, setLthtDiemTrungBinh] = useState('');

    useEffect(() => {
        if (renderStudent) {
            setLthtMaSV(renderStudent.MaSV || '');
            setLthtHoSV(renderStudent.HoSV || '');
            setLthtTenSV(renderStudent.TenSV || '');
            setLthtPhai(renderStudent.Phai || '');
            setLthtNgaySinh(renderStudent.NgaySinh || '');
            setLthtNoiSinh(renderStudent.NoiSinh || '');
            setLthtMaKH(renderStudent.MaKH || '');
            setLthtHocBong(renderStudent.HocBong || '');
            setLthtDiemTrungBinh(renderStudent.DiemTrungBinh || '');
        }
    }, [renderStudent]);

    const lthtHandleClose = () => {
        onLthtClose(false);
    }

    const lthtHandleSubmit = async (event) => {
        event.preventDefault();
        const lthtObjectStudent = {
            LthtMaSV: lthtMaSV,
            LthtHoSV: lthtHoSV,
            LthtTenSV: lthtTenSV,
            LthtPhai: lthtPhai,
            LthtNgaySinh: lthtNgaySinh,
            LthtNoiSinh: lthtNoiSinh,
            LthtMaKH: lthtMaKH,
            LthtHocBong: lthtHocBong,
            LthtDiemTrungBinh: lthtDiemTrungBinh
        };

        // Gọi hàm onLthtSubmitForm từ props để thông báo submit form thành công
        onLthtSubmitForm(lthtObjectStudent);
    };

    return (
        <div className='border'>
            <div className="input-group mb-3">
                <span className="input-group-text" id="MaSV">MaSV</span>
                <input type="text" className="form-control"
                    name='MaSV' value={lthtMaSV} onChange={(ev) => setLthtMaSV(ev.target.value)}
                    placeholder="MaSV" aria-label="MaSV" aria-describedby="MaSV" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="HoSV">HoSV</span>
                <input type="text" className="form-control"
                    name='HoSV' value={lthtHoSV} onChange={(ev) => setLthtHoSV(ev.target.value)}
                    placeholder="HoSV" aria-label="HoSV" aria-describedby="HoSV" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="TenSV">TenSV</span>
                <input type="text" className="form-control"
                    name='TenSV' value={lthtTenSV} onChange={(ev) => setLthtTenSV(ev.target.value)}
                    placeholder="TenSV" aria-label="TenSV" aria-describedby="TenSV" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="Phai">Phai</span>
                <input type="text" className="form-control"
                    name='Phai' value={lthtPhai} onChange={(ev) => setLthtPhai(ev.target.value)}
                    placeholder="Phai" aria-label="Phai" aria-describedby="Phai" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="NoiSinh">NoiSinh</span>
                <input type="text" className="form-control"
                    name='NoiSinh' value={lthtNoiSinh} onChange={(ev) => setLthtNoiSinh(ev.target.value)}
                    placeholder="NoiSinh" aria-label="NoiSinh" aria-describedby="NoiSinh" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="MaKH">MaKH</span>
                <input type="text" className="form-control"
                    name='MaKH' value={lthtMaKH} onChange={(ev) => setLthtMaKH(ev.target.value)}
                    placeholder="MaKH" aria-label="MaKH" aria-describedby="MaKH" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="HocBong">HocBong</span>
                <input type="text" className="form-control"
                    name='HocBong' value={lthtHocBong} onChange={(ev) => setLthtHocBong(ev.target.value)}
                    placeholder="HocBong" aria-label="HocBong" aria-describedby="HocBong" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="DiemTrungBinh">DiemTrungBinh</span>
                <input type="text" className="form-control"
                    name='DiemTrungBinh' value={lthtDiemTrungBinh} onChange={(ev) => setLthtDiemTrungBinh(ev.target.value)}
                    placeholder="DiemTrungBinh" aria-label="DiemTrungBinh" aria-describedby="DiemTrungBinh" />
            </div>
            
            <button className='btn btn-primary' name='btnLthtSave' onClick={(ev) => lthtHandleSubmit(ev)}>Ghi lại</button>
            <button className='btn btn-danger' onClick={lthtHandleClose}>Đóng</button>
        </div>
    );
}
