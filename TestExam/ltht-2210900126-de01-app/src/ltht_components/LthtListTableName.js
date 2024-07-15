import React from 'react'

export default function LthtListTableName() {
  return (
    <div>
      <h2>Danh Sách Thông Tin....</h2>
      <hr/>
      <table className='table table-bordered'>
        <thead> 
          <tr>
            <th>lthtId</th>
            <th>lthtTbName</th>
            <th>lthtTbEmail</th>
            <th>lthtTbPhone</th>
            <th>lthtTbStatus</th>
            <th>ltht: Chức năng</th>
          </tr>
        </thead>
      </table>
    </div>
  )
}
