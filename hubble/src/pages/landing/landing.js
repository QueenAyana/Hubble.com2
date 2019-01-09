import React, { Component } from "react";
import Nav from "../../Components/Landing/Header/LandHeader";
import LandJumbotron from "../../Components/Landing/Jumbotron/LandJumbotron";
import API from "../../utils/API"
import { Button, Container, Row, Col, Jumbotron, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";


class User extends React.Component {
    state = -{
        name: "",
        userame: "",
        password: "",
        zipcode: "",
        modal: false
        // personality:"",
        // hobbies:"",
    };

    contiune = () => {
        alert("Take me to the next page")
        // redirect with router to questionaire page
    };

    saveUser = () => {
        this.handleFormSubmit();
        this.toggle();
        this.contiune();

    };

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
            API.saveUser({
                name: this.state.name,
                username: this.state.username,
                password: this.state.password,
                zipcode: this.state.zipcode,
            })
                .then(res => this.loadBooks())
                .catch(err => console.log(err));
            // add alert if missing field
        }
    };
    //  add logic for sign in and sign up buttons to pull up respaective forms.
    render() {
        return (
            <Container fluid>
                <Jumbotron>
                    <Row>
                        <Col size="md-6">
                            <h1>Welcome to Hubble.Com!</h1>
                            <h3>Where we can help you expand your bubble to fit a new hobby!</h3>
                            <p>Just take our amazing personality test so we can match who you are on the inside to what you can do on the outside</p>
                        </Col>
                    
                    </Row>
                    <Row>
                        <Col size="md-3"></Col>
                        <Col size="md-6">
                            <Form>
                                <FormGroup row>
                                    <Label for="username">Username : </Label>
                                    <Col sm={10}>
                                        <Input type="text" name="username" id="username" placeholder="username" />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Label for="password">Password : </Label>
                                    <Col sm={10}>
                                        <Input type="password" name="password" id="password" placeholder="password" />
                                    </Col>
                                </FormGroup>
                                <Button color="success" onClick={this.handleFormSubmit} >Sign In! </Button>{' '}
                                <Button color="info" onClick={this.toggle}>Sign Up!</Button>{' '}
                            </Form>
                        </Col>
                        <Col size="md-3"></Col>
                    </Row>
                    <Row>
                        <Col size="md-6">
                            <div>
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className="signUpModal">
                                    <ModalHeader toggle={this.toggle}>{`Create your account`}</ModalHeader>
                                    <ModalBody>
                                        <FormGroup>
                                            <Label for="username">Email : </Label>
                                            <Input type="text" name="username" id="username" placeholder="username" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="password">Password : </Label>
                                            <Input type="password" name="password" id="password" placeholder="password" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="name">Your Name : </Label>
                                            <Input type="text" name="name" id="name" placeholder="name" />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="password">Zip Code : </Label>
                                            <Input type="integer" name="zipCode" id="zipCode" placeholder="zip code" />
                                        </FormGroup>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.saveUser}>Take the Quiz!</Button>{' '}
                                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </div>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        );
    }
}

export default User;