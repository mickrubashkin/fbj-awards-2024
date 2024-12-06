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
            <p className="content has-text-centered pt-6 px-4">
              Глянцевый журнал&nbsp;FB приглашает Вас принять участие
              в&nbsp;ежегодной ПРЕМИИ &laquo;ЖЕНЩИНА ГОДА&raquo; ПО&nbsp;ВЕРСИИ
              ЖУРНАЛА&nbsp;FB, которая состоится{' '}
              <a
                style={{ color: '#ffffff', textDecoration: 'underline' }}
                href="https://wa.me/+79055295511"
                target="_blank"
              >
                на&nbsp;Рублевке 22&nbsp;апреля&nbsp;2025&nbsp;года
              </a>
              .
              <br />
              По&nbsp;адресу: 72, д. Жуковка (Барвиха luxury village).
              На&nbsp;самом модном событии года отметят и&nbsp;наградят самых
              ярких и&nbsp;успешных людей России.
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
