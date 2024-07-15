import React from 'react';

export default function LthtListTableName({ renderlthtListTableName = [], onLthtDelete, onLthtEdit }) {
    console.log("App List:", renderlthtListTableName);

    const lthtElementTableName = Array.isArray(renderlthtListTableName) ? 
        renderlthtListTableName.map((lthtTableName, lthtIndex) => (
            <tr key={lthtIndex}>
                <td>{lthtTableName.lthtId}</td>
                <td>{lthtTableName.lthtTbName}</td>
                <td>{lthtTableName.lthtTbEmail}</td>
                <td>{lthtTableName.lthtTbPhone}</td>
                <td>
                    {(lthtTableName.lthtTbStatus === true || lthtTableName.lthtTbStatus === "true") ? "Active" : "Non-Active"}
                </td>
                <td>
                    <button className='btn btn-success m-2' onClick={() => lthtHandleEdit(lthtTableName)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => lthtHandleDelete(lthtTableName.lthtId)}>Remove</button>
                </td>
            </tr>
        )) : <tr><td colSpan="6">Không có dữ liệu.</td></tr>;

    const lthtHandleDelete = async (lthtId) => {
        if (window.confirm("Bạn có chắc muốn xóa dữ liệu có lthtId =" + lthtId)) {
            onLthtDelete(lthtId);
        }
    }

    const lthtHandleEdit = (lthtObjTableName) => {
        onLthtEdit(lthtObjTableName);
    }

    return (
        <div>
            <h2>Danh sách thông tin .......</h2>
            <hr />
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <td>lthtId</td>
                        <td>lthtTbName</td>
                        <td>lthtTbEmail</td>
                        <td>lthtTbPhone</td>
                        <td>lthtTbStatus</td>
                        <td>ltht: Chức năng</td>
                    </tr>
                </thead>
                <tbody>
                    {lthtElementTableName}
                </tbody>
            </table>
        </div>
    );
}
