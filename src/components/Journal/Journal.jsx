import React from 'react';
import styles from './Journal.module.css';

import Carousel from 'nuka-carousel';
import renderCenterLeftControls from '../RenderCenterLeftControls';
import renderCenterRightControls from '../RenderCenterRightControls';

import cover1Src from './cover-1.png';
import cover2Src from './cover-2.png';
import cover4Src from './cover-4.png';
import cover5Src from './cover-5.png';
import waveBottomSrc from './wave-bottom.png';

function Journal() {
  return (
    <section className="section bg-grey p-0 pt-5">
      <div className={styles.wrapper}>
        <div className="container px-4">
          <h2 className="is-size-4 has-text-centered is-uppercase text-accent">
            О журнале
          </h2>
          <p className="content has-text-centered text-accent pt-2">
            FB&nbsp;&mdash; это крупнейший светский портал и&nbsp;журнал
            о&nbsp;моде, красоте и&nbsp;стиле жизни! Новости из&nbsp;жизни
            звезд, открытия и&nbsp;новинки из&nbsp;мира красоты, яркие
            фотогалереи, эксклюзивные репортажи с&nbsp;красных дорожек
            и&nbsp;светские хроники, а&nbsp;также советы и&nbsp;консультации
            ведущих экспертов в&nbsp;области красоты, моды, здоровья
            и&nbsp;психологии&nbsp;&mdash; все это лишь малая часть того, что
            ждет тех, кто{' '}
            <a
              href="http://fb-j.ru/"
              target="_blank"
              className={styles.link}
            >
              <b>выбирает&nbsp;FB</b>
            </a>
          </p>
          <Carousel
            autoplay
            wrapAround
            speed="500"
            autoplayInterval="2000"
            renderCenterLeftControls={renderCenterLeftControls}
            renderCenterRightControls={renderCenterRightControls}
            renderBottomCenterControls="null"
          >
            <img src={cover1Src} />
            <img src={cover2Src} />
            <img src={cover4Src} />
            <img src={cover5Src} />
          </Carousel>
        </div>
        <img
          src={waveBottomSrc}
          className={styles.wave}
        />
      </div>
    </section>
  );
}

export default Journal;
