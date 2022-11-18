const RegisterHandler = (req,res,db,bcrypt)=>{

  const {name , email ,password} = req.body;

  if( !email || !password || !name)
  {
     return res.status(400).json("Incorrect Values");
  }


  const hash = bcrypt.hashSync(password);

  db.transaction(trx =>{
   trx.insert({
     hash : hash,
     email : email
   })
  .into('login')
  .returning('email')
  .then( ReturnEmail =>{
       return trx('users').insert({
       name : name,
       email : ReturnEmail[0].email,
       joined : new Date()
     })
     .then(user => {
         if(user){
           res.json('success');
         }
     })
  })
  .then(trx.commit)
  .catch(trx.rollback)
 })
 .catch(err => {res.status(404).json("User Already Exits")})
}

export default RegisterHandler;