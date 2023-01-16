import { Link } from 'react-router-dom';
import AnimeFind from '../components/AnimeFind';
import AnimeWaifu from '../components/AnimeWaifu';
import Nav from '../components/Nav';

function Anime() {
  return (
    <div className="back-anime">
      <div className="anime">
        <Nav link="cats" text="КотоГенератор" />

        <div className="anime_items">
          <AnimeWaifu />
          <AnimeFind />
          <Link className="anime_btn anime_game" to="/game">
            Хочу поиграть!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Anime;
