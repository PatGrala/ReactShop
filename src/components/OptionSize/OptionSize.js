import styles from './OptionSize.module.scss';
import clsx from 'clsx';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const OptionSize = props=> {

  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map(size => <li key={shortid()}><button type="button" onClick={() => props.setCurrentSize(size.name)} className={clsx(props.currentSize === size.name && styles.active)}>{size.name}</button></li>)}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
  currentSize: PropTypes.string,
  setCurrentSize: PropTypes.func
};

export default OptionSize;