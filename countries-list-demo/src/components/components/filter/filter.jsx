import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, Container, Label, Input, Button } from 'reactstrap';
import './filter.css'

class Filter extends React.Component {
    
    static propTypes = {
        onChange: PropTypes.func.isRequired
    }
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            code: '',
            region: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.props.onChange(this.state)
        });
    }

    render(){
        return(
            <Container className="filter__container">
                <Row>
                    <FormGroup className="filter__formgroup">
                        <Label className="float-left" for="name">Filter Names by:</Label>
                        <Input 
                            value={this.state.filter}
                            onChange={(e) => this.handleChange(e)}
                            type="text"
                            name="name"
                            id="filter"/>
                    </FormGroup>
                    <FormGroup className="filter__formgroup">
                        <Label className="float-left" for="code">Filter Codes by:</Label>
                        <Input 
                            value={this.state.code}
                            onChange={(e) => this.handleChange(e)}
                            type="text"
                            name="code"
                            id="code"/>
                    </FormGroup>
                    <FormGroup className="filter__formgroup">
                        <Label className="float-left" for="region">Filter Regions by:</Label>
                        <Input 
                            value={this.state.region}
                            onChange={(e) => this.handleChange(e)}
                            type="text"
                            name="region" 
                            id="region"/>
                    </FormGroup>
                </Row>
            </Container>
        )
    }
}

export default Filter;