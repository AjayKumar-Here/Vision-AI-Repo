import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: ' ' //Get Your Clarifai API - clarifai.com
 });

const ImagePrediction =(req,res)=>{
  app.models
  .predict( Clarifai.FACE_DETECT_MODEL,req.body.input)
  .then(data =>{
    res.json(data);
  })
  .catch(err => {res.status(400).json("Unable to Fetch API")})

}

export default ImagePrediction;
