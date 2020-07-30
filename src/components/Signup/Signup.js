import React, { Component } from 'react';
import './Signup.css';
import { FormGroup, Input, Form, Label, Button, Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Select from 'react-select';

const SignupFormDiv = styled.div`
border:1px solid #000000;
padding:20px 15px 31px 15px;
box-shadow:1px 2px #000000;
background-color:lightgray;
overflow:hidden;
 `

const RandomImageDiv = styled.div`
background-image:url(https://source.unsplash.com/random);
background-position:center;
background-size:cover;
background-repeat: no-repeat;
height:100%;
overflow:hidden;
margin-right:-30px;
`

const options = [
    { value: 'Software Developer', label: 'Software Developer' },
    { value: 'HR and Operation', label: 'HR and Operation' },
    { value: 'Web Developer', label: 'Web Developer' },
];

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            phone: '',
            profession: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleDropdown = (e) => {
        this.setState({ profession: e.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const obj = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone,
            profession: this.state.profession
        }
        localStorage.clear();
        localStorage.setItem('username', obj.username);
        localStorage.setItem('password', obj.password);
        localStorage.setItem('email', obj.email);
        localStorage.setItem('phone', obj.phone);
        localStorage.setItem('profession', obj.profession);

        alert('Sign Up Successful');
        window.location="/login";
    }

    render() {

        return (
            <>
                <Container fluid>
                    <Row>
                        <Col lg="7">
                            <RandomImageDiv></RandomImageDiv>
                        </Col>
                        <Col lg="5">
                            <SignupFormDiv>

                                <Form onSubmit={this.handleSubmit}>

                                    <Col lg="12">
                                        <FormGroup>
                                            <Label for="username">Username</Label>
                                            <Input type="text" name="username"
                                                placeholder="Enter Username..."
                                                onChange={this.handleChange}
                                                required={true}></Input>
                                        </FormGroup>
                                    </Col>

                                    <Col lg="12">
                                        <FormGroup>
                                            <Label for="email">Email</Label>
                                            <Input type="email" name="email"
                                                placeholder="Enter Email..."
                                                onChange={this.handleChange}
                                                required={true}></Input>
                                        </FormGroup>
                                    </Col>


                                    <Col lg="12">
                                        <FormGroup>
                                            <Label for="password">Password</Label>
                                            <Input type="password" name="password"
                                                placeholder="Enter Password..."
                                                onChange={this.handleChange}
                                                required={true}></Input>
                                        </FormGroup>
                                    </Col>

                                    <Col lg="12">
                                        <FormGroup>
                                            <Label for="phone">Phone Number</Label>
                                            <Input type="text" name="phone"
                                                placeholder="Enter Phone Number..."
                                                onChange={this.handleChange}
                                                required={true}
                                                maxLength="10"></Input>
                                        </FormGroup>
                                    </Col>

                                    <Col lg="12">
                                        <FormGroup>
                                            <Label for="profession">Profession</Label>
                                            <Select options={options} value={this.state.profession.value}
                                                name="profession"
                                                onChange={(e) => this.handleDropdown(e)}></Select>
                                        </FormGroup>
                                    </Col>


                                    <Col lg="12">
                                        <Button type="submit" color="secondary">SignUp</Button>
                                        <Label className="ml-2">
                                            Already have an account?
                                            {"  "}
                                            <Link to="/login">Login</Link>
                                        </Label>
                                    </Col>

                                </Form>

                                <ul className="mt-5">
                                    <li>Valid Email Should be entered in the email input</li>
                                    <li>Password should be minimum 8 characters long and it should be the combination of both numbers and alphabets</li>
                                </ul>


                            </SignupFormDiv>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Signup;