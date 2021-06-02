import React, { useRef, useState } from 'react';

import '../style.scss';
import Amenities from './Amenities';
import Apply from './Apply';
import FloorPlans from './FloorPlans';
import LifeOnMars from './LifeOnMars';
import NavBar from './NavBar';
import SelectSeat from './SelectSeat';
import SightSeeing from './SightSeeing';
import Welcome from './Welcome';

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    const section = Math.round(e.target.scrollTop / window.innerHeight);
    setCurrentSection(section);
  };

  return (
    <div
      className="container"
      onScroll={handleScroll}
      ref={containerRef}
    >
      <h3 className="company">JJT Realtors</h3>
      <NavBar
        containerRef={containerRef}
        currentSection={currentSection}
      />
      <Welcome />
      <FloorPlans />
      <SightSeeing />
      <Amenities />
      <LifeOnMars />
      <SelectSeat />
      <Apply />
    </div>
  );
};

export default App;
