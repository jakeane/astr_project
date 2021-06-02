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
        <div className="image-stack__item image-stack__item--middle2">
          <img src="/src/img/mars-perseverance.jpeg" alt="perseverance" />
        </div>
      </div>
      <div className="text-container">
        <h1>Sightseeing</h1>
        <h2>Venture off to see natural wonders like the volcano Olympus Mons or the canyon Hebes Chasma! <br /><br />

          Do not worry, Mars has never been tectonically active, so we do not expect an eruption anytime soon! <br /> <br />

          If you are brave enough, venture out to Jezero Crater to see the brand new Perseverance rover in action! You can see it operate
          7 instruments as it embarks on its primary mission to seek out signs of ancient life. <br /> <br />

          <span id="bolder">Check out the <span id="fancy-text"><a href="https://mars.nasa.gov/files/mars2020/Mars2020_Fact_Sheet.pdf">Perseverance Factsheet</a></span></span>
        </h2>
      </div>
    </section>
  );
};

export default SightSeeing;
