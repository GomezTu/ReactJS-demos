//React Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';
//App Imports
import * as registrationActions from '../../store/actions/register-actions';
import * as visitorsActions from '../../store/actions/visitor-actions';
import { FormatedCountries } from '../helpers/helpers';
import VisitorList from '../components/visitorList/Visitor-List';
import GreetingForm from '../components/greeting-form/Greeting-Form';
import Greeting from '../components/greeting/Greeting';

import "./Greetings-Container.css";

export class GreetingsContainer extends React.Component {

  componentDidMount() {
    if (this.props.countries.length === 0){
      this.props.actions.getCountries();
    }
  }

  render() {
    return (
      <Row>
        <Col xs="6">
          <GreetingForm
            user={this.props.user}
            countries={this.props.countries}
            onSave={this.props.actions.registerVisitor}
          />
          <Col xs="12">
            { Object.keys(this.props.user).length === 0 ?
                null : 
                <Greeting name={this.props.user.name} birthDate={this.props.user.birthDate} country={this.props.user.country}
             /> }
          </Col>
        </Col>
        <Col xs="6">
          <VisitorList
            visitors={this.props.visitors}
            onVisitorClick={this.props.actions.selectVisitor}
          />
          <div className="author-data">
            Author: <span className="author-data__name">Maximiliano Gomez</span>
          </div>
        </Col>
      </Row>
    );
  }
}

export function mapStateToProps({ greetings }) {
  return {
    visitors: greetings.registrations,
    countries: FormatedCountries(greetings.countries),
    user: greetings.currentVisitor,
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ 
      ...registrationActions, 
      ...visitorsActions 
    }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GreetingsContainer);
