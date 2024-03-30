import React from 'react';
import styles from './Footer.module.css';
import ytSrc from './yt.svg';
import instSrc from './inst.svg';
import waSrc from './wa.svg';

function Footer() {
  return (
    <footer className="footer bg-black">
      <div className="columns is-mobile">
        <div className="column">
          <div className="has-text-centered">
            <p className="is-size-3 text-accent ">контакты</p>
            <div className="pt-5">
              <p className=" text-accent has-text-weight-bold">
                Диана Фадзаева
              </p>
              <p className={styles.job}>Генеральный директор</p>
              <a
                className={`${styles.link} text-accent`}
                href="tel:+79055295511"
              >
                +7&nbsp;905 529-55-11
              </a>
            </div>
            <div className="pt-5">
              <p className=" text-accent has-text-weight-bold">Виталий Аляев</p>
              <p className={styles.job}>Заместитель Руководителя</p>
              <a
                className={`${styles.link} text-accent`}
                href="tel:+79631772070"
              >
                +7&nbsp;963 177-20-70
              </a>
            </div>
            <div className="pt-6">
              <div className={styles.social}>
                <a
                  href="https://wa.me/+79055295511"
                  target="_blank"
                >
                  <img src={waSrc} />
                </a>
                <a
                  href="https://www.instagram.com/fb_journal/?utm_source=ig_profile_share&igshid=1xw5loasikkwj"
                  target="_blank"
                >
                  <img src={instSrc} />
                </a>
                <a
                  href="https://www.youtube.com/@dianafadzaeva"
                  target="_blank"
                >
                  <img src={ytSrc} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
