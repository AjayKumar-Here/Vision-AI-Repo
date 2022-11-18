import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import avatar from './profile.png';
import './profile.css';


class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div className="pa4 tc">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle
                tag="span"
                onClick={this.toggle}
                data-toggle="dropdown"
                aria-expanded={this.state.dropdownOpen}
              >
                <img src={avatar} className="demo br-100 h3 w3 dib grow  bg-white shadow-3" alt="avatar" />   
              </DropdownToggle>
              <DropdownMenu className='b--transparent shadow-5' style={{marginLeft: '-6rem', backgroundColor: 'rgba(255, 255, 255, 0.5)'}} >
                <DropdownItem onClick={() => this.props.toggleModal()}>View Profile</DropdownItem>
                <DropdownItem onClick={() => this.props.onRouteChange('signin')}>Sign Out</DropdownItem>
              </DropdownMenu>
            </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;