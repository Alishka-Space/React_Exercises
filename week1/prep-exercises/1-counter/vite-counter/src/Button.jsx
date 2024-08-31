

import PropTypes from 'prop-types';

const Button = ({ addOne }) => {
  return <button onClick={addOne}>Add 1!</button>;
};

Button.propTypes = {
  addOne: PropTypes.func.isRequired,
};

export default Button;