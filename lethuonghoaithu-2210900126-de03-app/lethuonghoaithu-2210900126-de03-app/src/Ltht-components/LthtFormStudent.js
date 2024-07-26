import axios from '../ltht_apis/ltht-2210900126';
import React, { useEffect, useState } from 'react'

export default function LthtFormStudent({ renderLthtStudent, onLthtEdit, onLthtAdd }) {

    const [lthtStudId, setLthtStudId] = useState(renderLthtStudent.lthtStudId);
    const [lthtStudName, setLthtStudName] = useState(renderLthtStudent.lthtStudName);
    const [lthtStudAge, setLthtStudAge] = useState(renderLthtStudent.lthtStudAge);
    const [lthtStudGender, setLthtStudGender] = useState(renderLthtStudent.lthtStudGender);
    const [lthtStudEmail, setLthtStudEmail] = useState(renderLthtStudent.lthtStudEmail);
    const [lthtStudPhone, setLthtStudPhone] = useState(renderLthtStudent.lthtStudPhone);
    const [lthtStudStatus, setLthtStudStatus] = useState(renderLthtStudent.lthtStudStatus);

    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        setLthtStudId(renderLthtStudent.lthtStudId);
        setLthtStudName(renderLthtStudent.lthtStudName);
        setLthtStudAge(renderLthtStudent.lthtStudAge);
        setLthtStudGender(renderLthtStudent.lthtStudGender);
        setLthtStudEmail(renderLthtStudent.lthtStudEmail);
        setLthtStudPhone(renderLthtStudent.lthtStudPhone);
        setLthtStudStatus(renderLthtStudent.lthtStudStatus);
        setIsAdding(false);
    }, [renderLthtStudent])

    const lthtHandleSubmit = async (lthtEvent) => {
        lthtEvent.preventDefault();

        const lthtObjStudent = {
            "lthtStudName": lthtStudName,
            "lthtStudAge": lthtStudAge,
            "lthtStudGender": lthtStudGender,
            "lthtStudEmail": lthtStudEmail,
            "lthtStudPhone": lthtStudPhone,
            "lthtStudStatus": lthtStudStatus,
            "lthtStudId": lthtStudId
        }
        console.log(lthtObjStudent);

        try {
            if (isAdding) {
                const lthtRes = await axios.post("lthtStudent", lthtObjStudent);
                onLthtAdd(lthtRes.data);
            } else {
                const lthtRes = await axios.put("lthtStudent/" + lthtStudId, lthtObjStudent);
                onLthtEdit(lthtRes.data);
            }
        } catch (error) {
            window.alert("Vui Long Xem Lai Id va cac du lieu trong form");
        }
    }

    const handleEditButton = (existingData) => {
        setIsAdding(false);
        // Populate form fields with existingData   
    }
    const handleAddButton = () => {
        setLthtStudId('');
        setLthtStudName('');
        setLthtStudAge('');
        setLthtStudGender('');
        setLthtStudEmail('');
        setLthtStudPhone('');
        setLthtStudStatus(true);
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
                    <span className="input-group-text" id="lthtStudId">lthtStudId</span>
                    <input type="text" className="form-control"
                        placeholder="lthtStudId"
                        value={lthtStudId}
                        name='lthtStudd'
                        onChange={(lthtEv) => setLthtStudId(lthtEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lthtStudId" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lthtStudName">lthtStudName</span>
                    <input type="text" className="form-control"
                        placeholder="lthtStudName"
                        value={lthtStudName}
                        name='lthtStudName'
                        onChange={(lthtEv) => setLthtStudName(lthtEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lthtStudName" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lthtStudAge">lthtStudAge</span>
                    <input type="number" className="form-control"
                        placeholder="lthtStudAge"
                        value={lthtStudAge}
                        name='lthtStudAge'
                        onChange={(lthtEv) => setLthtStudAge(lthtEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lthtStudAge" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lthtStudGender">lthtStudGender</span>
                    <input type="text" className="form-control"
                        placeholder="lthtStudGender"
                        value={lthtStudGender}
                        name='lthtStudGender'
                        onChange={(lthtEv) => setLthtStudGender(lthtEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lthtStudGender" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lthtStudEmail">lthtStudEmail</span>
                    <input type="text" className="form-control"
                        placeholder="lthtStudEmail"
                        value={lthtStudEmail}
                        name='lthtStudEmail'
                        onChange={(lthtEv) => setLthtStudEmail(lthtEv.target.value)}
                        aria-label="Username"
                        aria-describedby="lthtStudEmail" />
                </div>
                
                <div className="input-group mb-3">
                    <span className="input-group-text" id="lthtStudatus">lthtStudatus</span>
                    <select id='lthtStudStatus' className='form-control'
                        name='lthtStudStatus'
                        value={lthtStudStatus}
                        onChange={(lthtEv) => setLthtStudStatus(lthtEv.target.value)}
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
