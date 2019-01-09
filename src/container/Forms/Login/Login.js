import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Aux from '../../../hoc/Aux';
// import axios from '../../../axios';
import { Form, FormGroup, Label, Input,  Container, Row, Col, Button } from 'reactstrap';
import NavbarLogin from '../../../component/NavbarLogin/NavbarLogin';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      source: 'web',
      error: ''
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({error: ''});
  }

  handleSubmit(evt) {
    evt.preventDefault();
    
    const data = {
      Email: this.state.email,
      Pass: this.state.password,
      source: this.state.source
  };
  const xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () =>
  {
      if(xmlHttp.readyState === 4 && xmlHttp.status === 200)
      {
          console.log(xmlHttp.responseText);
      }
  }
  xmlHttp.open("post", "http://newclassfit.fastclassapp.com/c/PlyLogin", true); 
  xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
  xmlHttp.send(data); 
  console.log(data);
  // axios.post('PlyLogin', data)
  //     .then(
  //       (response) => { console.log(response) }
  //     )
  //     .catch(
  //       (error) => { console.log(error) }   
  //     );


      
    if(!this.state.email) {
      return this.setState({error: 'email is required'});
    }
    if(!this.state.password) {
      return this.setState({error: 'Password is required'});
    }

    return this.setState({error: ''});
    
  }

  handleUserChange(evt) {
    this.setState({
      email: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  
  render() {
    return (
      <Aux>
        <NavbarLogin />
        <div className="Login">
          <Container>
            <Row>
              <Col  sm="12">
              <Form onSubmit={this.handleSubmit}>
                {
                  this.state.error &&
                  <h3 data-test="error" onClick={this.dismissError}>
                    <Button onClick={this.dismissError}>X</Button>{this.state.error}
                  </h3>
                }
              <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="text" data-test="email" value={this.state.email} onChange={this.handleUserChange} />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />
            </FormGroup>
            <Button data-test="submit" onClick={this.LoginDataHandler}>Submit</Button>
              </Form>
              <Link to='/Register'>Register</Link>
            </Col>
          </Row>
        </Container>
        </div>
      </Aux>
      
  );
  }
}
export default Login;
