import React from 'react';

function Movies() {
  return (
    <section className={`black section p-0 mt-6`}>
      <div className="container px-2">
        <p className="is-size-5 has-text-centered is-uppercase mt-4">
          Премия &laquo;Женщина Года&raquo; 2023 репортаж&nbsp;FB
        </p>
        <figure className="image is-16by9 mt-4">
          <iframe
            className="has-ratio"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SJFQ5ACVDbY?si=R7To72haQ65cwiIl"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </figure>

        <p className="is-size-5 has-text-centered is-uppercase mt-4">
          Премия &laquo;Женщина Года&raquo; 2022 репортаж&nbsp;FB
        </p>
        <figure className="image is-16by9 mt-4">
          <iframe
            className="has-ratio"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/QDFyXrIVLEI?si=7NttgHshvxvhe7Qw"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </figure>
      </div>
    </section>
  );
}

export default Movies;
