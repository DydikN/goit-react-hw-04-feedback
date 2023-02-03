import PropTypes from 'prop-types';

import styles from './feedback-options.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const elementsBtn = options.map(name => (
    <p key={name}>
      <button
        onClick={() => onLeaveFeedback(name)}
        type="button"
        className={styles.btn}
      >
        {name}
      </button>
    </p>
  ));

  return <div className={styles.wrapper}>{elementsBtn}</div>;
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
