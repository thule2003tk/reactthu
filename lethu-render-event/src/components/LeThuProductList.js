import React, { Component } from 'react';

class thuProductList extends Component {
  render() {
    let { renderProducts } = this.props;
    console.log("Products:", renderProducts);

    let elementProduct = renderProducts.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.title}</td>
          <td>{/* Concise status display */}
            {item.status === 1 ? 'Active' : 'NonActive'}
          </td>
        </tr>
      );
    });

    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {elementProduct}
          </tbody>
        </table>
      </div>
    );
  }
}
