import React from 'react';
import styles from './Accordion.module.css';

function Accordion({ children, className = '', ...delegated }) {
  const [isShown, setIsShown] = React.useState(false);

  return (
    <div
      className={`${className} ${styles.wrapper} container mt-2 mb-5`}
      {...delegated}
    >
      <button
        onClick={() => setIsShown(!isShown)}
        className="button is-black is-size-5 is-uppercase px-6"
      >
        Подробнее
      </button>
      {isShown && <div>{children}</div>}
      {isShown && (
        <button
          onClick={() => setIsShown(false)}
          className="button is-black is-size-5 is-uppercase px-6"
        >
          свернуть
        </button>
      )}
    </div>
  );
}

export default Accordion;
