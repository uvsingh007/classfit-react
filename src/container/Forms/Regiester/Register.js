import React, { Component } from 'react';
import './Register.css';
import { Form, FormGroup, Label, Input,  Container, Row, Col, Button } from 'reactstrap';


class Register extends Component {

render() {
    return (
    <div className="Register">
        <Container>
        <Row>
            <Col  sm="12">
            <Form >
            
            <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="text" data-test="username"  />
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="text" data-test="username" />
        </FormGroup>
        <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="text" data-test="username" />
        </FormGroup>
        <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input type="password" data-test="password" />
        </FormGroup>
        <Button>Submit</Button>
            </Form>
        </Col>
        </Row>
    </Container>
    </div>
);
}
}
export default Register;
