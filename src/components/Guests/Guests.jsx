import React from 'react';
import styles from './Guests.module.css';
import waveBottomSrc from './wave-bottom.png';
import Carousel from 'nuka-carousel';
import renderCenterLeftControls from '../RenderCenterLeftControls';
import renderCenterRightControls from '../RenderCenterRightControls';

import slide1Src from './slides/slide-1.png';
import slide2Src from './slides/slide-2.png';
import slide3Src from './slides/slide-3.png';
import slide4Src from './slides/slide-4.png';
import slide5Src from './slides/slide-5.png';
import slide6Src from './slides/slide-6.png';
import slide7Src from './slides/slide-7.png';
import slide8Src from './slides/slide-8.png';
import slide9Src from './slides/slide-9.png';
import slide10Src from './slides/slide-10.png';
import slide11Src from './slides/slide-11.png';
import slide12Src from './slides/slide-12.png';
import slide13Src from './slides/slide-13.png';
import slide14Src from './slides/slide-14.png';
import slide15Src from './slides/slide-15.png';
import slide16Src from './slides/slide-16.png';
import slide17Src from './slides/slide-17.png';
import slide18Src from './slides/slide-18.png';
import slide19Src from './slides/slide-19.png';
import slide20Src from './slides/slide-20.png';
import slide21Src from './slides/slide-21.png';
import slide22Src from './slides/slide-22.png';
import slide23Src from './slides/slide-23.png';
import slide24Src from './slides/slide-24.png';
import slide25Src from './slides/slide-25.png';
import slide26Src from './slides/slide-26.png';
import slide27Src from './slides/slide-27.png';
import slide28Src from './slides/slide-28.png';
import slide29Src from './slides/slide-29.png';
import slide30Src from './slides/slide-30.png';
import slide31Src from './slides/slide-31.png';
import slide32Src from './slides/slide-32.png';
import slide33Src from './slides/slide-33.png';
import slide34Src from './slides/slide-34.png';
import slide35Src from './slides/slide-35.png';
import slide36Src from './slides/slide-36.png';
import slide37Src from './slides/slide-37.png';
import slide38Src from './slides/slide-38.png';
import slide39Src from './slides/slide-39.png';
import slide40Src from './slides/slide-40.png';
import slide41Src from './slides/slide-41.png';
import slide42Src from './slides/slide-42.png';
import slide43Src from './slides/slide-43.png';
import slide44Src from './slides/slide-44.png';
import slide45Src from './slides/slide-45.png';
import slide46Src from './slides/slide-46.png';

import guest1Src from './images/guest-1.png';
import guest2Src from './images/guest-2.png';
import guest3Src from './images/guest-3.png';
import guest4Src from './images/guest-4.png';
import guest5Src from './images/guest-5.png';
import guest6Src from './images/guest-6.png';
import guest7Src from './images/guest-7.png';
import guest8Src from './images/guest-8.png';
import guest9Src from './images/guest-9.png';
import guest10Src from './images/guest-10.png';

function Guests() {
  return (
    <section className="section p-0 pt-5">
      <div className={styles.wrapper}>
        <div className="container px-2">
          <h2 className="is-size-4 has-text-centered is-uppercase text-accent">
            Гости церемонии
          </h2>
          <p className="has-text-centered text-accent pt-2 px-2">
            В&nbsp;числе почетных гостей: дизайнеры и&nbsp;директора модных
            домов, celebrities, главные редакторы fashion-изданий, спортсмены,
            актеры, бизнесмены и&nbsp;политики. Все они соберутся
            на&nbsp;церемонии награждения &laquo;ЖЕНЩИНА ГОДА&raquo;, чтобы
            отметить самые выдающиеся бренды и&nbsp;персоны в&nbsp;области
            бизнеса, моды, стиля и&nbsp;красоты, психологии по&nbsp;версии
            журнала&nbsp;<b>FB</b>
          </p>
          <Carousel
            className="pt-4"
            autoplay
            wrapAround
            speed="500"
            autoplayInterval="2000"
            renderCenterLeftControls={renderCenterLeftControls}
            renderCenterRightControls={renderCenterRightControls}
            renderBottomCenterControls="null"
          >
            <img src={slide1Src} />
            <img src={slide2Src} />
            <img src={slide3Src} />
            <img src={slide4Src} />
            <img src={slide5Src} />
            <img src={slide6Src} />
            <img src={slide7Src} />
            <img src={slide8Src} />
            <img src={slide9Src} />
            <img src={slide10Src} />
            <img src={slide11Src} />
            <img src={slide12Src} />
            <img src={slide13Src} />
            <img src={slide14Src} />
            <img src={slide15Src} />
            <img src={slide16Src} />
            <img src={slide17Src} />
            <img src={slide18Src} />
            <img src={slide19Src} />
            <img src={slide20Src} />
            <img src={slide21Src} />
            <img src={slide22Src} />
            <img src={slide23Src} />
          </Carousel>
          <div className="columns is-mobile is-gapless mb-0 mt-2">
            <div className="column mr-2">
              <figure className="image is-square">
                <img src={guest1Src} />
              </figure>
            </div>
            <div className="column">
              <figure className="image is-square">
                <img src={guest2Src} />
              </figure>
            </div>
          </div>
          <div className="columns is-mobile is-gapless mb-0 mt-2">
            <div className="column mr-2">
              <figure className="image is-square">
                <img src={guest3Src} />
              </figure>
            </div>
            <div className="column">
              <figure className="image is-square">
                <img src={guest4Src} />
              </figure>
            </div>
          </div>
          <div className="columns is-mobile is-gapless mb-0 mt-2">
            <div className="column mr-2">
              <figure className="image is-square">
                <img src={guest5Src} />
              </figure>
            </div>
            <div className="column">
              <figure className="image is-square">
                <img src={guest6Src} />
              </figure>
            </div>
          </div>

          <div className="mt-2">
            <Carousel
              autoplay
              wrapAround
              speed="500"
              autoplayInterval="2000"
              renderCenterLeftControls={renderCenterLeftControls}
              renderCenterRightControls={renderCenterRightControls}
              renderBottomCenterControls="null"
            >
              <img src={slide24Src} />
              <img src={slide25Src} />
              <img src={slide26Src} />
              <img src={slide27Src} />
              <img src={slide28Src} />
              <img src={slide29Src} />
              <img src={slide30Src} />
              <img src={slide31Src} />
              <img src={slide32Src} />
              <img src={slide33Src} />
              <img src={slide34Src} />
              <img src={slide35Src} />
              <img src={slide36Src} />
              <img src={slide37Src} />
              <img src={slide38Src} />
              <img src={slide39Src} />
              <img src={slide40Src} />
              <img src={slide41Src} />
              <img src={slide42Src} />
              <img src={slide43Src} />
              <img src={slide44Src} />
              <img src={slide45Src} />
              <img src={slide46Src} />
            </Carousel>
          </div>

          <div className="columns is-mobile is-gapless mb-0 mt-2">
            <div className="column mr-2">
              <figure className="image is-square">
                <img src={guest7Src} />
              </figure>
            </div>
            <div className="column">
              <figure className="image is-square">
                <img src={guest8Src} />
              </figure>
            </div>
          </div>
          <div className="columns is-mobile is-gapless mb-0">
            <div className="column mr-2">
              <figure className="image is-square">
                <img src={guest9Src} />
              </figure>
            </div>
            <div className="column">
              <figure className="image is-square">
                <img src={guest10Src} />
              </figure>
            </div>
          </div>
        </div>
        <img
          src={waveBottomSrc}
          className={styles.wave}
        />
      </div>
    </section>
  );
}

export default Guests;
