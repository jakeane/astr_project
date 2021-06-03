import React from 'react';

const Amenities = () => {
  return (
    <section className="amenities">
      <div className="left">
        <div className="facts-horiz">
          <div className="facts">
            <p><span className="fancy">Transportation Station</span> <br /> Never feel stuck with the state of the state of the art space station in your back door.</p>
          </div>
          <div className="facts">
            <p><span className="fancy">Open Courtyard</span> <br /> Gather around and socialize in the beautifully landscaped courtyard with Earth plants and soil.</p>
          </div>
          <div className="facts">
            <p><span className="fancy">Fitness Studio</span> <br /> With gravity 38% as strong as Earth, you are bound to have an amazing workout.</p>
          </div>
        </div>
        <div className="pod" />
      </div>
      <div className="right">
        <h1>Amenities</h1>
        <h3>Modern Conveniences Inside and Out</h3>
        <div className="facts">
          <p><span className="fancy">24 Hour Security</span> <br /> You can keep your mind on living and let us handle the rest.</p>
        </div>
        <div className="facts">
          <p><span className="fancy">Rent-a-car</span> <br /> Autonomous driving brought to you by rover-collected data.</p>
        </div>
        <div className="facts">
          <p><span className="fancy">No Electricity Bills</span> <br /> Take advantage of Mars&apos; lack of atmosphere and save.</p>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
