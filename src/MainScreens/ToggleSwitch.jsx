import React from 'react';
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import { AppContext } from '../AppContext';
import { useContext} from 'react';
const ToggleSwitch = () => {
  const [LightMode, setLightMode] = useContext(AppContext)
  const toggleSwitch = () => {
    setLightMode(!(LightMode))
  };

  const switchStyles = {
    width: '60px',
    height: '30px',
    borderRadius: '30px',
    backgroundColor: LightMode ? '#B8E2F2' : '#222222',  
    position: 'relative',
  };

  const sliderStyles = {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    backgroundColor: LightMode ? '#FFF' :'#555555',
    backgroundImage: LightMode ? `url(${sun})`: `url(${moon})`,
    position: 'absolute',
    top: '2px',
    left: LightMode ? '32px' : '2px',
    transition: 'left .7s ease',
    cursor: 'pointer',
  };

  return (
    <div style={switchStyles} >
      <div style={sliderStyles} onClick={toggleSwitch} />
    </div>
  );
};

export default ToggleSwitch;
