import React, { Component } from 'react';

class thuProductAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: '',
      status: 0,
    };
  }

  thuHandleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  // Submit form
  thuHandleSubmit = (ev) => {
    ev.preventDefault();

    this.props.onSummit(this.state);
  }

  render() {
    return (
      <div>
        <h2>Thêm mới sản phẩm</h2>
        <form className='col-md-6'>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              ID
            </span>
            <input
              type="text"
              className="form-control"
              name='id'
              value={this.state.id}
              onChange={this.thuHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon2">
              Title
            </span>
            <input
              type="text"
              className="form-control"
              name='title'
              value={this.state.title}
              onChange={this.tvcHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              Status
            </span>
            <input  /* Changed type to "number" (optional) */
              type="number"  /* Consider using a dropdown for predefined options */
              className="form-control"
              name='status'
              value={this.state.status}
              onChange={this.thuHandleChange}
            />
          </div>
          <button className='btn btn-success' onClick={this.thuHandleSubmit}>Ghi lại</button>
        </form>
      </div>
    );
  }
}
