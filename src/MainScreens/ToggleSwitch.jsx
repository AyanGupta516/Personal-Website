import React, { useState } from 'react';

const ToggleSwitch = () => {
  const [LightMode, setLightMode] = useState(false);

  const toggleSwitch = () => {
    setLightMode(!(LightMode))
  };

  const switchStyles = {
    width: '60px',
    height: '30px',
    borderRadius: '30px',
    backgroundColor: LightMode ? '#B8E2F2' : '#222222',  
    position: 'relative',
    cursor: 'pointer',
  };

  const sliderStyles = {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    backgroundColor: LightMode ? '#FFF' :'#555555',
    backgroundImage: 'url(../assets/C++.svg)',
    position: 'absolute',
    top: '2px',
    left: LightMode ? '32px' : '2px',
    transition: 'left .7s ease',
  };

  return (
    <div style={switchStyles} onClick={toggleSwitch}>
      <div style={sliderStyles} />
    </div>
  );
};

export default ToggleSwitch;
