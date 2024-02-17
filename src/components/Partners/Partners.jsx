import React from 'react';
import styles from './Partners.module.css';

import partnerSrc1 from './images/partner-1.png';
import partnerSrc2 from './images/partner-2.png';
import partnerSrc3 from './images/partner-3.png';
import partnerSrc4 from './images/partner-4.png';
import partnerSrc5 from './images/partner-5.png';
import partnerSrc6 from './images/partner-6.png';
import partnerSrc7 from './images/partner-7.png';
import partnerSrc8 from './images/partner-8.png';
import partnerSrc9 from './images/partner-9.png';
import partnerSrc10 from './images/partner-10.png';
import partnerSrc11 from './images/partner-11.png';
import partnerSrc12 from './images/partner-12.png';
import partnerSrc13 from './images/partner-13.png';
import partnerSrc14 from './images/partner-14.png';
import partnerSrc15 from './images/partner-15.png';
import partnerSrc16 from './images/partner-16.png';

function Partners() {
  return (
    <section className="section black pb-0 pt-5 px-4">
      <h2 className="is-size-4 has-text-centered is-uppercase">
        Наши партнеры
      </h2>
      <p className="content has-text-centered pt-2">
        Мероприятие будут освещать федеральные средства массовой информации.
      </p>

      <div className="px-0">
        <div className={styles['items-wrapper']}>
          <div className={`${styles.run} columns is-mobile is-gapless mb-0`}>
            <div className={`column px-2`}>
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc1} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc2} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc3} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc4} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc5} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc6} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc7} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc8} />
              </figure>
            </div>
          </div>

          <div
            className={`${styles.run} ${styles.reverse} columns is-mobile is-gapless mb-0`}
          >
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc9} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc10} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc11} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc12} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc13} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc14} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc15} />
              </figure>
            </div>
            <div className="column px-2">
              <figure className="image is-128x128 px-2">
                <img src={partnerSrc16} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
