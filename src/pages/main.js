import React, { Component } from 'react';
import Header from '../components/header';
import Product from '../components/product';
import Footer from '../components/footer';
import api from '../services/api'
import './styles.css';

export default class Main extends Component {

  state = {
    products: [],
    pagination: {}
  }

  componentDidMount() {
    this.list();
  }

  list = async (page = 1, limit = 10) => {
    try {
      const response = await api.get(`/products?page=${page}&limit=${limit}`);
      const { docs, ...pagination } = response.data;
      this.setState({ products: docs, pagination });
    } catch (error) {
      console.log(error);
    }
  }

  search = async (query, page = 1, limit = 10) => {
    try {
      const response = await api.get(`/products/search?query=${query}&page=${page}&limit=${limit}`);
      const { docs, ...pagination } = response.data;
      this.setState({ products: docs, pagination });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { products, pagination } = this.state;
    console.log('produtos=>', products);
    return (
      <div id='main'>
        <Header search={this.search} />
        <div className="galery">
          <div className="total-products">
            {pagination.total} PRODUTOS ENCONTRADOS
            </div>
          <div className="container text-center">
            <div className="list-group list-alternate">
              {products.map(product => (<Product key={product._id} data={{ product }} />))}
            </div>
          </div>
          <Footer pagination={this.state.pagination} list={this.list} />
        </div>
      </div>
    );
  }
}
