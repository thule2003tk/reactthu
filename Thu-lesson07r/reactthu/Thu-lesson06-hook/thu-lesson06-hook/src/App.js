import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import thuListTask from './components/thuListTask';
import thuTaskAddOfEdit from './components/thuTaskAddOfEdit';

function App() {
  const thu_listTasks = [
    { thu_taskId:2210900126, thu_taskName:"Lê thương Hoài Thu", thu_level:"Small" },
    { thu_taskId:1, thu_taskName:"Học lập trình frontend", thu_level:"Small" },
    { thu_taskId:2, thu_taskName:"Học lập trình reactjs",thu_level:"Medium"},
    { thu_taskId:3, thu_taskName:"Lập trình với Frontend - Reactjs",thu_level:"High"},
    { thu_taskId:4, thu_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",thu_level:"Small"},
   ];
   //sử dụng hàm useState để  lưu trữ trạng thái dữ liệu
   const [thuListTasks , setthuListTasks] = useState(thu_listTasks);

   const thuHandleSubmit = (thuParam)=>{
    console.log("App:",thuParam);
    setthuListTasks(prev => {
      return{
        ...prev,
        thuParam  
      }
    })
   }
  return (
    <div className="container border">
      <h1>Lê Thương Hoài Thu - K22CNT1</h1>
      <hr />
      <div> 
        <thuListTask renderthuListTasks = {thuListTasks} />
      </div>
      <div>
      <thuTaskAddOfEdit thuOnSubmit={thuHandleSubmit} />

      </div>
    </div>
  );
}

export default App;
