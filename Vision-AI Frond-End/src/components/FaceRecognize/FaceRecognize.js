import React from 'react';
import "./facerecognize.css";

const FaceRecognize = ({imageUrl , box})=> {

  return (
    <div style={{display : "flex", justifyContent :"center"}}>
        <div className="absolute mt2">
            <img id='imageinput' src={imageUrl} width='350px' height='auto' alt="" />
            <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        </div>
    </div>
    
  );
}

export default FaceRecognize;