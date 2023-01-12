import { Link } from 'react-router-dom';
import '../styles/App.css';

function App() {
  return (
    <div className="main">
      <div className="btn">
        <h3 className="btn_name">КотоГенератор</h3>
        <Link className="link link_cats" to="/cats"></Link>
      </div>

      <div className="btn">
        <h3 className="btn_name">Поиск аниме и вайфу</h3>
        <Link className="link link_anime" to="/anime"></Link>
      </div>
    </div>
  );
}

export default App;
