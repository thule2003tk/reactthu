import './App.css';
import ThuListUsers from './components/thuListUsers';
import axios from './api/thuApi';
import { useEffect, useState } from 'react';
import ThuFormAddOrEdit from './components/thuFormAddOrEdit';

function ThuApp() {
  
  const [thuListUsers, setThuListUsers] = useState([]);
  const [thuAddOrEdit, setThuAddOrEdit] = useState(false);
  const [thuUser, setThuUser] = useState({
    UserName: "",
    Password: "",
    Email: "",
    Phone: "",
    id: ""
  });

  // Hàm để gọi API và lấy dữ liệu
  const thuGetAllUsers = async () => {
    try {
      const thuResponse = await axios.get("thuUsers");
      console.log("Dữ liệu từ API:", thuResponse.data);
      setThuListUsers(thuResponse.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ API:", error);
    }
  };

  // useEffect để gọi thuGetAllUsers khi component được mount (tương đương componentDidMount)
  useEffect(() => {
    thuGetAllUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hàm xử lý khi người dùng nhấn nút "Thêm mới"
  const thuHandleAddNew = () => {
    setThuAddOrEdit(true);
  };

  // Hàm xử lý khi đóng form hoặc submit form
  const thuHandleClose = (param) => {
    setThuAddOrEdit(param);
  };

  // Hàm xử lý khi submit form và cập nhật danh sách người dùng
  const thuHandleSubmit = (param) => {
    thuGetAllUsers(); // Gọi lại để cập nhật danh sách người dùng
    setThuAddOrEdit(param); // Đóng form sau khi submit thành công
  };

  // Hàm xử lý khi xóa người dùng và cập nhật danh sách người dùng
  const thuHandleDelete = () => {
    thuGetAllUsers(); // Gọi lại để cập nhật danh sách người dùng
  };

  // Render form nếu thuAddOrEdit là true
  let thuElementForm = thuAddOrEdit ? (
    <ThuFormAddOrEdit
      renderUsers={thuUser}
      onThuClose={thuHandleClose}
      onThuSubmitForm={thuHandleSubmit}
    />
  ) : "";

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr />
      {/* Truyền thuListUsers như một props vào ThuListUsers */}
      <ThuListUsers renderThuListUsers={thuListUsers} onThuDelete={thuHandleDelete} />
      {/* Nút để kích hoạt thêm mới người dùng */}
      <button className='btn btn-primary' name='btnthuThemmoi' onClick={thuHandleAddNew}>Thêm mới</button>
      <hr />
      {/* Hiển thị form nếu thuAddOrEdit là true */}
      {thuElementForm}
    </div>
  );
}

export default ThuApp;
