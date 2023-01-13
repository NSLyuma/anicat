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
        </div>
      </div>
    </div>
  );
}

export default Anime;
