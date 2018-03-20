import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Row, Col } from 'reactstrap';
import './country-item.css'

CountryItem.propTypes = {
    country: PropTypes.object.isRequired,
    onCountryClick: PropTypes.func.isRequired
}

function CountryItem(props) {
    return(
      <ListGroupItem className="country" onClick={e => props.onCountryClick(props.country)}>
        <Row>
          <Col xs="4">
            <span id="country-name">{props.country.name}</span>
          </Col>
          <Col xs="4">
            <span id="country-code">{props.country.alpha3Code}</span>
          </Col>
          <Col xs="4">
            <span id="country-region">{props.country.region}</span>
          </Col>
        </Row>
      </ListGroupItem>
    )
}

export default CountryItem;