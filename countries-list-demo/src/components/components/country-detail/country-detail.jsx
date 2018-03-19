import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, Container, Label, Input, Button } from 'reactstrap';

import './country-detail.css'

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

    componentWillReceiveProps(nextProps){
        if (this.props != nextProps) {
            this.oldCountry = nextProps.country;
            this.setState({
                flag: nextProps.country.flag,
                name: nextProps.country.name,
                code: nextProps.country.alpha3Code,
                region: nextProps.country.region,
                subregion: nextProps.country.subregion
            })
        }
    }

    handleChange = (e) => {
        if(e.target.name === 'enableEdit') {
            this.setState({
                [e.target.name]: !this.state.enableEdit
            })
            if (this.state.enableEdit) {
                this.setState({
                    flag: this.oldCountry.flag,
                    name: this.oldCountry.name,
                    code: this.oldCountry.alpha3Code,
                    region: this.oldCountry.region,
                    subregion: this.oldCountry.subregion
                })
            }
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleSubmit = () => {
        const updateCountry = {
            name: this.state.name,
            alpha3code: this.state.code,
            region: this.state.region,
            subregion: this.state.subregion,
            flag: this.state.flag
        };
        this.props.onSave(updateCountry);
    }

    render() {
        const hasCountry = this.props.country.name ? true : false;

        return(
            <Container className="country-detail__container">
                {
                    hasCountry ?
                    <Col xs="12">
                        <Row>
                            <Col xs="6">
                                <img className="col-12 country-detail__flag-img" src={this.state.flag} />
                            </Col>
                            <Col xs="6">
                                <Row>
                                    <FormGroup className="col-4">
                                        <Label className="float-left" for="name">Name</Label>
                                        <Input 
                                            value={this.state.name}
                                            onChange={(e) => this.handleChange(e)}
                                            type="text" 
                                            name="name" 
                                            id="name"
                                            disabled={!this.state.enableEdit}/>
                                    </FormGroup>
                                    <FormGroup className="col-4">
                                        <Label className="float-left" for="code">Code</Label>
                                        <Input 
                                            value={this.state.code}
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
                                            value={this.state.region}
                                            onChange={(e) => this.handleChange(e)}
                                            type="text" 
                                            name="region" 
                                            id="region"
                                            disabled={!this.state.enableEdit}/>
                                    </FormGroup>
                                    <FormGroup className="col-4">
                                        <Label className="float-left" for="subregion">Sub Region</Label>
                                        <Input 
                                            value={this.state.subregion}
                                            onChange={(e) => this.handleChange(e)}
                                            type="text" 
                                            name="subregion" 
                                            id="subregion"
                                            disabled={!this.state.enableEdit}/>
                                    </FormGroup>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="country-detail__button-row" xs="7">
                                <Button
                                    className="btn-primary country-detail__button-save"
                                    color="primary"
                                    onClick={this.handleSubmit}
                                    disabled={!this.state.enableEdit}>
                                        Save
                                </Button>
                                <Button
                                    className="btn-primary float-right"
                                    name="enableEdit"
                                    color="primary"
                                    onClick={(e) => this.handleChange(e)}>
                                        { this.state.enableEdit ? 'Cancel' : 'Edit' }
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                    : null
                }
            </Container>
        );
    }
}



export default CountryDetail;