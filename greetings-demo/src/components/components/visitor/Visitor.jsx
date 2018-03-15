import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem, Row, Col } from 'reactstrap';

import './Visitor.css';

Visitor.propTypes = {
  user: PropTypes.object.isRequired,
  onVisitorClick: PropTypes.func.isRequired
};

function Visitor(props) {
  return (
      <ListGroupItem className="visitor" onClick={e => props.onVisitorClick(props.user)}>
        <Row>
          <Col xs="4">
            <span id="visitor-name">{props.user.name}</span>
          </Col>
          <Col xs="4">
            <span id="visitor-country">{props.user.country}</span>
          </Col>
          <Col xs="4">
            <span id="visitor-birthDate">{props.user.birthDate}</span>
          </Col>
        </Row>
      </ListGroupItem>
  )
}

export default Visitor;