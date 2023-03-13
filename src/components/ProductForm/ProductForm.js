import styles from './ProductForm.module.scss'
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';


const ProductForm = props => {

  return (
    <form onSubmit={props.handleSubmit}>
      <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
      <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
      <Button className={styles.button} >
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>

  );
};

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  sizes: PropTypes.array.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
};

export default ProductForm;
