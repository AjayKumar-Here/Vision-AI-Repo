
const ImageHandler = (req,res,db) =>{

  const id  = req.body.id;

  db('users').where({id : id})
  .increment('count',1)
  .returning('count')
  .then(count => {
     res.json(count[0].count);
    })
    .catch(err => {res.status(400).json("Unable to Get Count")})

}


export default ImageHandler;
