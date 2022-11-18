import React from 'react'
import avatar from './profile.png';
import './profile.css'

export default class Profile extends React.Component {
  render() {
    const { toggleModal, user } = this.props
    return (
      <div className='profile-modal'>
        <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 bg-white'>
          <main className='pa4 black-80 w-80'>
            <img
              src={avatar}
              className='h3 w3 dib' alt='avatar'
            />
            <h1>{user.name}</h1>
            <h5>{`Email: ${user.email}`}</h5>
            <h5>{`Images Submitted: ${user.count}`}</h5>
            <h6>{`Member Since: ${new Date(user.joined).toLocaleDateString()}`}</h6>
            &nbsp;
            <button className='b pa2 grow pointer hover-white w-30 bg-light-red b--black-20'
              id='btn-close'
              onClick={toggleModal}>
              Cancel
            </button>
          </main>
        </article>
      </div>
    );
  }
}
