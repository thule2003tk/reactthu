import React from 'react'

export default function LthtListTableName({renderlthtListTableName, onLthtDelete,onLthtAdd, onLthtEdit}) {
    console.log("App List:",renderlthtListTableName);
    //Hienthi du lieu
    const lthtElementTableName = renderlthtListTableName.map((lthtTableName, lthtIndex) => {
        return (
            
            <tr key={lthtIndex}>
            <td>
                {lthtTableName.lthtId}
            </td>
            <td>
                {lthtTableName.lthtTbName}
            </td>
            <td>
                {lthtTableName.lthtTbEmail}
            </td>
            <td>
                {lthtTableName.lthtTbPhone}
            </td>
            <td>
                {(lthtTableName.lthtTbStatus===true || lthtTableName.lthtTbStatus==="true")?"Active":"Non-Active"}
            </td>
            <td>
                <button className='btn btn-success m-2'
                    onClick={()=>lthtHandleEdit(lthtTableName)}
                >Edit</button>
                <button className='btn btn-danger'
                   onClick={()=>lthtHandleDelete(lthtTableName.lthtId)} 
                >Remove</button>
            </td>
            
        </tr>
        
        );
    })

    //Xoa du lieu
    const lthtHandleDelete = async (lthtId) => {
        if(window.confirm("Bạn có chắc muốn xóa dữ liệu có lthtId =" + lthtId)) {
          
            onLthtDelete(lthtId);
        }
        
        
    }

    //Edit
    const lthtHandleEdit = (lthtObjTableName) => {
        onLthtEdit(lthtObjTableName);
        
    }
    const lthtHandleAdd = (lthtObjTableName) => {
        onLthtEdit(lthtObjTableName);
    }


  return (
    <div>
        <h2>Danh sach thong tin .......</h2>
        <hr/>
        <table className='table table-bordered'>
            <thead>
                <td>lthtId</td>
                <td>lthtTbName</td>
                <td>lthtTbEmail</td>
                <td>lthtTbPhone</td>
                <td>lthtTbStatus</td>
                <td>ltht: Chuc nang</td>
            </thead>
            <tbody>
                {lthtElementTableName}

            </tbody>
        </table>

    </div>
  )
}