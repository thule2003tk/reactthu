import React from 'react'

export default function ThuListTask({renderThuListTasks, onThuTaskEdit, onThuTaskDelete}) {
    console.log(renderThuListTasks);
    // Hàm xử lý khi sửa
    const thuHandleEdit = (param)=>{
        console.log("Click edit:", param);
        onThuTaskEdit(param) //Đẩy lên App thông qua props (onThuTaskEdit)
    }
    // Hàm xử lý khi xóa
    const thuHandleDelete = (param)=>{
        if(window.confirm('Bạn có chắc chắn xóa không')){
            onThuTaskDelete(param) // Đẩy dữ liệu xóa lên trên App.js
        }
    }
    // render data
    let thuElementTask = renderThuListTasks.map((task, index)=>{
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{task.thu_taskId}</td>
                <td>{task.thu_taskName}</td>
                <td>{task.thu_level}</td>
                <td>
                    <button className='btn btn-success'
                        onClick={()=>thuHandleEdit(task)}
                        >Edit</button>    
                    <button className='btn btn-danger'
                    onClick={()=>thuHandleDelete(task)} >
                        Remove</button>    
                </td>
            </tr>
        )
    })
  return (
    <div>
        <h2>Danh sách các nhiệm vụ</h2>
        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Task Id</th>
                    <th>Task Name</th>
                    <th>Task Level</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {thuElementTask}
            </tbody>
        </table>
    </div>
  )
}
