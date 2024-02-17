import React from 'react';
import styles from './Reviews.module.css';
import reviewSrc from './reviews.png';
import waveSrc from './wave.png';

function Reviews() {
  return (
    <section className="section black p-0">
      <div className={`${styles.wrapper} container pb-2`}>
        <img src={reviewSrc} />
        <img
          src={waveSrc}
          className={styles.wave}
        />
      </div>
    </section>
  );
}

export default Reviews;
