import React from 'react';

const Welcome = () => {
  return (
    <section className="welcome">
      <div className="title-container">
        <div className="title">
          <h2>Welcome</h2>
          <h1>HOME</h1>
        </div>
        <div className="btn-wrapper">
          <button type="button" className="cta-btn">Book a Tour</button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
