import React from 'react';

const SightSeeing = () => {
  return (
    <section className="sight-seeing">
      <div className="image-stack">
        <div className="image-stack__item image-stack__item--top">
          <img src="/src/img/image 6.png" alt="mars-people" />
        </div>
        <div className="image-stack__item image-stack__item--bottom">
          <img src="/src/img/Rectangle.png" alt="semi-transparent-rectancle" />
        </div>
        <div className="image-stack__item image-stack__item--middle">
          <img src="/src/img/mars-locations.jpg" alt="mars" />
        </div>
      </div>
      <div className="text-container">
        <h1>Sightseeing</h1>
        <h2>Venture off to see natural wonders like the volcano Olympus Mons or the canyon Hebes Chasma! <br /><br />

          Do not worry, Mars has never been tectonically active, so we do not expect an eruption anytime soon! <br /> <br />

          <span id="bolder">Your <span id="fancy-text">new world</span> awaits.</span>
        </h2>
      </div>
    </section>
  );
};

export default SightSeeing;
