import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, Container, Label, Input, Button } from 'reactstrap';

class CountryDetail extends React.Component {

    static propTypes = {
        country: PropTypes.object.isRequired,
        onSave: PropTypes.func.isRequired
    }
    
    constructor(props){
        super(props);
        this.state = {
            flag: '',
            name: '',
            code: '',
            region: '',
            subregion: '',
            enableEdit: false
        };
    }

    handleChange = (e) => {
        if(e.target.name === 'enableEdit') {
            this.setState({
                [e.target.name]: !this.state.enableEdit
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleSubmit = () => {
        alert('Testing Save');
    }

    render() {
        return(
            <Container>
                <Row>
                    <Col xs="3">
                        <img src={this.props.country.flag} />
                    </Col>
                    <Col xs="9">
                        <Row>
                            <FormGroup className="col-4">
                                <Label className="float-left" for="name">Name</Label>
                                <Input 
                                    value={this.props.country.name}
                                    onChange={(e) => this.handleChange(e)}
                                    type="text" 
                                    name="name" 
                                    id="name"
                                    disabled={!this.state.enableEdit}/>
                            </FormGroup>
                            <FormGroup className="col-4">
                                <Label className="float-left" for="code">Code</Label>
                                <Input 
                                    value={this.props.country.alpha3Code}
                                    onChange={(e) => this.handleChange(e)}
                                    type="text" 
                                    name="code" 
                                    id="code"
                                    disabled="true"/>
                            </FormGroup>
                        </Row>
                        <Row>
                            <FormGroup className="col-4">
                                <Label className="float-left" for="region">Region</Label>
                                <Input 
                                    value={this.props.country.region}
                                    onChange={(e) => this.handleChange(e)}
                                    type="text" 
                                    name="region" 
                                    id="region"
                                    disabled={!this.state.enableEdit}/>
                            </FormGroup>
                            <FormGroup className="col-4">
                                <Label className="float-left" for="subregion">Sub Region</Label>
                                <Input 
                                    value={this.props.country.subregion}
                                    onChange={(e) => this.handleChange(e)}
                                    type="text" 
                                    name="subregion" 
                                    id="subregion"
                                    disabled={!this.state.enableEdit}/>
                            </FormGroup>
                        </Row>
                        <Row>
                            <Button
                                className="primary"
                                name="enableEdit"
                                onClick={(e) => this.handleChange(e)}>
                                    Edit
                            </Button>
                            <Button
                                className="primary"
                                onClick={this.handleSubmit}>
                                    Save
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}



export default CountryDetail;