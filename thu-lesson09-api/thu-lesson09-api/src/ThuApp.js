
import './App.css';
import ThuListUsers from './components/thuListUsers';
import axios from './api/thuApi'
import { useEffect, useState } from 'react';
function ThuApp() {
  
  const [thuListUsers,setThuListUsers] = useState([]);

  // đọc dữ liệu từ Api
  const thuGetAllUsers = async  ()=>{
    const thuResponse = await axios.get("thuUsers");
    console.log("Api Data:",thuResponse.data);
    setThuListUsers(thuResponse.data)
  }

  
  useEffect(()=>{
    thuGetAllUsers();
    console.log("State Data:",thuListUsers);
  },[])

  return (
    <div className="container border my-3">
        <h1>Làm việc với MockApi</h1>
        <hr/>
        <thuListUsers  renderThuListUsers={thuListUsers}/>
    </div>
  );
}

export default ThuApp;
