import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';
import Navigation from './components/navbar/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import ImageForm from './components/ImageForm/ImageForm';
import FaceRecognize from './components/FaceRecognize/FaceRecognize';
import Profile from './components/Profile/Profile';
import Modal from './components/Modal/Modal';
import './App.css';


 const initials = {
  input: '',
  imageUrl : '',
  box : {},
  route : 'signin',
  isSignedIn: false,
  isProfile: false,
  user : {
    id: '',
    name : '',
    email: '',
    count : 0,
    joined: ''
  }
 }

class App extends Component {
  constructor() {
    super();
    this.state = initials
  }

  LoadUser = (data) => {
    this.setState({  user : {
      id: data.id,
      name : data.name,
      email: data.email,
      count : data.count,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('imageinput');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  onInputChange =(event) =>{
    this.setState(
      {input : event.target.value}
    );
  }

  displayBox = (box) => {
    this.setState({box: box});
  }

  onImageSubmit = () => {
    this.setState({imageUrl: this.state.input});
    fetch('http://localhost:3000/imageurl', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          input: this.state.input
        })
      })
      .then(response => response.json())
      .then(response => {
        if (response) {
          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, { count: count}))
            })

        }
        this.displayBox(this.calculateFaceLocation(response))
      })
      .catch(err => console.log(err));
  }

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState(initials)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  toggleModal = () => {
    this.setState(state => ({
      ...state,
      isProfile: !state.isProfile,
    }));
  }

  render()
  {
    const { route, imageUrl, box ,isSignedIn , isProfile ,user} = this.state;
    return (
      <div className="App">
        <ParticlesBg type="cobweb" bg={true} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} toggleModal={this.toggleModal}/>
        {       
          isProfile&& 
          <Modal>
            <Profile isProfile={isProfile} toggleModal={this.toggleModal}  user={user}/>
          </Modal>
         
        }
        { route==='home' ?  
           <div>
              <Logo/>
              <Rank name ={user.name} entries ={user.count} />
              <ImageForm 
                  onInputChange={this.onInputChange}
                  onImageSubmit ={this.onImageSubmit }
              />
              <FaceRecognize box={box} imageUrl={imageUrl} />
              &nbsp;
            </div>
            : (
              route==='signin' 
              ? <SignIn  LoadUser = {this.LoadUser} onRouteChange={this.onRouteChange} />
              : <SignUp  onRouteChange={this.onRouteChange} />
            )

        }
   
      </div>
    );
  }

}

export default App;

