import React from 'react';

const TVShow = (props) => {
  let {show} = props
  
  return (
    <div>
      <br/>
      <img src={props.image.medium} onClick={() => props.selectShow(show)} alt=""/>
    </div>
  );
}

export default TVShow;
