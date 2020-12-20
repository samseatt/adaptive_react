import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardBody, CardHeader, Collapse,
    Row, Col, Label, Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


function RenderAbstract ({content, config, isLoading, errMess}) {

    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else 
    {
        return (
            <div class="row">
                        <div class="col-12 col-md-3 d-none d-md-block">
                                <img src={content.imageCtr} alt="TODO" />
                        </div>
            <div className="col-12 col-md-9">
            <Card className="border-0">
            <CardBody className="bg-faded">
                {content.abstract.map(
                    abstract => (
                    <blockquote className="blockquote">
                        <p className="mb-0">{abstract.text}</p>
                        <footer>{abstract.author? " - " : ""}{abstract.author}
                        <cite title="Source Title">{abstract.source? ", " : ""}{abstract.source}</cite>
                        </footer>
                    </blockquote>
                    )
                )}
                </CardBody>
            </Card>
            </div>
            </div>
        );
    }
}

function RenderBreadcrumb({content, category, isContentLoading, contentErrMess, isCategoryLoading, categoryErrMess}) {

    if (isCategoryLoading) {
        return(
            <Loading />
        );
    }
    else if (categoryErrMess) {
        return(
            <h4>{categoryErrMess}</h4>
        );
    }
    if (isContentLoading) {
        return(
            <Loading />
        );
    }
    else if (contentErrMess) {
        return(
            <h4>{contentErrMess}</h4>
        );
    }
    else if (content.name === "home")
    {
        return(
            <div className="row">
            <Breadcrumb>
                <BreadcrumbItem active>{content.title}</BreadcrumbItem>
            </Breadcrumb>
        </div>

        );
    }
    else
    return (
        <div className="row">
            <Breadcrumb>
                <BreadcrumbItem><Link to="/home">home</Link></BreadcrumbItem>
                <BreadcrumbItem><Link to={category.name}>{category.name}</Link></BreadcrumbItem>
                <BreadcrumbItem active>{content.title}</BreadcrumbItem>
            </Breadcrumb>
        </div>
    );
}

