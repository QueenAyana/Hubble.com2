import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from "../../utils/API";
class Books extends Component {
  state = {
    modal: true
  };

  contiune = () => {
    alert("Take me tot the next page")
  }
  saveUser = () => {
    API.savePersonality(this.props.user.id, this.props.personality).then(() => {
      this.props.toggle();
      this.contiune();
    })
  }
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}>
          <ModalHeader toggle={this.props.toggle}>{`You are a ${this.props.personality} personality`}</ModalHeader>
          <ModalFooter>
            <Button color="primary" onClick={this.saveUser}>Continue to Profile</Button>{' '}
            <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </div>
    );
  }
}

export default Books;
