import React from 'react';

import validator from 'validator';

import './Signin.css';

class SignIn extends React.Component  {

  constructor(props)
  {
     super(props);
       this.state ={
        EmailSignIn : '',
        PasswordSignIn : ''
       }
  }

  onEmailSignIn = (event) => {

    this.setState({
      EmailSignIn : event.target.value
    })
 
  }

  onPasswordSignIn = (event) =>{
    this.setState({
      PasswordSignIn : event.target.value
    })
  }

  onSubmitChange =()=>{

    if(validator.isEmail(this.state.EmailSignIn))
    {
          fetch('http://localhost:3000/signin', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            email: this.state.EmailSignIn,
            password: this.state.PasswordSignIn
          })
        })
        .then(response => response.json())
        .then(user => {
          if(user.id)
          {
            this.props.LoadUser(user);
            this.props.onRouteChange('home');
          }
          else{
            window.alert('Incorrect Username or Password');
          }
        })
    }
    else{
      window.alert('Invalid Email');
    }
    


    
   
  }

  render(){
    const { onRouteChange } = this.props;
    return (
          <article className="br3 ba b--black-10 mv4 w-80 w-50-m w-25-l mw6 shadow-5 center">
              <main className="pa4 black-80">
                  <div className="measure">
                    <fieldset id="sign_in" className="ba b--transparent ph0 mh0 ">
                      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
                      <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                        <input 
                            className="btn-input input-reset" 
                            type="email" 
                            name="email-address"  
                            id="email-address" 
                            onChange = {this.onEmailSignIn}
                        />
                      </div>
                      <div className="mv3">
                        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                        <input 
                            className="btn-input input-reset" 
                            type="password" 
                            name="password"  
                            id="password" 
                            onChange = {this.onPasswordSignIn}
                        />
                      </div>
                    </fieldset>
                    <div className="">
                      <input 
                          onClick ={this.onSubmitChange}  
                          className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib hover-white" 
                          type="submit" 
                          value="Sign in" />
                    </div>
                    <div className="lh-copy mt3">
                      <p  
                          onClick={() => onRouteChange('register')}
                          className="f6 link black db pointer"
                      >Sign Up</p>
                    </div>
                  </div>
                </main>
          </article>
    );
  }

 
}

export default SignIn;