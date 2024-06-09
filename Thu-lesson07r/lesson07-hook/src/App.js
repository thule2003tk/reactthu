import "./App.css";
import { React, useState } from "react";
import ThuListTask from "./components/ThuListTask";
import ThuTaskAddOrEdit from "./components/ThuTaskAddOrEdit";
function App() {
  // Mock data
  const thu_listTasks = [
    {
      thu_taskId: 2210900126,
      thu_taskName: "Lê Thương Hoài Thu",
      thu_level: "Small",
    },
    {
      thu_taskId: 1,
      thu_taskName: "Học lập trình frontend",
      thu_level: "Small",
    },
    {
      thu_taskId: 2,
      thu_taskName: "Học lập trình reactjs",
      thu_level: "Medium",
    },
    {
      thu_taskId: 3,
      thu_taskName: "Lập trình với Frontend - Reactjs",
      thu_level: "High",
    },
    {
      thu_taskId: 4,
      thu_taskName: "Lập trình Fullstack (PHP, Java, NetCore)",
      thu_level: "Small",
    },
  ];
  // sử dụng hàm useState để lưu trữ trạng thái dữ liệu
  const [thuListTasks, setThuListTasks] = useState(thu_listTasks);

  // tạo state dữ liệu cho form (add, edit)
  // Đối tượng task
  const thuTaksObj = {
    thu_taskId: 0,
    thu_taskName: "Môn",
    thu_level: "Medium",
  };
  // Tạo state
  const [thuTask, setThuTask] = useState(thuTaksObj); // dữ liệu trên form
  // state đê phân biệt trạng thái là thêm mới hay sửa
  const [thuIsAddOrEdit, setThuIsAddOrEdit ] = useState(true); // mặc định ban đầu là form thêm mới

  // Nhận dữ liệu khi sửa
  const thuHandleEdit = (param) => {
    console.log("App - Edit:", param);
    // Cập nhật lại tvcTask
    setThuTask(param);
    // Cập nhật trạng thái form là sửa
    setThuIsAddOrEdit(false);
  };

  const thuHandleSubmit = (thuParam) => {
    console.log("App:", thuParam);
    if(thuIsAddOrEdit===true){ // trường hợp thêm mới dữ liệu
      setThuListTasks((prev) => {
        return [...prev, thuParam];
      });
    }else{ // Trường hợp sử dụng dữ liệu
      for (let i = 0; i < thuListTasks.length; i++) {
          if(thuListTasks[i].thu_taskId = thuParam.thu_taskId){
            thuListTasks[i] = thuParam;
            break;
          }
      }
      // Cập nhật lại state (thuListTasks)
      setThuListTasks((prev) => {
        return [...prev];
      });
    }
  };

  // Hàm xóa
  const thuHandleDelete = (param)=>{
    let thuResult = thuListTasks.filter(x=>x.thu_taskId != param.thu_taskId);
    setThuListTasks(thuResult);
  }
  return (
    <div className="container border">
      <h1>Lê Thương Hoài Thu</h1>
      <hr />
      <div>
        {/* Danh sách list task  */}
        <ThuListTask
          renderThuListTasks={thuListTasks}
          onThuTaskEdit={thuHandleEdit}
          onThuTaskDelete = {thuHandleDelete}
        />
      </div>
      <div>
        <ThuTaskAddOrEdit 
            renderThuTask = {thuTask}
            renderThuIsAddOrEdit = {thuIsAddOrEdit}

            thuOnSubmit={thuHandleSubmit} />
      </div>
    </div>
  );
}

export default App;
