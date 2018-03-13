//React Imports
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';
//App Imports
import * as registrationActions from '../../store/actions/register-actions';
import * as visitorsActions from '../../store/actions/visitor-actions';
import { countriesFormmatedForDropdown } from '../selectors/selectors';
import VisitorList from '../components/visitorList/VisitorList';
import GreetingForm from '../components/greeting-form/GreetingForm';
import Greeting from '../components/greeting/Greeting';

export class GreetingsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.countries.length === 0){
      this.props.actions.fetchCountries();      
    }
  }

  handleVisitorClicked = (selectedVisitor) => {
    //To-DO
  }

  renderGreeting(user) {
    if (Object.keys(user).length === 0) return;

    return (
      <Greeting name={user.name}
                birthDate={user.birthDate}
                country={user.country} />
    )
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
            { this.renderGreeting(this.props.user) }
          </Col>
        </Col>
        <Col xs="6">
          <VisitorList
            visitors={this.props.visitors}
            onVisitorClick={this.handleVisitorClicked}
          />
        </Col>
      </Row>
    );
  }
}

export function mapStateToProps({ greetings }) {
  return {
    visitors: greetings.registrations,
    countries: countriesFormmatedForDropdown(greetings.countries),
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
