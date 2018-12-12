import React, { Component } from 'react'
import Pagination from 'react-js-pagination';
import './styles.css'

export default class Footer extends Component {

  render() {
    const pagination = this.props.pagination;

    return (
      <div className="footer">
        <div className="row text-center">
          <div className="col-4 pull-right">
            <div className="form-group">
              <select className="form-control" id="list-control" onChange={(e) => this.props.list(1, e.target.value)} >
                <option value={10}>10 produtos por página</option>
                <option value={25}>25 produtos por página</option>
                <option value={50}>50 produtos por página</option>
                <option value={100}>100 produtos por página</option>
                <option value={pagination.total}>Todos os produtos</option>
              </select>
            </div>
          </div>
          <div className="offset-4 col-4 pull-left">
            <nav className="pagination">
              <Pagination className="pagination page-link"
                activePage={pagination.page}
                itemsCountPerPage={pagination.limit}
                totalItemsCount={pagination.total}
                pageRangeDisplayed={10}
                onChange={this.props.list} />
            </nav>
          </div>
        </div>
      </div>
    );
  }
}