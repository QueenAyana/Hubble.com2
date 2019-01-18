import React, { Component } from "react";
import Nav from "../../Components/Landing/Header/LandHeader";
import QuestionForm from "../../Components/Button/Button";
import API from "../../utils/API"
import { Button, Container, Row, Col, Jumbotron, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {Redirect} from "react-router-dom";

const personalityCore = ["Adventurous", "Mellow", "Reliable", "Thoughtful", "Charismatic", "Rational", "Social"];
const personalityAddOn = ["Action Taker", "Inventor", "Naturalist", "Visionary", "Analyzer", "Mentor", "Planner"];

class Survey extends React.Component {
    state = -{
        modal: false,
        personality: "",
        redirect: false,
    };

    givePersonality = (event) => {
        event.preventDefault();
        let persona = personalityCore[Math.floor(Math.random() * personalityCore.length)] + " " + personalityAddOn[Math.floor(Math.random() * personalityAddOn.length)];
        console.log(persona);
        this.setState({
            personality: persona
        });
        this.handleFormSubmit();
        this.toggle();
    }

    handleFormSubmit = () => {
        if (this.state.personality) {
            API.savePersonality({
                personality: this.state.personality,
            })
                .catch(err => console.log(err));
            // add alert if missing field
        }
    };

    toggle = () => {
        this.setState({ modal: !this.state.modal });
    }

    contiune = () => {
        this.setState({
            redirect: true,
        })
    };

    render() {
        // if (redirect) {
        //     return <Redirect to='/profile'/>;
        // }
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
                        <Col size="md-12">
                            <Form>
                                <QuestionForm question = "Do you like being indoors?"/> 
                                <QuestionForm question = "Do you like being outdoors?"/> 
                                <QuestionForm question = "Do you enjoy being around people?"/> 
                                <QuestionForm question = "Do you enjoy interacting with people?"/> 
                                <QuestionForm question = "Do you enjoy participating in sports?"/> 
                                <QuestionForm question = "Do you enjoy competitition?"/> 
                                <QuestionForm question = "Do you need to win?"/> 
                                <QuestionForm question = "Do you like to sharpen your mind?"/> 
                                <QuestionForm question = "Do you like building things?"/> 
                                <QuestionForm question = "Do you like reading?"/> 
                                <QuestionForm question = "Do you like solving puzzles?"/> 
                                <QuestionForm question = "Do you like teaching?"/> 
                                <QuestionForm question = "Do you like driving?"/> 
                                <QuestionForm question = "Do you like walking?"/> 
                                <QuestionForm question = "Do you enjoy crowds?"/> 
                                <QuestionForm question = "Are you a technophile?"/> 
                                <QuestionForm question = "Do you enjoy exercise?"/> 
                                <QuestionForm question = "Do you enjoy working with your hands?"/> 
                                <QuestionForm question = "Do you like to meet new people?"/> 
                                <QuestionForm question = "Do you enjoy listening to music?"/> 
                                <QuestionForm question = "Do you enjoy making things others would enjoy?"/> 
                                <QuestionForm question = "Do you enjoy laughing at the lamentations of their women?"/> 
                                <QuestionForm question = "Do you enjoy saving the world?"/> 
                                <QuestionForm question = "Do you enjoy stomping their faces into the dirt?"/> 
                                <Button color="success" onClick={this.givePersonality} >Submit </Button>{' '}
                            </Form>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        );
    }
}

export default Survey;