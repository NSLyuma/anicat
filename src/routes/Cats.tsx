import CatFact from '../components/CatFact';
import CatGif from '../components/CatGif';
import CatImg from '../components/CatImg';
import Nav from '../components/Nav';

function Cats() {
  return (
    <div className="back-cats">
      <div className="cats">
        <Nav link="anime" text="Поиск аниме и вайфу" />

        <div className="cats_files">
          <CatGif />
          <CatImg />
        </div>

        <CatFact />
      </div>
    </div>
  );
}

export default Cats;
