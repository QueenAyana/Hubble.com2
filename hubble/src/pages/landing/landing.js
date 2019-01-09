import React, { Component } from "react";
import Nav from "../../Components/Landing/Header/LandHeader";
import LandJumbotron from "../../Components/Landing/Jumbotron/LandJumbotron";
import { SignInButton, SignUpButton } from "../../Components/Button/Button";
import { Col, Row, Container } from "../../components/Grid";



class User extends Component {
    state = -{
        name: "",
        userame: "",
        password: "",
        zipcode: "",
        // personality:"",
        // hobbies:"",
    };

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
            <Nav />
            <Container fluid>
                <Row>
                <Col size="md-3"></Col>
                    <Col size="md-6">
                        <LandJumbotron>
                            <h1>Welcome to Hubble.Com!</h1>
                            <h3>Where we can help you expand your bubble to fit a new hobby!</h3>
                            <p>Just take our amazing personality test so we can match who you are on the inside to what you can do on the outside</p>
                        </LandJumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-3">
                        <SignUpButton />
                    </Col>
                    <Col size="md-9">
                        {/* sign up form */}
                    </Col>
                </Row>
                <Row>
                    <Col size="md-9">
                        {/* sign in form */}
                    </Col>
                    <Col size="md-3">
                        <SignInButton />
                    </Col>
                </Row>
            </Container>
        );
    }
}