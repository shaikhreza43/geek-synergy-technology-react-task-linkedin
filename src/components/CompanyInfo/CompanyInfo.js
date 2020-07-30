import React, { Component } from 'react';
import './CompanyInfo.css';

class CompanyInfo extends Component{
    constructor(props){
        super(props);
        this.state={
            companyName:'Geeksynergy Technologies Pvt Ltd',
            address:'Sanjayanagar, Bengaluru-56',
            phone:6546469879464,
            email:'geeksynergy@gmail.com'
        }
    }

    render(){
        return(
            <>
            <div className="text-center">
                <h5>Company:{this.state.companyName}</h5>
                <h5>Address:{this.state.address}</h5>
                <h5>Phone:{this.state.phone}</h5>
                <h5>Email:{this.state.email}</h5>
            </div>
            </>
        )
    }
}

export default CompanyInfo;