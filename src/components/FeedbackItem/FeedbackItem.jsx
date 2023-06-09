
import PropTypes from 'prop-types';
import css from './FeedbackItem.module.css'
export const FeedbackItem = ({ item, onLeaveFeedback }) => {
  return (
    <li className={css.item}>
      <button className={css.button} type="button" onClick={onLeaveFeedback}>
        {item.toUpperCase()}
      </button>
    </li>
  );
};


FeedbackItem.propTypes = {
  item: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};