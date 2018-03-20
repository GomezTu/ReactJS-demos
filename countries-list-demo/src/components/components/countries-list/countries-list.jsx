import React from 'react';
import PropTypes from 'prop-types';
import { Container, ListGroup, Label } from 'reactstrap';
import { Row, Col, Button, Alert } from 'reactstrap';

import CountryItem from '../country-item/country-item'
import './countries-list.css'

CountryList.propTypes = {
    countries: PropTypes.array.isRequired,
    onCountryClick: PropTypes.func.isRequired
}

function CountryList(props) {
    return (
        <Container className="country__container">
              <Row>
                <Button
                    color="primary"
                    className="float-left add-country-button"
                    onClick={e => props.onCountryClick({ name:'', flag: '', alpha3Code: '', region: '', subregion: ''})}>
                        Add Country
                </Button>
              </Row>
              <Container>
                <ListGroup className="country__list">
                  <Label className="country__list-title">Countries</Label>
                  <Row>
                    <Col xs="4">
                      <span><strong>Name</strong></span>
                    </Col>
                    <Col xs="4">
                      <span><strong>Code</strong></span>
                    </Col>
                    <Col xs="4">
                      <span><strong>Region</strong></span>
                    </Col>
                  </Row>
                    {
                      props.countries.length > 0 ?  
                        props.countries.map((country, i) =>
                        <CountryItem
                          key={i}
                          country={country}
                          onCountryClick={props.onCountryClick}
                        />
                        )
                      :
                      <Alert color="warning">
                        No Countries found.
                      </Alert>
                    }
                </ListGroup>
              </Container>
      </Container>
    )
}

export default CountryList;