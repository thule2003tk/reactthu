import React from 'react'

export default function ThuListStudent({ renderThuListStudents, onEditTask, onRemoveTask }) {
    console.log(renderThuListStudents);

    // Render data
    let thuElementTask = renderThuListStudents.map((task, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.thuId}</td>
                <td>{task.thuName}</td>
                <td>{task.thuAge}</td>
                
                <td>
                        <input
                            type="checkbox"
                            checked={task.thuIsActive}
                            readOnly
                        />
                    </td>
                <td>
                    <button className='btn btn-success' onClick={() => onEditTask(index)}>Sửa</button>
                    <button className='btn btn-danger' onClick={() => onRemoveTask(index)}>Xóa</button>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <h2>Danh sách các Sinh viên</h2>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Task ID</th>
                        <th>Task Name</th>
                        <th>Age</th>
                        <th>Status</th>
                        <th>Hoạt động</th>
                    </tr>
                </thead>
                <tbody>
                    {thuElementTask}
                </tbody>
            </table>
        </div>
    )
}