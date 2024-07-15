import axios from '../ltht_apis/ltht-2210900126';
import React, { useEffect, useState } from 'react'

export default function LthtFormTableName({renderLthtTableName, onLthtEdit, onLthtAdd}) {

    const [lthtId, setLthtId] = useState(renderLthtTableName.lthtId);
    const [lthtTbName, setLthtTbName] = useState(renderLthtTableName.lthtTbName);
    const [lthtTbEmail, setLthtTbEmail] = useState(renderLthtTableName.lthtTbEmail);
    const [lthtTbPhone, setLthtTbPhone] = useState(renderLthtTableName.lthtTbPhone);
    const [lthtTbStatus, setLthtTbStatus] = useState(renderLthtTableName.lthtTbStatus);

    useEffect(() => {
        setLthtId(renderLthtTableName.lthtId);
        setLthtTbName(renderLthtTableName.lthtTbName);
        setLthtTbEmail(renderLthtTableName.lthtTbEmail);
        setLthtTbPhone(renderLthtTableName.lthtTbPhone);
        setLthtTbStatus(renderLthtTableName.lthtTbStatus);
    },[renderLthtTableName])

    const [isAdding, setIsAdding] = useState(false);

    const lthtHandleSubmit = async (lthtEvent) => {
        lthtEvent.preventDefault();
    
        const lthtObjTableName = {
            "lthtTbName": lthtTbName,
            "lthtTbEmail": lthtTbEmail,
            "lthtTbPhone": lthtTbPhone,
            "lthtTbStatus": lthtTbStatus,
            "lthtId": lthtId
        }
        console.log(lthtObjTableName);
    
        if (isAdding) {
            await axios.post("lthtTableName", lthtObjTableName);
            onLthtAdd(lthtObjTableName);
            setIsAdding(false);
        } else {
            await axios.put("lthtTableName/" + lthtObjTableName.lthtId, lthtObjTableName);
            onLthtEdit(lthtObjTableName);
        }
    }

    const handleEditButton = (existingData) => {
        setIsAdding(false);
    }
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
                Ltht Add
            </button>

            <h2>{isAdding ? 'Form xu ly du lieu Them Moi' : 'Form xu ly du lieu Edit'}</h2>

            <form>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lthtId">lthtId</span>
                    <input type="text" className="form-control"
                        placeholder="lthtId"
                        value={lthtId}
                        name='lthtId'
                        onChange={(lthtEv) => setLthtId(lthtEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lthtId" />
                </div>
                {/* Repeat for other input fields (lthtTbName, lthtTbEmail, lthtTbPhone) */}
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lthtStatus">lthtStatus</span>
                    <select id='lthtTbStatus' className='form-control'
                        name='lthtTbStatus'
                        value={lthtTbStatus}
                        onChange={(lthtEv) => setLthtTbStatus(lthtEv.target.value)}
                    >
                        <option value={true}>Active</option>
                        <option value={false}>Non-Active</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary my-3" name='btnLthtSave' onClick={lthtHandleSubmit}>Ltht Save</button>
            </form>
        </div>
    )
}
