import AnimeFind from '../components/AnimeFind';
import AnimeWaifu from '../components/AnimeWaifu';
import Nav from '../components/Nav';

function Anime() {
  return (
    <div>
      <Nav link="cats" text="КотоГенератор" />
      <AnimeFind />
      <AnimeWaifu />
    </div>
  );
}

export default Anime;
