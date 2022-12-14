import React from 'react';

import validator from 'validator';

class SignUp extends React.Component {
  constructor(props)
  {
    super(props);
      this.state ={
        NameSignUp :'',
        EmailSignUp : '',
        PasswordSignUp : ''
      }
  }

  onNameSignUp = (event) => {
    this.setState({
      NameSignUp : event.target.value
    })
  }
  onEmailSignUp = (event) => {
    this.setState({
      EmailSignUp : event.target.value
    })
  }

  onPasswordSignUp = (event) =>{
    this.setState({
      PasswordSignUp : event.target.value
    })
  }

  onSubmitChange =()=>{

  if( !this.state.NameSignUp || !this.state.EmailSignUp || !this.state.PasswordSignUp)
  {
     return window.alert("Please Enter Values");
  }
  else if(validator.isEmail(this.state.EmailSignUp))
  {
        fetch('http://localhost:3000/signup', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            name : this.state.NameSignUp,
            email: this.state.EmailSignUp,
            password: this.state.PasswordSignUp
          })
        })
        .then(response => response.json())
        .then(data => {
          if(data === 'success')
          {
            this.props.onRouteChange('signin');
          }
          else{
            window.alert('This User Already Exists');
          }
        })
      }
      else{
        window.alert('Invalid Email');
      }

  }
  render() {
 
    return (
          <article className="br3 ba b--black-10 mv4 w-80 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 black-80">
                  <div className="measure center">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0 ">
                      <legend className="f2 fw6 ph0 mh0">Sign Up</legend>
                      <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input 
                            onChange={this.onNameSignUp}
                            className="btn-input input-reset " 
                            type="text" 
                            name="name"  
                            id="name" 
                            required = "required"
                        />
                      </div>
                      <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                            onChange={this.onEmailSignUp}
                            className="btn-input input-reset" 
                            type="email" 
                            name="email-address"  
                            id="email-address" 
                        />
                      </div>
                      <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            onChange={this.onPasswordSignUp}
                            className="btn-input input-reset" 
                            type="password" 
                            name="password"  
                            id="password" 
                        />
                      </div>
                    </fieldset>
                    <div className="">
                      <input
                          onClick={this.onSubmitChange} 
                          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hover-white" 
                          type="submit" 
                          value="Register" />
                    </div>
                  </div>
                </main>
          </article>
    );
  }

}

export default SignUp;