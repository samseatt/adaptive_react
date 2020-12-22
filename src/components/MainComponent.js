import React, { Component } from 'react';
import Content from './ContentComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchContents, fetchConfigs, fetchCategories, fetchNotes, fetchRefs, postNote, postRef, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    contents: state.contents,
    configs: state.configs,
    categories: state.categories,
    notes: state.notes,
    refs: state.refs
    }
}

const mapDispatchToProps = dispatch => ({
  postNote: (ref, author, authority, text) => dispatch(postNote(ref, author, authority, text)),
  postRef: (ref, title, path) => dispatch(postRef(ref, title, path)),

  fetchContents: () => dispatch(fetchContents()),
  fetchConfigs: () => dispatch(fetchConfigs()),
  fetchCategories: () => dispatch(fetchCategories()),
  fetchNotes: () => dispatch(fetchNotes()),
  fetchRefs: () => dispatch(fetchRefs()),

  resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
  postFeedback: (feedback) => dispatch(postFeedback(feedback))
});

class Main extends Component {

  // constructor(props) {
  //   super(props);

  // }

  componentDidMount() {
    this.props.fetchContents();
    this.props.fetchConfigs();
    this.props.fetchCategories();
    this.props.fetchNotes();
    this.props.fetchRefs();
  }
  
render() {

    const ContentPage = (pageId, pageName, caategoryId, categoryName, configId, configName) => {
      return(
        <Content 
          content={this.props.contents.contents.filter((content) => content.name === pageName)[0]}
          contentLoading={this.props.contents.isLoading}
          contentErrMess={this.props.contents.errMess}
          config={this.props.configs.configs.filter((config) => config.name === configName)[0]}
          configLoading={this.props.configs.isLoading}
          configErrMess={this.props.configs.errMess}
          category={this.props.categories.categories.filter((category) => category.name === categoryName)[0]}
          categoryLoading={this.props.categories.isLoading}
          categoryErrMess={this.props.categories.errMess}
          notes={this.props.notes.notes.filter((note) => note.ref === pageName)}
          notesLoading={this.props.notes.isLoading}
          notesErrMess={this.props.notes.errMess}
          refs={this.props.refs.refs.filter((ref) => ref.ref === pageName)}
          refsLoading={this.props.refs.isLoading}
          refsErrMess={this.props.refs.errMess}
          postComment={this.props.postComment}
          postNote={this.props.postNote}
          postRef={this.props.postRef}
        />
        );
      }

      const HomePage = () => {
        console.log('HomePage called.');
        return(
          ContentPage(0, "home", 0, "home", 0, "home")
        );
      }  

    const AdaptivePage = () => {
      console.log('AdaptivePage called.');
      return(
        ContentPage(1, "adaptive", 1, "adaptive", 1, "adaptive")
      );
    }

    const IndustryPage = () => {
      return(
        ContentPage(2, "industry", 2, "industry", 2, "industry")
      );
    }

    const BusinessPage = () => {
      return(
        ContentPage(3, "business", 3, "business", 3, "business")
      )
    }

    const TechPage = () => {
      return(
        ContentPage(4, "tech", 4, "tech", 4, "tech")
      );
    }

    const SciencePage = () => {
      return(
        ContentPage(5, "science", 5, "science", 5, "science")
      );
    }

    const MediumPage = () => {
      return(
        ContentPage(6, "medium", 6, "medium", 6, "medium")
      );
    }

    const AboutPage = () => {
      console.log('AboutPage called.');
      return(
        ContentPage(11, "about", 1, "adaptive", 1, "adaptive")
      );
    }

    const PeoplePage = () => {
      console.log('PeoplePage called.');
      return(
        ContentPage(12, "people", 1, "adaptive", 1, "adaptive")
      );
    }

    const ServicesPage = () => {
      console.log('ServicesPage called.');
      return(
        ContentPage(13, "services", 1, "adaptive", 1, "adaptive")
      );
    }

    const AgilePage = () => {
      console.log('AgilePage called.');
      return(
        ContentPage(14, "agile", 1, "adaptive", 1, "adaptive")
      );
    }

    const EducationPage = () => {
      return(
        ContentPage(21, "education", 2, "industry", 2, "industry")
      );
    }

    const EnergyPage = () => {
      return(
        ContentPage(22, "energy", 2, "industry", 2, "industry")
      );
    }

    const FinancePage = () => {
      return(
        ContentPage(23, "finance", 2, "industry", 2, "industry")
      );
    }

    const GovernmentPage = () => {
      return(
        ContentPage(24, "government", 2, "industry", 2, "industry")
      );
    }

    const MedicalPage = () => {
      return(
        ContentPage(25, "medical", 2, "industry", 2, "industry")
      );
    }

    const TelecomPage = () => {
      return(
        ContentPage(26, "telecom", 2, "industry", 2, "industry")
      );
    }

    const TransportPage = () => {
      return(
        ContentPage(27, "transport", 2, "industry", 2, "industry")
      );
    }

    const VisionPage = () => {
      return(
        ContentPage(31, "vision", 3, "business", 3, "business")
      )
    }

    const GrowthPage = () => {
      return(
        ContentPage(32, "growth", 3, "business", 3, "business")
      )
    }

    const SustainPage = () => {
      return(
        ContentPage(33, "sustain", 3, "business", 3, "business")
      )
    }

    const SecurityPage = () => {
      return(
        ContentPage(34, "security", 3, "business", 3, "business")
      )
    }

    const EbizPage = () => {
      return(
        ContentPage(35, "ebiz", 3, "business", 3, "business")
      )
    }

    const NetworkPage = () => {
      return(
        ContentPage(41, "network", 4, "tech", 4, "tech")
      );
    }

    const SaasPage = () => {
      return(
        ContentPage(42, "saas", 4, "tech", 4, "tech")
      );
    }

    const AnalyticsPage = () => {
      return(
        ContentPage(51, "analytics", 5, "science", 5, "science")
      );
    }

    const ArtPage = () => {
      return(
        ContentPage(61, "art", 6, "medium", 6, "medium")
      );
    }

    const SocialPage = () => {
      return(
        ContentPage(62, "social", 6, "medium", 6, "medium")
      );
    }

    const MobilePage = () => {
      return(
        ContentPage(63, "mobile", 6, "medium", 6, "medium")
      );
    }

    const LegalPage = () => {
      console.log('LegalPage called.');
      return(
        ContentPage(71, "legal", 0, "home", 0, "home")
      );
    }  

    // const ContactPage = () => {
    //   console.log('ContactPage called.');
    //   return(
    //     ContentPage(72, "contact", 0, "home", 0, "home")
    //   );
    // }  

    const CorporatePage = () => {
      return(
        ContentPage(71, "corporate", 0, "home", 0, "home")
      );
    }

    const OtherPage = () => {
      const pageId=71
      const pageName="art"
      const categoryId=0
      const categoryName="home"
      const configId=0
      const configName="home"
      return(
        ContentPage(pageId, pageName, categoryId, categoryName, configId, configName)
       );
    }

    const ContactUs = () => {
      return(
        <Contact 
          postFeedback={this.props.postFeedback}
          resetFeedbackForm={this.props.resetFeedbackForm}
        />
      );
    }

    return (
      <div>
        <Header />
        <div>
        <TransitionGroup>
            <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
              <Switch location={this.props.location}>
                <Route path='/home' component={HomePage} />
                <Route exact path='/adaptive' component={AdaptivePage} />
                <Route exact path='/industry' component={IndustryPage} />
                <Route exact path='/business' component={BusinessPage} />
                <Route exact path='/tech' component={TechPage} />
                <Route exact path='/science' component={SciencePage} />
                <Route exact path='/medium' component={MediumPage} />
                <Route exact path='/about' component={AboutPage} />
                <Route exact path='/people' component={PeoplePage} />
                <Route exact path='/services' component={ServicesPage} />
                <Route exact path='/agile' component={AgilePage} />
                <Route exact path='/education' component={EducationPage} />
                <Route exact path='/energy' component={EnergyPage} />
                <Route exact path='/finance' component={FinancePage} />
                <Route exact path='/government' component={GovernmentPage} />
                <Route exact path='/medical' component={MedicalPage} />
                <Route exact path='/telecom' component={TelecomPage} />
                <Route exact path='/transport' component={TransportPage} />
                <Route exact path='/corp' component={CorporatePage} />
                <Route exact path='/vision' component={VisionPage} />
                <Route exact path='/growth' component={GrowthPage} />
                <Route exact path='/sustain' component={SustainPage} />
                <Route exact path='/security' component={SecurityPage} />
                <Route exact path='/ebiz' component={EbizPage} />
                <Route exact path='/network/' component={NetworkPage} />
                <Route exact path='/saas' component={SaasPage} />
                <Route exact path='/analytics' component={AnalyticsPage} />
                <Route exact path='/art' component={ArtPage} />
                <Route exact path='/social' component={SocialPage} />
                <Route exact path='/mobile' component={MobilePage} />
                <Route exact path='/legal' component={LegalPage} />
                {/* <Route exact path='/contact' component={ContactPage} /> */}
                <Route exact path='/pg' component={OtherPage} />
                <Route exact path='/contactus' component={ContactUs} />
                <Route exact path='/aboutus' component={AboutPage} />
                <Redirect to="/home" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));