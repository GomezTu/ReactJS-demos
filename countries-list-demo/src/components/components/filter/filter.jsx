import React from 'react';
import PropTypes from 'prop-types';
import { Row, FormGroup, Container, Label, Input } from 'reactstrap';
import './filter.css'

class Filter extends React.Component {
    
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        onClear: PropTypes.func.isRequired
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

            if(this.state.name !== '' ||
                this.state.code !== '' ||
                this.state.region !== '') {
                    this.props.onClear({});
            }

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