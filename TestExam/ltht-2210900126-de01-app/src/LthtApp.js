import React, { useEffect } from 'react'
import LthtListTableName from './ltht_components/LthtListTableName'
import axios from './ltht_apis/ltht-2210900126'

export default function LthtApp() {
  //đọc dữ  liệu tư api
  const [lthtListTableName, setLthtListTableName] = React.useState([])
  const lthtGetTableName = async () => {
    let lthtResp =axios.get("lthtTableName");
    console.log(lthtResp.data);
    setLthtListTableName(lthtResp.data);
  }
  useEffect(() => {
    lthtGetTableName();
  }, [])
  return (
    <div className='container border my -3'>
      <h1>bài đánh giá hết học phần - Lê thương hoài thu: 2210900126</h1>
      <hr/>
      <LthtListTableName renderLthtListTableName={lthtListTableName}/>
    </div>
  )
}
