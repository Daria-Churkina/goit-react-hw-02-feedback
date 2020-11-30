import React from 'react';
import PropTypes from 'prop-types';
import './LeaveFeedback.css';

const LeaveFeedback = ({ onLeaveFeedback }) => (
  <div className="controls">
    <button type="button" name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button type="button" name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button type="button" name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </div>
);

LeaveFeedback.propTypes = {
  onLeaveFeedback: PropTypes.func,
};

export default LeaveFeedback;
