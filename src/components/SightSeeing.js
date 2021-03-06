import React from 'react';

import image6 from '../img/image 6.png';
import rectangle from '../img/Rectangle.png';
import perseverance from '../img/mars-perseverance.jpeg';

const SightSeeing = () => {
  return (
    <section className="sight-seeing">
      <div className="image-stack">
        <div className="image-stack__item image-stack__item--top">
          <img src={image6} alt="mars-people" />
        </div>
        <div className="image-stack__item image-stack__item--bottom">
          <img src={rectangle} alt="semi-transparent-rectancle" />
        </div>
        <div className="image-stack__item image-stack__item--middle2">
          <img src={perseverance} alt="perseverance" />
        </div>
      </div>
      <div className="text-container">
        <h1>Sightseeing</h1>
        <p>Venture off to see natural wonders like the volcano Olympus Mons or the canyon Hebes Chasma! <br /><br />

          Do not worry, Mars has never been tectonically active, so we do not expect an eruption anytime soon! <br /> <br />

          If you are brave enough, venture out to Jezero Crater to see the brand new Perseverance rover in action! You can see it operate
          7 instruments as it embarks on its primary mission to seek out signs of ancient life. <br /> <br />

          <span id="bolder">Check out the <span id="fancy-text"><a href="https://mars.nasa.gov/files/mars2020/Mars2020_Fact_Sheet.pdf" target="_blank ">Perseverance Factsheet</a></span></span>
        </p>
      </div>
    </section>
  );
};

export default SightSeeing;
