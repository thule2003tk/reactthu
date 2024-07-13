import React, { useState, useEffect } from 'react';
import axios from './api/LthtApi';
import LthtListStudent from './components/LthtListStudent';
import LthtAddOrEdit from './components/LthtAddOrEdit';

const LthtApp = () => {
    const [lthtListStudent, setLthtListStudent] = useState([]);
    const [lthtStudentToEdit, setLthtStudentToEdit] = useState(null);
    const [lthtAddOrEdit, setLthtAddOrEdit] = useState(false);

    // Function to fetch all students from API
    const lthtGetAllStudent = async () => {
        try {
            const lthtResponse = await axios.get("LthtSinhVien");
            console.log("API Data:", lthtResponse.data);
            setLthtListStudent(lthtResponse.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    const lthtHandleAddNew = () => {
        setLthtAddOrEdit(true);
    };

    const lthtHandleClose = (param) => {
        setLthtAddOrEdit(param);
    };

    const lthtHandleSubmit = async (param) => {
        console.log("Submitted data:", param);
      
        try {
            await axios.post("LthtSinhVien", param);
            await lthtGetAllStudent();
            setLthtAddOrEdit(false); // Close the form after submission
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };
    
    const lthtHandleDelete = () => {
        lthtGetAllStudent();
    };

    useEffect(() => {
        lthtGetAllStudent();
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className='container border my-3'>
            <h1>Làm việc với API</h1>
            <hr />
            <LthtListStudent renderLthtListStudent={lthtListStudent} onLthtDelete={lthtHandleDelete} onLthtEdit={setLthtStudentToEdit} />
            <button className='btn btn-primary' onClick={lthtHandleAddNew}>Thêm mới</button>
            <hr />
            {lthtAddOrEdit && (
                <LthtAddOrEdit
                    renderStudent={lthtStudentToEdit}
                    onLthtClose={lthtHandleClose}
                    onLthtSubmitForm={lthtHandleSubmit}
                />
            )}
        </div>
    )
}

export default LthtApp;
