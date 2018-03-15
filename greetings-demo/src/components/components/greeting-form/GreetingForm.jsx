import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class GreetingForm extends React.Component {
  static propTypes = {
    countries: PropTypes.array.isRequired,
    onSave: PropTypes.func.isRequired,
    user: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      country: '',
      birthDate: '' };
  }

  handleChange = (e) => {
    if(e.target.name === "country" && e.target.value === "Select one..."){
      return;
    }

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const newVisitor = this.state;

    this.setState({
      name: '', 
      country: '',
      birthDate: null });

    this.props.onSave(newVisitor);
  }

  renderOptions(countries) {
    return (
      countries.map(c => 
        <option key={c.name}>
          {c.name}
        </option>
      )
    )
  }

  render() {
    const { countries } = this.props;

    return (
      <Form>
        <FormGroup>
          <Label for="name"
            className="float-left">Name</Label>
          <Input
            value={this.state.name}
            onChange={e => this.handleChange(e)}
            type="text"
            name="name"
            id="name" />
        </FormGroup>
        <FormGroup>
          <Label for="country"
            className="float-left">Country</Label>
          <Input
            value={this.state.country}
            onChange={e => this.handleChange(e)}
            type="select"
            name="country"
            id="country">
              <option>Select one...</option>
              {this.renderOptions(countries)}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="birthDate"
            className="float-left">Birthdate</Label>
          <Input
            value={this.state.birthDate}
            onChange={e => this.handleChange(e)}
            type="date"
            name="birthDate"
            id="birthDate" />
        </FormGroup>
        <FormGroup className="clearfix">
          <Button
            onClick={e => this.handleSubmit(e)}
            color="primary"
            className="float-right"
            disabled={!this.state.name || !this.state.country || !this.state.birthDate}>
            Save
        </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default GreetingForm;