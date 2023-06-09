import React, { Component } from 'react';
import { FeedbackItem } from 'components/FeedbackItem/FeedbackItem';
import css from './FeedbackOptions.module.css'
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <ul className={css.list}>
        {options.map((item, index) => (
          <FeedbackItem
            item={item}
            key={index}
            onLeaveFeedback={() => onLeaveFeedback(item)}
          />
        ))}
      </ul>
    );
  }
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
