import React from 'react';
import styles from './Offers.module.css';
import Accordion from '../Accordion';
import logoSrc from './logo_f.png';

function Offers() {
  return (
    <section className="section p-0 pt-5 pb-4 bg-light-grey">
      <div className={`${styles.wrapper} mx-2 px-4`}>
        <p className="has-text-centered pt-4">
          Предлагаем Вам стать партнерами мероприятия. Мы&nbsp;подготовили для
          вас три вида партнёрских программ.
        </p>

        <div className="pt-5">
          <p className="is-size-4 has-text-centered is-uppercase">
            ПАРТНЁРСКИЙ
          </p>
          <Accordion className="pt-2">
            <p className="has-text-centered is-uppercase">рекламный пакет</p>
            <p className="has-text-centered is-uppercase is-size-4">
              Партнёрский
            </p>
            <div>
              <img
                src={logoSrc}
                width="72"
                className="mx-auto mt-2 mb-4"
              />
            </div>
            <p>Вы получаете:</p>
            <ul className={styles.list}>
              <li>Прохождение красной дорожки. </li>
              <li>Приветствие Ведущей дорожки перед прессой</li>
              <li>
                Именные <strong>VIP пригласительные</strong>{' '}
                на&nbsp;церемонию&nbsp;&mdash;&nbsp;2
              </li>
              <li>
                Интервью для эфира каналов: <strong>Fashion TV</strong>&nbsp;или{' '}
                <strong>Music Box</strong> (один канал)
              </li>
              <li>Предоставление фотографа на&nbsp;весь вечер мероприятия</li>
              <li>
                Предоставление фото и&nbsp;видео-отчетов Премии для
                использования в&nbsp;PR-целях Партнёра
              </li>
            </ul>

            <div className="">
              <p className="has-text-centered mt-4 has-text-weight-bold">
                Стоимость пакета :
              </p>
              <p className="is-size-2 has-weight-bold has-text-centered">
                150 000
              </p>
            </div>
          </Accordion>
        </div>

        <hr className={styles.divider} />

        <div className="pt-5">
          <p className="is-size-4 has-text-centered is-uppercase">
            ПРЕМИАЛЬНЫЙ
          </p>
          <Accordion className="pt-2">
            <p className="has-text-centered is-uppercase">рекламный пакет</p>
            <p className="has-text-centered is-uppercase is-size-4">
              ПРЕМИАЛЬНЫЙ
            </p>
            <div>
              <img
                src={logoSrc}
                width="72"
                className="mx-auto mt-2 mb-4"
              />
            </div>
            <p>Вы получаете:</p>
            <ul className={styles.list}>
              <li>Прохождение красной дорожки. </li>
              <li>Приветствие Ведущей дорожки перед прессой</li>
              <li>
                Именные <strong>VIP пригласительные</strong>{' '}
                на&nbsp;церемонию&nbsp;&mdash;&nbsp;2
              </li>
              <li>
                <strong>Личная номинация</strong> и&nbsp;вручение премии
                на&nbsp;сцене
              </li>
              <li>Предоставление фотографа на&nbsp;весь вечер мероприятия</li>
              <li>
                Предоставление фото и&nbsp;видео-отчетов Премии для
                использования в&nbsp;PR-целях Партнёра
              </li>
              <li>
                <strong>Создание видеофильма</strong>, который будет
                транслироваться на&nbsp;экране на&nbsp;сцене (
                в&nbsp;то&nbsp;время, пока вы&nbsp;поднимаетесь на&nbsp;сцену)
              </li>
            </ul>

            <div className="">
              <p className="has-text-centered mt-4 has-text-weight-bold">
                Стоимость пакета :
              </p>
              <p className="is-size-2 has-weight-bold has-text-centered">
                300 000
              </p>
            </div>
          </Accordion>
        </div>

        <hr className={styles.divider} />

        <div className="pt-5">
          <p className="is-size-4 has-text-centered is-uppercase">
            ГЕНЕРАЛЬНЫЙ
          </p>
          <Accordion className="pt-2">
            <p className="has-text-centered is-uppercase">рекламный пакет</p>
            <p className="has-text-centered is-uppercase is-size-4">
              ГЕНЕРАЛЬНЫЙ
            </p>
            <div>
              <img
                src={logoSrc}
                width="72"
                className="mx-auto mt-2 mb-4"
              />
            </div>
            <p>Вы получаете:</p>
            <ul className={styles.list}>
              <li>
                Прохождение красной дорожки. Приветствие Ведущей дорожки перед
                прессой{' '}
              </li>
              <li>
                Именные VIP пригласительные на&nbsp;церемонию&nbsp;&mdash; 2-3
              </li>
              <li>
                Размещение логотипа Партнера на&nbsp;пригласительных церемонии
              </li>
              <li>Размещение логотипа Партнера на&nbsp;Press Wall</li>
              <li>Размещение логотипа Партнера на&nbsp;афише</li>
              <li>
                Размещение имиджевого стенда Партнёра на&nbsp;площадке
                мероприятия (по&nbsp;согласованию)
              </li>
              <li>
                Трансляция логотипа Партнёра и&nbsp;ролика
                (до&nbsp;30&nbsp;секунд) на&nbsp;плазменном экране в&nbsp;зале
                во&nbsp;время представления партнера Ведущим церемонии
              </li>
              <li>
                Выход на&nbsp;сцену и&nbsp;приветственное слово на&nbsp;сцене
              </li>
              <li>
                Интервью для эфира каналов: Муз Тв, ЖАРА, Fashion TV, Music Box
                (на&nbsp;выбор один канал). Вручение лично подарков звездным
                гостям
              </li>
              <li>Предоставление фотографа на&nbsp;весь вечер мероприятия</li>
              <li>
                Предоставление фото-отчетов для использования в&nbsp;PR-целях
                Партнёра
              </li>
              <li>Публикация в&nbsp;журнале&nbsp;FB (страница)</li>
            </ul>

            <div className="">
              <p className="has-text-centered mt-4 has-text-weight-bold">
                Стоимость пакета :
              </p>
              <p className="is-size-2 has-weight-bold has-text-centered">
                800 000
              </p>
            </div>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Offers;
