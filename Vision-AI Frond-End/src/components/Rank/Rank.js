import React from 'react';

const Rank = ({name,entries})=> {

  return (
    <div>
      <div className="f3 white">
          {`${name} , Your Image Search Count is ...`}
      </div>
      <div className="ma2 f1 white">
          {`#${entries}`}
      </div>
      <h4>{`Find a Face ssing AI Detection  with any Image url - Give It a try`}</h4>
    </div>
    
     
  );
}

export default Rank;