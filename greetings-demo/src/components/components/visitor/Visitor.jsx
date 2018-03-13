import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';

import './Visitor.css';

Visitor.propTypes = {
  user: PropTypes.object.isRequired,
  onVisitorClick: PropTypes.func.isRequired
};

function Visitor(props) {
  return (
    <ListGroupItem
      className="visitor"
      onClick={e => props.onVisitorClick(props.user)}>
      {props.user.name} - {props.user.country} - {props.user.birthYear}
    </ListGroupItem>
  )
}

export default Visitor;