class NoteForm extends Component {

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
        this.props.postNote(this.props.pageName, values.author, values.authority, values.text);
    }

    render() {
        return(
        <div>
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil"></span> Add Note</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>Submit Note</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="author">Contributor</Label>
                                <Control.text model=".author" id="author" name="author"
                                    placeholder="Your name or group"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(30)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".author"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 30 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="authority">Designation</Label>
                                <Control.text model=".authority" id="authority" name="authority"
                                    placeholder="Its title or role"
                                    className="form-control"
                                    validators={{
                                        maxLength: maxLength(30)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".authority"
                                    show="touched"
                                    messages={{
                                        maxLength: 'Must be 30 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Label htmlFor="text">Comment</Label>
                                <Control.textarea model=".text" id="text" name="text"
                                    rows="6"
                                    className="form-control" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Button type="submit" color="primary">
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
                                        required, minLength: minLength(3), maxLength: maxLength(50)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".title"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 50 characters or less'
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
                                        required, minLength: minLength(3), maxLength: maxLength(50)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".path"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 50 characters or less'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col>
                                <Button type="submit" color="primary">
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

function RenderContent({content, isLoading, errMess}) {
   
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else 
        return (
            <div>
                {content.text.map(
                    text => (
                        <p>{text}</p>
                    )
                )}
            </div>
    );
}

function RenderCustomContent({content, isContentLoading, contentErrMess, notes, isNotesLoading, notesErrMess, postNote}) {
   
    if (isContentLoading) {
        return(
            <Loading />
        );
    }
    else if (contentErrMess) {
        return(
            <h4>{contentErrMess}</h4>
        );
    }
    else if (isNotesLoading) {
        return(
            <Loading />
        );
    }
    else if (notesErrMess) {
        return(
            <h4>{notesErrMess}</h4>
        );
    }
    else 
    {
        return (
            <div>
                {notes.map(
                    note => (
                        <div>
                            <Card>
                                <CardBody className="bg-faded">
                                    <blockquote className="blockquote">
                                        <p className="mb-0">{note.text}</p>
                                        <footer className="blockquote-footer">{note.author},
                                        <cite title="Source Title">  {note.authority}</cite>
                                        </footer>
                                    </blockquote>
                                </CardBody>
                            </Card>
                            <br/>
                        </div>
                    )
                )}
                <NoteForm contentId={content.id} postNote={postNote} pageName={content.name} />
            </div>
        );
    }
}

// function RenderRightMenu({config, content, category, refs, isContentLoading, contentErrMess, isCategoryLoading, categoryErrMess, isRefsLoading, refsErrMess, postRef}) {
class RightNav extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
            isNavOpen: false,
            isNavFixed: false
        };
    }
    
    toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        if (this.props.configLoading) {
            return(
                <Loading />
            );
        }
        else if (this.props.configErrMessage) {
            return(
                <h4>{this.props.configErrMessage}</h4>
            );
        }
        else if (this.props.isCategoryLoading) {
            return(
                <Loading />
            );
        }
        else if (this.props.categoryErrMess) {
            return(
                <h4>{this.props.categoryErrMess}</h4>
            );
        }
        else if (this.props.isContentLoading) {
            return(
                <Loading />
            );
        }
        else if (this.props.contentErrMess) {
            return(
                <h4>{this.props.contentErrMess}</h4>
            );
        }
        else if (this.props.isRefsLoading) {
            return(
                <Loading />
            );
        }
        else if (this.props.refsErrMess) {
            return(
                <h4>{this.props.refsErrMess}</h4>
            );
        }
        else
        {
            if(this.props.content.name === this.props.category.name) {
                this.state.isNavOpen = true;
                this.isNavFixed = true;
            }
            return (
                <div className="col-12 col-md-3">
                    <span className="fa fa-caret-down" hidden={this.isNavFixed} />
                    <Card>
                        <CardHeader className={this.props.config.theme} onClick={this.toggleNav}>{this.props.content.title} </CardHeader>
                        <CardImg width="100%" src={this.props.content.imageRhsInv} alt={this.props.content.pageName} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <CardBody className="rightnav">
                            {this.props.category.subjects.map(
                            sub => (
                                    <div key={sub.id} class="leftnav" >
                                        <a href={sub.path}>{sub.title}</a><hr/>
                                    </div>
                                )
                            )}
                        </CardBody>
                        </Collapse>
                        <CardImg width="100%" src={this.props.content.imageRhs} alt={this.props.content.pageName} />
                        <CardBody className="rightnav">
                            {this.props.refs.map(
                                ref => (
                                    <div>
                                        <a class="leftnav" target="new" href={ref.path}>{ref.title}</a>
                                        <hr/>
                                    </div>
                                )
                            )}
                        </CardBody>
                    </Card>
                    <br/>
                    <RefForm contentId={this.props.content.id} postRef={this.props.postRef}  pageName={this.props.content.name} />
                </div>
            )
        }
    }
}

function Content(props) {

    if (props.configLoading) {
        return(
            <Loading />
        );
    }
    else if (props.configErrMessage) {
        return(
            <h4>{props.configErrMessage}</h4>
        );
    }
    else 
    return(
        <div className="container">
            <RenderBreadcrumb  content={props.content}
                        category={props.category}
                        isContentLoading={props.contentLoading}
                        contentErrMess={props.contentErrMess}
                        isCategoryLoading={props.categoryLoading}
                        categoryErrMess={props.categoryErrMess} />
            <RenderAbstract content={props.content}
                        config={props.config}
                        isLoading={props.contentLoading}
                        errMess={props.contentErrMess} />
            <div className="row row-content">
                <div className="col-12 col-md-9">
                    <RenderContent content={props.content}
                            isLoading={props.contentLoading}
                            errMess={props.contentErrMess} />
                    <RenderCustomContent content={props.content}
                            isContentLoading={props.contentLoading}
                            contentErrMess={props.contentErrMess}
                            notes={props.notes}
                            isNotesLoading={props.notesLoading}
                            notesErrMess={props.notesErrMess}
                            postNote={props.postNote} />
                </div>
                <RightNav config={props.config}
                        content={props.content}
                        category={props.category}
                        refs={props.refs}
                        isConfigLoading={props.contentLoading}
                        configErrMess={props.contentErrMess}
                        isContentLoading={props.contentLoading}
                        contentErrMess={props.contentErrMess}
                        isCategoryLoading={props.categoryLoading}
                        categoryErrMess={props.categoryErrMess}
                        isRefsLoading={props.refsLoading}
                        refsErrMess={props.refsErrMess}
                        postRef={props.postRef} />
            </div>
        </div>
    );
}

export default Content;    