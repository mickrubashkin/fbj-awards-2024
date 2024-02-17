import React from 'react';
import styles from './RenderCenterRightControls.module.css';

function renderCenterRightControls({
  nextDisabled,
  nextSlide,
  className = '',
  ...delegated
}) {
  return (
    <button
      className={`${styles.btn} ${className}`}
      disabled={nextDisabled}
      onClick={nextSlide}
      aria-label="Go to next slide"
    >
      <svg
        width="22"
        height="21"
        viewBox="0 0 22 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="10.7266"
          cy="10.5"
          r="10"
          transform="rotate(-180 10.7266 10.5)"
          fill="#D9D9D9"
        />
        <path
          d="M8.93945 15.1915L13.6309 10.5L8.93945 5.8085"
          stroke="black"
        />
      </svg>
    </button>
  );
}

export default renderCenterRightControls;
