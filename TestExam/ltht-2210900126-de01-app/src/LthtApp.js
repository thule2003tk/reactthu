import React, { useEffect, useState } from 'react';
import LthtListTableName from './ltht_components/LthtListTableName';
import axios from './ltht_apis/ltht-2210900126';
import LthtFormTableName from './ltht_components/LthtFormTableName';

export default function LthtApp() {
  // Đọc dữ liệu từ API
  const [lthtListTableName, setLthtListTableName] = useState([]);
  
  const lthtGetTableName = async () => {
    try {
      const lthtRes = await axios.get("lthtTableName");
      setLthtListTableName(lthtRes.data);
      console.log("App data:", lthtRes.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    lthtGetTableName();
  }, []);

  // Hàm Xóa
  const lthtHandleDelete = async (lthtId) => {
    try {
      await axios.delete(`lthtTableName/${lthtId}`);
      lthtGetTableName();
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const lthtObjTableName = {
    lthtId: "",
    lthtTbName: "",
    lthtTbEmail: "",
    lthtTbPhone: "",
    lthtTbStatus: true,
  };

  const [lthtTableName, setLthtTableName] = useState(lthtObjTableName);

  const lthtHandleAdd = () => {
    lthtGetTableName();
  };

  const lthtHandleEdit = (lthtObjEditTableName) => {
    setLthtTableName(lthtObjEditTableName);
  };

  return (
    <div className='container border my-3'> 
      <h1>Bài đánh giá hết học phần - Lê Thượng Hoài Thư: 2210900126</h1>
      <hr />
      <LthtListTableName 
        renderLthtListTableName={lthtListTableName} 
        onLthtDelete={lthtHandleDelete} 
        onLthtEdit={lthtHandleEdit} 
        onLthtAdd={lthtHandleAdd}
      />
      <hr />
      <LthtFormTableName 
        renderLthtTableName={lthtTableName} 
        onLthtEdit={lthtHandleEdit} 
        onLthtAdd={lthtHandleAdd}
      /> 
      <hr />
    </div>
  );
}
