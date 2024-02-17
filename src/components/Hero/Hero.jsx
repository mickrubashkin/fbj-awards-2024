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
              ЖУРНАЛА&nbsp;FB, которая состоится{' '}
              <a
                href="https://wa.me/+79055295511?text=%D0%A5%D0%BE%D1%87%D1%83%20%D0%BF%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8C%20%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%B8%D1%8F%20%D0%B2%20%D0%B5%D0%B6%D0%B5%D0%B3%D0%BE%D0%B4%D0%BD%D0%BE%D0%B9%20%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D0%B8%20%D0%96%D0%B5%D0%BD%D1%89%D0%B8%D0%BD%D0%B0%20%D0%93%D0%BE%D0%B4%D0%B0"
                target="_blank"
                className={styles.link}
              >
                <strong style={{ fontSize: '1.1rem' }}>
                  20&nbsp;апреля 2024 года в&nbsp;Crocus Hall
                </strong>
              </a>
              . На&nbsp;самом модном событии года отметят и&nbsp;наградят самых
              ярких и&nbsp;успешных женщин России.
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
