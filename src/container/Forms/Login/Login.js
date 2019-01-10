import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Aux from '../../../hoc/Aux';
import axios from '../../../axios';
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
      DevID: "linux_Chrome_127.0.0.1", 
      Lat: "30.0771",
      Long: "31.2859",
      PlyTkn: "",
      ProjectKey: "1234",
      ProjectSecret: "1234",
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

    if(!this.state.email) {
      return this.setState({error: 'email is required'});
    }
    
    if(!this.state.password) {
      return this.setState({error: 'Password is required'});
    }
    
    const data = {
      Email: this.state.email,
      Pass: this.state.password,
      DevID: this.state.DevID,
      Lat: this.state.Lat,
      Long: this.state.Long,
      PlyTkn: this.state.PlyTkn,
      ProjectKey: this.state.ProjectKey,
      ProjectSecret: this.state.ProjectSecret,
      source: this.state.source
    };
    axios.post('/PlyLogin', data)
      .then(
        (response) => { console.log(response) 
        console.log(this.state.ProjectKey)}
      )
      .catch(
        (error) => { console.log(error) }   
      );

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
