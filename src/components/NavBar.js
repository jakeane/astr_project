import React from 'react';

const NavBar = ({ containerRef, currentSection }) => {
  const sectionNames = [
    'Welcome',
    'Floor Plans',
    'Sight Seeing',
    'Amenities',
    'Life on Mars',
    'Select Seat',
    'Apply',
  ];

  const getColor = (i) => (
    i === currentSection
      ? '#FFC297'
      : 'grey'
  );

  const handleNavClick = (i) => {
    containerRef.current.scrollTo({
      top: i * window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <nav>
      {sectionNames.map((section, i) => (
        <h3
          style={{ color: getColor(i) }}
          onClick={() => handleNavClick(i)}
        >
          {section}
        </h3>
      ))}
    </nav>
  );
};

export default NavBar;
