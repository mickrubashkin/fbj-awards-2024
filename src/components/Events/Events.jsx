import React from 'react';
import styles from './Events.module.css';
import waveSrc from './wave-bottom.png';
import svgSrc1 from './svg/svg1.svg';
import svgSrc2 from './svg/svg2.svg';
import svgSrc3 from './svg/svg3.svg';
import svgSrc4 from './svg/svg4.svg';
import svgSrc5 from './svg/svg5.svg';
import svgSrc6 from './svg/svg6.svg';
import svgSrc7 from './svg/svg7.svg';

function Events() {
  return (
    <section className="section p-0 bg-light-grey">
      <div className={styles.wrapper}>
        <div className="container px-2 pt-5">
          <h2
            className={`${styles.title} is-size-4 has-text-centered is-uppercase`}
          >
            В&nbsp;ПРОГРАММЕ МЕРОПРИЯТИЯ
          </h2>

          <div className="columns is-mobile is-gapless mb-0 my-4">
            <div className="column">
              <figure className="image is-rounded is-96x96 mx-auto">
                <img
                  className={styles.img}
                  src={svgSrc1}
                  width="100"
                />
              </figure>
              <p className="has-text-centered pt-2">Красная дорожка</p>
            </div>
            <div className="column">
              <figure className="image is-rounded is-96x96 mx-auto">
                <img src={svgSrc2} />
              </figure>
              <p className="has-text-centered pt-2">Коктейль-фуршет</p>
            </div>
          </div>

          <div className="columns is-mobile is-gapless my-5 mt-2">
            <div className="column">
              <figure className="image is-rounded is-96x96 mx-auto">
                <img
                  className={styles.img}
                  src={svgSrc3}
                  width="100"
                />
              </figure>
              <p className="has-text-centered pt-2">
                Выступление популярных артистов
              </p>
            </div>
            <div className="column">
              <figure className="image is-rounded is-96x96 mx-auto">
                <img src={svgSrc4} />
              </figure>
              <p className="has-text-centered pt-2">Церемония награждения</p>
            </div>
          </div>

          <div className="columns is-mobile is-gapless my-5 mt-2">
            <div className="column">
              <figure className="image is-rounded is-96x96 mx-auto">
                <img
                  className={styles.img}
                  src={svgSrc5}
                  width="100"
                />
              </figure>
              <p className="has-text-centered pt-2">Fashion show</p>
            </div>
            <div className="column">
              <figure className="image is-rounded is-96x96 mx-auto">
                <img src={svgSrc6} />
              </figure>
              <p className="has-text-centered pt-2">Afterparty</p>
            </div>
          </div>

          <div className="columns is-mobile is-gapless mt-2">
            <div className="column">
              <figure className="image is-rounded is-96x96 mx-auto">
                <img
                  className={styles.img}
                  src={svgSrc7}
                  width="100"
                />
              </figure>
              <p className={`${styles.narrow} has-text-centered pt-2`}>
                Именная рассадка в&nbsp;формате банкета <br />
                (350&nbsp;персон)
              </p>
            </div>
          </div>
        </div>
        <div className="pb-6"></div>
        <div className="pb-2"></div>
        <img
          src={waveSrc}
          className={styles.wave}
        />
      </div>
    </section>
  );
}

export default Events;
