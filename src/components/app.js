import React from 'react';

import '../style.scss';
import Amenities from './Amenities';
import Apply from './Apply';
import FloorPlans from './FloorPlans';
import LifeOnMars from './LifeOnMars';
import SelectSeat from './SelectSeat';
import SightSeeing from './SightSeeing';
import Welcome from './Welcome';

const App = () => {
  return (
    <div className="container">
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
