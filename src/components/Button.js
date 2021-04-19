import PropTypes from 'prop-types';

const Button = ({ color, text, clickHandler }) => {
  return <button onClick={clickHandler} style={{backgroundColor: color}} class='btn'>
           {text}
         </button>
}

Button.defaultProps = {
  color: 'black',
  text: 'hello',
}

Button.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clicHandler: PropTypes.func
}

export default Button;
