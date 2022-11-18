import React from 'react';
import './Navigation.css';
import ProfileIcon from '../Profile/ProfileIcon';

const Navigation = ({isSignedIn , onRouteChange , toggleModal })=> {
    if(isSignedIn)
    {
        return (
          <nav className="navbar" style={{display : "flex", justifyContent :"flex-end"}}>
             <ProfileIcon onRouteChange={onRouteChange} toggleModal={toggleModal} />
          </nav>
        );
    }
    else{
          return(
            <nav className="navbar" style={{display : "flex", justifyContent :"flex-end"}}>
             <ul>
                <li><p className='pointer' onClick={() => onRouteChange('signin')} >Sign In</p></li>
                <li><p className='pointer' onClick={() => onRouteChange('signup')} > Sign Up</p></li>
             </ul>
            </nav>
          );
    }
}

export default Navigation;