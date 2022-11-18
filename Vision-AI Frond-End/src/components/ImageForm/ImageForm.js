import React from 'react';
import './ImageForm.css';
import 'tachyons';

const ImageForm = ({onInputChange , onImageSubmit })=> {

  return (
    <div style={{display : "flex", justifyContent :"center"}}>
        <div style={{display : "flex", justifyContent :"center"}} className='bg-style pa4 br3 shadow-5'>
          <input className='w-70 f4 pa2 ' type="text" onChange={onInputChange}/>
          <button style={{ background: '#FF5EDF'}} className='w-30 f4 pa2 grow link white ' onClick={onImageSubmit } >Find</button>
        </div>
    </div>
  );
}

export default ImageForm;