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
            {props.user.name}
          </Col>
          <Col xs="4">
            {props.user.country}
          </Col>
          <Col xs="4">
            {props.user.birthDate}
          </Col>
        </Row>
      </ListGroupItem>
  )
}

export default Visitor;