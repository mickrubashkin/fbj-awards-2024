import React from 'react';

function Movies() {
  return (
    <section className={`black section p-0 mt-6`}>
      <div className="container px-2">
        <p className="is-size-5 has-text-centered is-uppercase mt-4">
          Премия &laquo;Женщина Года&raquo; 2024
        </p>
        <figure className="image is-16by9 mt-4">
          <iframe
            className="has-ratio"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/39dVGQ6i63o?si=c3_3O7U_eizvb4Ys"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </figure>

        <p className="is-size-5 has-text-centered is-uppercase mt-4">
          Премия &laquo;Люди Года&raquo; 2024
        </p>
        <figure className="image is-16by9 mt-4">
          <iframe
            className="has-ratio"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zqckdjiN5P4?si=iH_-64tt5MZrf5Vw"
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
