import React, { Component } from 'react'
import logo from '../../pages/images/logo.png'
import './styles.css'

export default class Header extends Component {

    state = {
        title: ""
    }

    render() {
        const { title } = this.state;
        return (
            <div id="main-header">
                <div className='header'>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-6 header-left">
                                <img src={logo} className="img-responsive" alt="logo"/>
                            </div>
                            <div className="offset-2 col-4 header-right">
                                <div className="container-fluid input-group">
                                    <input type="text" className="form-control input-search" placeholder="Buscar..." 
                                        onChange={(e) => { this.props.search(e.target.value); this.setState({ title: e.target.value }) }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-search">
                    <div className="container">
                        <p>{title === "" ? "Lista de Produtos" : title}</p>
                    </div>
                </div>
            </div>
        );
    };
}
