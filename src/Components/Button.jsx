import PropTypes from 'prop-types';
import '../Css/Button.css'
const Button = ({ text,  }) => {
    
  
    return (
      <button className='Button' >
        {text}
      </button>
    );
  };
  
  Button.propTypes = {
    text: PropTypes.string.isRequired,
    // onClick: PropTypes.func.isRequired,
    // color: PropTypes.string,
    // background: PropTypes.string,
  };
  
  export default Button;
  