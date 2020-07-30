import React, { Component } from 'react';
import './Home.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';
import { Link, Route } from 'react-router-dom';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import MovieCard from '../MovieCard/MovieCard';

const username = localStorage.getItem('username');

class Home extends Component{

    constructor(props){
        super(props);
        this.state={
            name: 'Anonymous',
            isOpen:false
        }
    }

    handleLogOut=()=>{
        localStorage.clear();
    }

    toggleNavbar = ()=>{
        if(this.state.isOpen===false)
        this.setState({isOpen:true});
        else if(this.state.isOpen===true)
        this.setState({isOpen:false});
    }

    render(){
        return(
            <>
             <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/" className="home-link">{username}</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                        <NavItem>
                                <Link to="/company-info" className="home-link">Company Info</Link>
                            </NavItem>
                            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                            <NavItem>
                                <Link to="/login" className="home-link" onClick={this.handleLogOut}>Logout</Link>
                            </NavItem>
                        </Nav>

                    </Collapse>
                </Navbar>

                <MovieCard></MovieCard>

                <Route exact path="/company-info" component={CompanyInfo}></Route>
            </>
        )
    }
}

export default Home;