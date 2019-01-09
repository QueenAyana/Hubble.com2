import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from "../../utils/API";
import FormModal from "./FormModal";
class Books extends Component {
  state = {
    modal: true,
    personality:"shy"
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }

  onButtonClick = () =>{
    let personality = "awesome"
    this.setState({personality:personality})
    this.toggle();
  }
 
  componentDidMount() {

  }

  render() {
    return (
      <div>
       <input/>
       <input/>
       <Button onClick={this.onButtonClick} >Submit</Button>
       <FormModal  modal={this.state.modal} toggle={this.toggle} personality={this.state.personality}/>

      </div>
    );
  }
}

export default Books;
