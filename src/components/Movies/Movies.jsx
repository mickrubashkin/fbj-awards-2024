import React from 'react';

function Movies() {
  return (
    <section className={`black section p-0 mt-6`}>
      <div className="container px-2">
        <p className="is-size-5 has-text-centered is-uppercase mt-4">
          Премия &laquo;Женщина Года&raquo; 2023
        </p>
        <figure className="image is-16by9 mt-4">
          <iframe
            className="has-ratio"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/118jGv7jUD0?si=cYZj1Qe4qfvOppQB"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </figure>

        <p className="is-size-5 has-text-centered is-uppercase mt-4">
          Премия &laquo;Люди Года&raquo; 2023
        </p>
        <figure className="image is-16by9 mt-4">
          <iframe
            className="has-ratio"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/C7MNHegivNk?si=nN9ETswfcMCPQ2i9"
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
