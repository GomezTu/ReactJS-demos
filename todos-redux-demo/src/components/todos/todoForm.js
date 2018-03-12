import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

export class TodoForm extends React.Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            text: '',
            completed: false
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = this.state;
        this.setState({
            text: '',
            completed: false
        });
        this.props.onSave(newTodo);
    }

    render(){
        return(
            <Form>
                <FormGroup>
                    <Label for="text">To Do: </Label>
                    <Input
                        value={this.state.text}
                        onChange={e => this.handleChange(e)}
                        name="text"
                        type="text"
                        id="text" />
                </FormGroup>
                <FormGroup>
                    <Label for="completed">Status: </Label>
                    <Input
                        value={this.state.completed}
                        onChange={e => this.handleChange(e)}
                        name="completed"
                        type="checkbox"
                        id="completed" />
                </FormGroup>
                <FormGroup>
                    <Button
                        onClick={e => this.handleSubmit(e)}
                        color="primary">
                        Saludar
                    </Button>
                </FormGroup>
            </Form>
        )
    }
}