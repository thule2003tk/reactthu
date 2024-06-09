import React, {useState} from 'react'

export default function thuTaskAddOfEdit({thuOnSubmit}) {
    const thuTask0bj = {
        thu_taskId:0,
        thu_taskName: "",
        thu_level:""
    }
    const [thuTask , setthuTask] = useState(thuTask0bj);
    const thuHandleChange = (thuEvent)=>{
        let name = thuEvent.target.name;
        let value = thuEvent.target.value;

        setthuTask(prev =>{
            return{
                ...prev,
            [name]:value,
            }
        })
    }
    const thuHandleSubmit = (thuEvent) =>{
        thuEvent.preventDefault();
        thuOnSubmit(thuTask);
    };
  return (
    <div>
        <h2>Thêm mới task</h2>
        <form>
            <div>
                <label>Task ID</label>
                <input name='thu_taskId' value={thuTask.thu_taskId} onChange={thuHandleChange} />
            </div>
            <div>
                <label>Task ID</label>
                <input name='thu_taskName' value={thuTask.thu_taskName} onChange={thuHandleChange} />
            </div>
            <div>
                <label>Task Level</label>
                <select name='thu_level' value={thuTask.thu_level} onChange={thuHandleChange} >
                    <option value={'Small'}>Small</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </div>
            <button onClick={thuHandleSubmit}>Ghi lại</button>
        </form>
    </div>
  )
}
