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
            <div className="pt-3">
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
