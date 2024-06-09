import React, { useEffect, useState } from 'react'

export default function ThuTaskAddOrEdit({renderThuTask, renderThuIsAddOrEdit,thuOnSubmit}) {
    // // Đối tượng task
    // const thuTaksObj = {
    //     thu_taskId:0, 
    //     thu_taskName:"",
    //     thu_level:""
    // }
    const [thuTask, setThuTask] = useState(renderThuTask);
    useEffect(()=>{
        setThuTask(renderThuTask)
    },[renderThuTask])

    // tạo tiêu đề form
    const thuTieuDe = renderThuIsAddOrEdit==true?"Thêm mới task":"Sửa thông tin task";
    // Hàm xử lý sự kiện thay đổi trên điều khiển
    const thuHandleChange = (thuEvent)=>{
        let name = thuEvent.target.name;
        let value = thuEvent.target.value;

        setThuTask(prev => {
            return{
                ...prev,
                [name]:value,
            }
        })
    }
    
    const thuHandleSubmit = (thuEvent)=>{
        thuEvent.preventDefault();
        thuOnSubmit(thuTask);
    }
  return (
    <div>
        <h2>{thuTieuDe}</h2>
        <form >
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Task ID</span>
                <input type="text" 
                    name='thu_taskId' value={thuTask.thu_taskId} onChange={thuHandleChange} 
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">Task ID</span>
                <input type="text" 
                    name='thu_taskName' value={thuTask.thu_taskName} onChange={thuHandleChange} 
                    className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">Task Level</span>
    
                <select name='thu_level' value={thuTask.thu_level} onChange={thuHandleChange}  className="form-control" 
                    aria-describedby="basic-addon"> 
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={thuHandleSubmit} className='btn btn-primary'>Ghi lại</button>
        </form>
    </div>
  )
}
