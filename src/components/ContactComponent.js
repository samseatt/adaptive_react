import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const Contact = (props) => {

        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            701 West Georgia Street<br />
                            Suite 1500<br />
                            Vancouver, BC V7Y 1C6<br />
                            <i className="fa fa-phone"></i>: (604) 555-1234<br />
                            <i className="fa fa-fax"></i>: (604) 555-4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:info@adaprise.com">info@adaprise.com</a>
                            </address>
                            <br/>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24722.34028125919!2d-123.146110570161!3d49.28868219995327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f4dc48707%3A0x9e3204184a698c54!2s701%20W%20Georgia%20St!5e1!3m2!1sen!2sca!4v1608603270205!5m2!1sen!2sca" width="400" height="300"></iframe> */}
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18738.28527651806!2d-123.12626068813259!3d49.2904716253059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f4dc48707%3A0x9e3204184a698c54!2s701%20W%20Georgia%20St!5e1!3m2!1sen!2sca!4v1608604605569!5m2!1sen!2sca" width="340" height="500"></iframe> */}
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18544.4090079886!2d-123.12618363955528!3d49.29063094232475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f4dc48707%3A0x9e3204184a698c54!2s701%20W%20Georgia%20St!5e1!3m2!1sen!2sca!4v1608604860514!5m2!1sen!2sca" width="320" height="600"></iframe> */}
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37088.8180159772!2d-123.12618363955528!3d49.29063094232475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f4dc48707%3A0x9e3204184a698c54!2s701%20W%20Georgia%20St!5e1!3m2!1sen!2sca!4v1608604954281!5m2!1sen!2sca" width="320" height="640"></iframe> */}
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26776.922110240335!2d-123.15381250102742!3d49.28270464955796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f457f6223%3A0xa156805767aefef9!2s701%20W%20Georgia%20St%2C%20Vancouver%2C%20BC%20V7Y%201C6!5e1!3m2!1sen!2sca!4v1608606171695!5m2!1sen!2sca" width="320" height="640"></iframe> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36573.35603710742!2d-123.16606906136053!3d49.27951086646415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f457f6223%3A0xa156805767aefef9!2s701%20W%20Georgia%20St%2C%20Vancouver%2C%20BC%20V7Y%201C6!5e1!3m2!1sen!2sca!4v1608606301470!5m2!1sen!2sca" width="320" height="640"></iframe>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <br/>
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-call" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-sms"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-email" href="mailto:info@adaprise.com"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <ContactForm postFeedback={props.postFeedback}
                        resetFeedbackForm={props.resetFeedbackForm} />
            </div>
        );
}

class ContactForm extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        // console.log('Current State is: ' + JSON.stringify(values));
        // alert('Current State is: ' + JSON.stringify(values));
        // this.props.resetFeedbackForm();
        // this.toggleModal();

        const feedback = {
            firstname: values.firstname,
            lastname: values.lastname,
            telnum: values.telnum,
            email: values.email,
            agree: values.agree,
            contactType: values.contactType,
            message: values.message
        };
        feedback.date = new Date().toISOString();
    
        alert('Thank you for your feedback!\n' + JSON.stringify(feedback));
    
        this.props.resetFeedbackForm();
        this.props.postFeedback(feedback);
    }

    render() {
        return(
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send us your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                         />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input" /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="12"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                    <Button type="submit" color="secondary">
                                    Send Feedback
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
        );
    }
}


export default Contact;