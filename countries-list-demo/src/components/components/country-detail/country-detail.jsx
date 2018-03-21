import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, Container, Label, Input, Button, Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';

import './country-detail.css'

class CountryDetail extends React.Component {

    static propTypes = {
        country: PropTypes.object.isRequired,
        onSave: PropTypes.func.isRequired,
        onCreate: PropTypes.func.isRequired,
        onClose: PropTypes.func.isRequired,
        flags: PropTypes.array.isRequired
    }
    
    constructor(props){
        super(props);
        this.state = {
            flag: '',
            name: '',
            code: '',
            region: '',
            subregion: '',
            enableEdit: false,
            dropdownOpen: false
        };
    }

    renderOptions = (flags) => {
        return (
            flags.map(f =>
                <DropdownItem 
                    onClick={(e) => this.toggle(e)}
                    key={f.name}
                    value={f.flag}>
                        {f.name}
                </DropdownItem>
            )
        )
    }

    toggle = (e) => {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen,
          flag: e.target ? e.target.value : ''
        });
      }

    componentWillReceiveProps(nextProps){
        if (this.props !== nextProps) {
            this.oldCountry = nextProps.country;
            this.setState({
                flag: nextProps.country.flag,
                name: nextProps.country.name,
                code: nextProps.country.alpha3Code ? nextProps.country.alpha3Code : '',
                region: nextProps.country.region,
                subregion: nextProps.country.subregion,
                enableEdit: nextProps.country.name && nextProps.country.name.length > 0 ? false : true
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
        if (this.oldCountry.name === '') {
            this.props.onCreate(updateCountry);
        } else {
            this.props.onSave(updateCountry);
        }
    }

    cancelCreation = () => {
        this.props.onClose({});
    }

    render() {
        const hasCountry = this.props.country.name === undefined ? false : true;
        const newcountry = this.props.country.name === '' ? true : false;

        return(
            <Container className={hasCountry ? "country-detail__container" : ""}>
                {
                    hasCountry ?
                    <Col xs="12">
                        <Button className="country-detail__close" onClick={() => this.cancelCreation()}>X</Button>
                        <Row className="country-detail__row">
                            <Col xs="6">
                                <img className="col-12 country-detail__flag-img" src={this.state.flag} />
                            </Col>
                            <Col xs="6">
                                <Row>
                                    <FormGroup className="col-6">
                                        <Label className="float-left" for="name">Name</Label>
                                        <Input 
                                            value={this.state.name}
                                            onChange={(e) => this.handleChange(e)}
                                            type="text" 
                                            name="name" 
                                            id="name"
                                            disabled={!this.state.enableEdit}/>
                                    </FormGroup>
                                    <FormGroup className="col-6">
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
                                    <FormGroup className="col-6">
                                        <Label className="float-left" for="region">Region</Label>
                                        <Input 
                                            value={this.state.region}
                                            onChange={(e) => this.handleChange(e)}
                                            type="text" 
                                            name="region" 
                                            id="region"
                                            disabled={!this.state.enableEdit}/>
                                    </FormGroup>
                                    {
                                        newcountry ?
                                            <FormGroup className="col-6">
                                                <Dropdown className="btn btn-default container"
                                                    isOpen={this.state.dropdownOpen}
                                                    toggle={this.toggle}>
                                                    <DropdownToggle
                                                        tag="span"
                                                        onClick={this.toggle}
                                                        data-toggle="dropdown"
                                                        aria-expanded={this.state.dropdownOpen}>
                                                            Flags
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem header>Select one...</DropdownItem>
                                                        {
                                                            this.renderOptions(this.props.flags)
                                                        }
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </FormGroup>
                                        :
                                            <FormGroup className="col-6">
                                                <Label className="float-left" for="subregion">Sub Region</Label>
                                                <Input
                                                    value={this.state.subregion}
                                                    onChange={(e) => this.handleChange(e)}
                                                    type="text" 
                                                    name="subregion" 
                                                    id="subregion"
                                                    disabled={!this.state.enableEdit}/>
                                            </FormGroup>
                                    }
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
                                {
                                    newcountry ? 
                                        <Button
                                        className="btn-primary float-right"
                                        name="enableEdit"
                                        color="primary"
                                        onClick={() => this.cancelCreation()}>
                                            Close
                                        </Button>
                                    :
                                        <Button
                                        className="btn-primary float-right"
                                        name="enableEdit"
                                        color="primary"
                                        onClick={(e) => this.handleChange(e)}>
                                            { this.state.enableEdit ? 'Cancel' : 'Edit' }
                                        </Button>
                                }
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