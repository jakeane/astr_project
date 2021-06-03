import React from 'react';

const Welcome = ({ containerRef }) => {
  const scrollToBookATour = () => {
    containerRef.current.scrollTo({
      top: 5 * window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="welcome">
      <div className="welcome-container">
        <div className="title">
          <h2>WELCOME</h2>
          <h1>HOME</h1>
        </div>
        <div className="btn-wrapper">
          <button
            type="button"
            className="cta-btn"
            onClick={scrollToBookATour}
          >
            Book a Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
