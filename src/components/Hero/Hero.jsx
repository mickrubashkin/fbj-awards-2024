import React from 'react';
import Logo from '../Logo';
import styles from './Hero.module.css';
import heroSrc from './hero.png';

function Hero() {
  return (
    <section className={`black hero`}>
      <div className="hero-head pt-6">
        <div className={styles['shadow-wrapper']}>
          <div className={styles.shadow}></div>
          <div className={styles['content-wrapper']}>
            <Logo className={`mx-auto ${styles.logo}`} />
            <p className="content has-text-centered pt-2 px-4">
              Глянцевый журнал&nbsp;FB приглашает Вас принять участие
              в&nbsp;ежегодной ПРЕМИИ &laquo;ЖЕНЩИНА ГОДА&raquo; ПО&nbsp;ВЕРСИИ
              ЖУРНАЛА&nbsp;FB. На&nbsp;самом модном событии года отметят
              и&nbsp;наградят самых ярких и&nbsp;успешных женщин России.
            </p>
          </div>
        </div>
      </div>
      <div className="hero-body p-0 pt-4">
        <figure className={`${styles.hero} image`}>
          <img src={heroSrc} />
        </figure>
      </div>
    </section>
  );
}

export default Hero;
