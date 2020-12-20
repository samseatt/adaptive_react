import React from 'react';
import { Card, CardImg, CardText, CardBody, CardHeader,
    CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';

function RenderCard({item, isLoading, errMess}) {
    
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
        return(
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg src={baseUrl + item.image} alt={item.name} />
                    <CardBody>
                    <CardTitle>{item.imageRhs}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        );
}
function RenderRightMenu({props}) {
    // return (
    //     <div className="col-12 col-md-9">
    //         {items.map(
    //             item => (
    //                 <p>{item}</p>
    //             )
    //         )}
    //     </div>
    // );

return (
    <div className="col-12 col-md-3">
        <Card>
            <CardImg width="100%" src={props.imageRhs} alt={props.pageName} />
            <CardHeader className={props.theme}>{props.title} </CardHeader>
            <CardBody>
                <dl className="row p-1">
                    <dt className="col-6">Started</dt>
                    <dd className="col-6">3 Feb. 2013</dd>
                    <dt className="col-6">Major Stake Holder</dt>
                    <dd className="col-6">HK Fine Foods Inc.</dd>
                    <dt className="col-6">Last Year's Turnover</dt>
                    <dd className="col-6">$1,250,375</dd>
                    <dt className="col-6">Employees</dt>
                    <dd className="col-6">40</dd>
                    <dt className="col-6">Started</dt>
                    <dd className="col-6">3 Feb. 2013</dd>
                    <dt className="col-6">Major Stake Holder</dt>
                    <dd className="col-6">HK Fine Foods Inc.</dd>
                    <dt className="col-6">Last Year's Turnover</dt>
                    <dd className="col-6">$1,250,375</dd>
                </dl>
            </CardBody>
        </Card>
    </div>
)
}

function RenderContent({item, isLoading, errMess}) {
   
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
            <div className="col-12 col-md-9">
                <h2>The values are: {item.name}</h2>
                {item.text.map(
                    text => (
                        <p>{text}</p>
                    )
                )}
                <Card>
                    <CardBody className="bg-faded">
                        <blockquote className="blockquote">
                            <p className="mb-0">You better cut the pizza in four pieces because
                                I'm not hungry enough to eat six.</p>
                            <footer className="blockquote-footer">Yogi Berra,
                            <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                P. Pepe, Diversion Books, 2014</cite>
                            </footer>
                        </blockquote>
                    </CardBody>
                </Card>
                <br />
                <Card>
                    <CardBody className="bg-faded">
                        <blockquote className="blockquote">
                            <p className="mb-0">You better cut the pizza in four pieces because
                                I'm not hungry enough to eat six.</p>
                            <footer className="blockquote-footer">Yogi Berra,
                            <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                P. Pepe, Diversion Books, 2014</cite>
                            </footer>
                        </blockquote>
                    </CardBody>
                </Card>
                <br />
            </div>
        );
}

function Home(props) {
    return(
        <div className="container">
            {/* <p>Some text {JSON.stringify(props.content)}</p>
            <hr/>
            <p>Some text 2 {JSON.stringify(props.content2) }</p> */}
            {/* <RenderBreadcrumb props={props} /> */}
            {/* <RenderAbstract items={props.content.abstract} theme={props.themeInv} /> */}
            <div className="row row-content">
                <RenderContent item={props.content}
                        isLoading={props.contentLoading}
                        errMess={props.contentErrMess} />
                <RenderRightMenu props={props} />
            </div>
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}
                        isLoading={props.dishesLoading}
                        errMess={props.dishesErrMess}  />
                </div>
                <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion}
                        isLoading={props.promoLoading}
                        errMess={props.promoErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.content}
                        isLoading={props.contentLoading}
                        errMess={props.contentErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;