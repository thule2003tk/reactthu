import './App.css';
import LthtListSinhvien from './components/LthtListSinhvien';
import LthtApi from './api/LthtApi'; // Sử dụng đường dẫn './api/LthtApi'
import { useEffect, useState } from 'react';
import LthtAddOrEdit from './components/LthtAddOrEdit';

function LthtApp() {
  
  const [lthtListSinhvien, setLthtListSinhvien] = useState([]);
  const [lthtAddOrEdit, setLthtAddOrEdit] = useState(false);
  const [lthtUser, setLthtUser] = useState({
    LthtHosv: "",
    LthtTensv: "", 
    LthtNgaysinh:"",
    LthtNoisinh: "",
    LthtMakh:"",
    LthtHocbong: "",
    LthtDiemtrungbinh:"",
    LthtMasv: ""
  });

  // Hàm để gọi API và lấy dữ liệu
  const lthtGetAllSinhvien = async () => {
    try {
      const response = await LthtApi.get("LthtSinhvien");
      console.log("Dữ liệu từ API:", response.data);
      setLthtListSinhvien(response.data);
    } catch (error) {
      console.error("Lỗi khi lấy dữ liệu từ API:", error);
    }
  };

  // useEffect để gọi lthtGetAllSinhvien khi component được mount (tương đương componentDidMount)
  useEffect(() => {
    lthtGetAllSinhvien();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hàm xử lý khi người dùng nhấn nút "Thêm mới"
  const lthtHandleAddNew = () => {
    setLthtAddOrEdit(true);
  };

  // Hàm xử lý khi đóng form hoặc submit form
  const lthtHandleClose = (param) => {
    setLthtAddOrEdit(param);
  };

  // Hàm xử lý khi submit form và cập nhật danh sách sinh viên
  const lthtHandleSubmit = (param) => {
    lthtGetAllSinhvien(); // Gọi lại để cập nhật danh sách sinh viên
    setLthtAddOrEdit(param); // Đóng form sau khi submit thành công
  };

  // Hàm xử lý khi xóa sinh viên và cập nhật danh sách sinh viên
  const lthtHandleDelete = () => {
    lthtGetAllSinhvien(); // Gọi lại để cập nhật danh sách sinh viên
  };

  // Render form nếu lthtAddOrEdit là true
  let lthtElementForm = lthtAddOrEdit ? (
    <LthtAddOrEdit
      renderLthtUser={lthtUser}
      onLthtClose={lthtHandleClose}
      onLthtSubmit={lthtHandleSubmit}
    />
  ) : null;

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr />
      {/* Truyền lthtListSinhvien như một props vào LthtListSinhvien */}
      <LthtListSinhvien renderLthtListSinhvien={lthtListSinhvien} onLthtDelete={lthtHandleDelete} />
      {/* Nút để kích hoạt thêm mới sinh viên */}
      <button className='btn btn-primary' name='btnlthtThemmoi' onClick={lthtHandleAddNew}>Thêm mới</button>
      <hr />
      {/* Hiển thị form nếu lthtAddOrEdit là true */}
      {lthtElementForm}
    </div>
  );
}

export default LthtApp;
