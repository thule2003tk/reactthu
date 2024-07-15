import axios from '../ltht_apis/ltht-2210900126';
import React, { useEffect, useState } from 'react';

export default function LthtFormTableName({ renderLthtTableName = {}, onLthtEdit, onLthtAdd }) {
    const [lthtId, setLthtId] = useState(renderLthtTableName.lthtId || '');
    const [lthtTbName, setLthtTbName] = useState(renderLthtTableName.lthtTbName || '');
    const [lthtTbEmail, setLthtTbEmail] = useState(renderLthtTableName.lthtTbEmail || '');
    const [lthtTbPhone, setLthtTbPhone] = useState(renderLthtTableName.lthtTbPhone || '');
    const [lthtTbStatus, setLthtTbStatus] = useState(renderLthtTableName.lthtTbStatus || true);

    const [isAdding, setIsAdding] = useState(!renderLthtTableName.lthtId); // true nếu thêm mới, false nếu chỉnh sửa

    useEffect(() => {
        if (renderLthtTableName) {
            setLthtId(renderLthtTableName.lthtId || '');
            setLthtTbName(renderLthtTableName.lthtTbName || '');
            setLthtTbEmail(renderLthtTableName.lthtTbEmail || '');
            setLthtTbPhone(renderLthtTableName.lthtTbPhone || '');
            setLthtTbStatus(renderLthtTableName.lthtTbStatus || true);
        }
    }, [renderLthtTableName]);

    const lthtHandleSubmit = async (lthtEvent) => {
        lthtEvent.preventDefault();

        const lthtObjTableName = {
            lthtTbName,
            lthtTbEmail,
            lthtTbPhone,
            lthtTbStatus,
            lthtId,
        };

        console.log(lthtObjTableName);

        if (isAdding) {
            await axios.post("lthtTableName", lthtObjTableName);
            onLthtAdd(lthtObjTableName);
        } else {
            await axios.put(`lthtTableName/${lthtId}`, lthtObjTableName);
            onLthtEdit(lthtObjTableName);
        }
    };

    const handleAddButton = () => {
        setLthtId('');
        setLthtTbName('');
        setLthtTbEmail('');
        setLthtTbPhone('');
        setLthtTbStatus(true);
        setIsAdding(true);
    };

    return (
        <div>
            <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleAddButton}>
                Ltht Thêm mới
            </button>

            <h2>{isAdding ? 'Form xử lý dữ liệu Thêm Mới' : 'Form xử lý dữ liệu Chỉnh Sửa'}</h2>

            <form onSubmit={lthtHandleSubmit}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lthtId">lthtId</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="lthtId"
                        value={lthtId}
                        onChange={(e) => setLthtId(e.target.value)}
                        aria-label="lthtId"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="lthtTbName">lthtTbName</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="lthtTbName"
                        value={lthtTbName}
                        onChange={(e) => setLthtTbName(e.target.value)}
                        aria-label="lthtTbName"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="lthtTbEmail">lthtTbEmail</span>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="lthtTbEmail"
                        value={lthtTbEmail}
                        onChange={(e) => setLthtTbEmail(e.target.value)}
                        aria-label="lthtTbEmail"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="lthtTbPhone">lthtTbPhone</span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="lthtTbPhone"
                        value={lthtTbPhone}
                        onChange={(e) => setLthtTbPhone(e.target.value)}
                        aria-label="lthtTbPhone"
                    />
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="lthtStatus">lthtStatus</span>
                    <select
                        id='lthtTbStatus'
                        className='form-control'
                        value={lthtTbStatus}
                        onChange={(e) => setLthtTbStatus(e.target.value === 'true')}
                    >
                        <option value={true}>Active</option>
                        <option value={false}>Non-Active</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary my-3"onClick={handleAddButton}>
                    Ltht Lưu
                </button>
            </form>
        </div>
    );
}
