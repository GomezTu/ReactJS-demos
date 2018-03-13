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
      birthDate: '' });

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
          <Label for="name">Name</Label>
          <Input
            value={this.state.name}
            onChange={e => this.handleChange(e)}
            type="text"
            name="name"
            id="name" />
        </FormGroup>
        <FormGroup>
          <Label for="country">Pais</Label>
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
          <Label for="birthDate">Año de nacimiento</Label>
          <Input
            value={this.state.birthYear}
            onChange={e => this.handleChange(e)}
            type="number"
            name="birthDate"
            id="birthDate" />
        </FormGroup>
        <FormGroup>
          <Button
            onClick={e => this.handleSubmit(e)}
            color="primary">
            Say Hi!
        </Button>
        </FormGroup>
      </Form>
    )
  }
}

export default GreetingForm;