
const SigninHandler = (req,res,db,bcrypt) =>{
  
  const {email ,password} = req.body;

  if( !email || !password)
  {
     return res.status(400).json("Incorrect Values");
  }
  else
  {
    db.select('email','hash').from('login')
    .where('email' ,'=', email)
    .then(data =>{
     const key =bcrypt.compareSync(password, data[0].hash);
     if(key){
         return db.select('*').from('users')
         .where('email' ,'=', email)
         .then(user =>{
           res.json(user[0])
         })
         .catch(err => {res.status(400).json("User Not Found")})
       }
       else{
         res.status(404).json("Username Or Passwors are Incorrect");
       }
    })
    .catch(err => {res.status(400).json("Username Or Passwors are Incorrect")})
  }

   
  }

  export default SigninHandler;