import styles from './OptionColor.module.scss';
import clsx from 'clsx';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const OptionColor = props => {

  const prepareColorClassName = (color) => {
    return (
      styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()]
    )
  }

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.colors.map(color =>
          <li key={shortid()}>
            <button type="button" onClick={() => props.setCurrentColor(color)} className={clsx(prepareColorClassName(color), props.currentColor === color && styles.active)} />
          </li>
        )}
      </ul>
    </div>
  )
};

OptionColor.propTypes = {
  colors: PropTypes.array.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default OptionColor;