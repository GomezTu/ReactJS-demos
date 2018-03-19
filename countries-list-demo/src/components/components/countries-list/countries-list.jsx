import React from 'react';
import PropTypes from 'prop-types';
import { Container, ListGroup, Label } from 'reactstrap';
import { Row, Col } from 'reactstrap';

import CountryItem from '../country-item/country-item'

CountryList.propTypes = {
    countries: PropTypes.array.isRequired,
    onCountryClick: PropTypes.func.isRequired
}

function CountryList(props) {
    return (
        <Container className="country__container">
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
                {props.countries.map((country, i) =>
                  <CountryItem
                    key={i}
                    country={country}
                    onCountryClick={props.onCountryClick}
                  />
                )}
            </ListGroup>
      </Container>
    )
}

export default CountryList;