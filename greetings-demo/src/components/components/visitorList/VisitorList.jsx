import React from 'react';
import PropTypes from 'prop-types';
import { Container, ListGroup, Label } from 'reactstrap';

import Visitor from '../visitor/Visitor';
import './VisitorList.css';

VisitorList.propTypes = {
  visitors: PropTypes.array.isRequired,
  onVisitorClick: PropTypes.func.isRequired,
};

function renderVisitor(props) {
  return (
    <ListGroup className="visitor-list">
      <Label className="visitor-list__title">Previous Visitors</Label>
      {props.visitors.map((visitor, i) =>
        <Visitor
          key={i}
          user={visitor}
          onVisitorClick={props.onVisitorClick}
        />
      )}
    </ListGroup>
  );
}

function VisitorList(props) {
  return (
    <Container>
      {props.visitors.length ? renderVisitor(props) : "No Visitors so far..."}
    </Container>
  )
}


export default VisitorList;