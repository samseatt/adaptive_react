import React, { Component } from 'react';
import { Row, Col, Label, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class RefForm extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggleModal = this.toggleModal.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        this.props.postRef(this.props.pageName, values.title, values.path);
    }

    render() {
        return(
        <div>
            <Button outline onClick={this.toggleModal}><span className="fa fa-external-link"></span> Add Reference</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Reference</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="title">Reference Title</Label>
                                <Control.text model=".title" id="title" name="title"
                                    placeholder="The link as the user will see"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(100)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".title"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 100 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="path">Referene Link</Label>
                                <Control.text model=".path" id="path" name="path"
                                    placeholder="The actual link or path"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(200)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".path"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 200 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Button type="submit" color="secondary">
                                Submit
                                </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </ModalBody>
            </Modal>
         </div>
        )
    }
}

export default RefForm;