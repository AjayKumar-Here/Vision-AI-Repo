import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css';
//Import Your Logo

const Logo = ()=> {

  return (
    <div  className="ma4 mt0">
      <Tilt  className="Tilt br2 shadow-2 " options={{ max : 55 }} style={{ height: 130, width: 130 }} >
      <div className="Tilt-inner pa3">
          <img alt='' src=' ' />
      </div>
    </Tilt>
      
    </div>
  );
}

export default Logo;