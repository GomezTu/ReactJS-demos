import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  birthDate: PropTypes.string.isRequired,
};

function Greeting(props) {
  const bornYear = moment(`01-01-${props.birthDate}`, "MM-DD-YYYY");
  const today = moment();
  const currenteAge = moment.duration(moment().diff(bornYear)).years();
  
  return (
    <h4 className="greeting">
      Hey <span id="name">{props.name}</span> from <span id="country">{props.country}</span>, 
      on {today.date()} of {today.month()+1} you'll be <span id="age">{currenteAge}</span>
    </h4>
  )
}

export default Greeting;