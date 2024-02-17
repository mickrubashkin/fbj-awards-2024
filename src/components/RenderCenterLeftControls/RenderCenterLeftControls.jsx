import React from 'react';
import styles from './RenderCenterLeftControls.module.css';

function renderCenterLeftControls({
  previousDisabled,
  previousSlide,
  className = '',
  ...delegated
}) {
  return (
    <button
      className={`${styles.btn} ${className}`}
      disabled={previousDisabled}
      onClick={previousSlide}
      aria-label="Go to previous slide"
    >
      <svg
        width="22"
        height="21"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="11.0664"
          cy="10.5"
          r="10"
          fill="#D9D9D9"
        />
        <path
          d="M12.8535 5.80852L8.16203 10.5L12.8535 15.1915"
          stroke="black"
        />
      </svg>
    </button>
  );
}

export default renderCenterLeftControls;
