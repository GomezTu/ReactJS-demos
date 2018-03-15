import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'

import "./Greeting.css";

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

function Greeting(props) {
  const bornDate = moment(`${props.birthDate}`, "YYYY-MM-DD");
  const today = moment();
  const currenteAge = moment().diff(`${props.birthDate}`, 'years');
  const todayIsBirthday = bornDate.date() === today.date() && bornDate.month() === today.month();

  return (
    <h4 className="greeting">
      {
        todayIsBirthday ? 
        <span>
          HAPPY BIRTHDAY!! Have an awesome day!
        </span>
        :
        <span>
          Hello <span id="name">{props.name}</span> from <span id="country">{props.country}</span>, 
          on {bornDate.date()} of {bornDate.month()+1} you'll have <span id="age">{currenteAge+1}</span>
        </span>
      }
    </h4>
  )
}

export default Greeting;