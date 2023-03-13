import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import {useMemo, useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm'

const Product = props => {

  const handleSubmit = e => {
    e.preventSefault();
    console.log('Summary')
    console.log('Name:' + props.title)
    console.log('Price:' + getPrice)
    console.log('Size:' + currentSize)
    console.log('Color' + currentColor)
  }

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = useMemo(() => {
    return (props.basePrice + props.sizes.find((size) => currentSize === size.name).additionalPrice);
  }, [props.basePrice, props.sizes, currentSize]);

  

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} title={props.title} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice} $</span>
        </header>
        <ProductForm
          handleSubmit={handleSubmit}
          colors={props.colors}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          sizes={props.sizes}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize} />
      </div>
    </article>
  )
};

Product.propTypes = {
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default Product;