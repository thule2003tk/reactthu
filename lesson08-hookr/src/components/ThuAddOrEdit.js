import React, { useState, useEffect } from 'react';

export default function ThuAddOrEdit({ thuOnSubmit, thuEditingTask }) {
    const thuTasksObj = {
        thuId: 0,
        thuName: "",
        thuAge: 0,
        thuIsActive: false
    }
    const [thuListStudent, setThuListStudent] = useState(thuTasksObj);

    // Update form state if editing task changes
    useEffect(() => {
        if (thuEditingTask !== null) {
            setThuTask(thuEditingTask);
        } else {
            setThuTask(thuTasksObj);
        }
    }, [thuEditingTask]); // eslint-disable-line react-hooks/exhaustive-deps

    const thuHandleChange = (thuEvent) => {
        let Name = thuEvent.target.name;
        let value = thuEvent.target.type === 'checkbox' ? thuEvent.target.checked : thuEvent.target.value;

        setThuTask(prev => {
            return {
                ...prev,
                [Name]: value,
            }
        })
    }

    const thuHandleSubmit = (thuEvent) => {
        thuEvent.preventDefault();
        thuOnSubmit(thuTask);
        setThuTask(thuTasksObj); // Reset form
    }

    return (
        <div className="card mt-4">
            <div className="card-header">
                <h2>{thuEditingTask ? "Sửa Task" : "Thêm mới Task"}</h2>
            </div>
            <div className="card-body">
                <form onSubmit={thuHandleSubmit}>
                    <div className="form-group mb-3">
                        <label>Task ID</label>
                        <input
                            type="text"
                            name='thuId'
                            value={thuTask.thuId}
                            onChange={thuHandleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Task Name</label>
                        <input
                            type="text"
                            name='thuName'
                            value={thuTask.thuName}
                            onChange={thuHandleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Age</label>
                        <input
                            type="number"
                            name='thuAge'
                            value={thuTask.thuAge}
                            onChange={thuHandleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Status</label>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                name='thuIsActive'
                                checked={thuTask.thuIsActive}
                                onChange={thuHandleChange}
                                className="form-check-input"
                            />
                            <label className="form-check-label">Active</label>
                        </div>
                    </div>
                    <button type='submit' className="btn btn-primary">Ghi lại</button>
                </form>
            </div>
        </div>
    )
}