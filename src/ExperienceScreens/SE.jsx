import React from 'react';
import { AppContext } from '../AppContext';
import { useContext, useEffect} from 'react';
export default function SE() {
  const [LightMode] = useContext(AppContext)

    useEffect(() => {
      if (LightMode) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }, [LightMode]);
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '20px',
  };

  const headingStyle = {
    color: LightMode ? '#5596e6': '#3BBA9C',
    fontSize: '3rem', 
    marginTop: '-17.5%',
    width: '100%', 
    textAlign: 'center',
  };

  const listStyle = {
    textAlign: 'left',
    listStyle: 'disc',
    width: '100%', 
    fontSize: '1rem', 
    marginLeft: '0',
    paddingLeft: '2.5%', 
  };

  const listItemStyle = {
    color: LightMode ? 'black' : 'lightgrey',
    fontSize: '1.25rem',
    marginBottom: '3.5%',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>System Emulator</h1>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          Using C, I implemented a basic System Emulator that processed Assembly instructions and replicated a cache
          system
        </li>
        <li style={listItemStyle}>
          I implemented Instruction Pipelining, including fetching, decoding, and executing assembly instructions that
          were given. In addition, I handled any data or control hazards that arose while processing
        </li>
        <li style={listItemStyle}>
          In addition, I implemented a basic cache system, that used the LRU policy to evict and bring in new cache lines
          into the cache
        </li>
      </ul>
    </div>
  );
}
