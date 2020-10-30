import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import {animes} from './animes';
import Anime from './Anime';
function AnimeList(){
  return (
    <section className='animeList'>
     {animes.map((anime) => {
       return <Anime key={anime.id} {...anime}/>
     })}
    </section>
  );
}

ReactDom.render(<AnimeList/>, document.getElementById('root'));