import React from 'react'

const Anime = (props) => {
  const {img, title, rating} = props;
  return (
  <article className='anime'>
    <img src={img} alt=''/>
    <h2>{title}</h2>
    <h4>{rating}</h4>
  </article>
  );
};

export default Anime
