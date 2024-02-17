import React from 'react';

function About() {
  return (
    <section className={`black section py-0 pt-4`}>
      <p className="content has-text-centered text-accent pt-2">
        Глянцевый журнал&nbsp;FB приглашает Вас принять участие в&nbsp;ежегодной
        ПРЕМИИ &laquo;ЖЕНЩИНА ГОДА&raquo; ПО&nbsp;ВЕРСИИ ЖУРНАЛА&nbsp;FB,
        которая состоится{' '}
        <strong
          className="text-accent"
          style={{ fontSize: '1.1rem' }}
        >
          20&nbsp;апреля 2024 года в&nbsp;Crocus Hall
        </strong>
        . На&nbsp;самом модном событии года отметят и&nbsp;наградят самых ярких
        и&nbsp;успешных женщин России.
      </p>
    </section>
  );
}

export default About;
