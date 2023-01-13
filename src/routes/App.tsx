import { Link } from 'react-router-dom';
import '../styles/App.css';

function App() {
  return (
    <div className="back-main">
      <div className="main">
        <div className="main_btn">
          <h3 className="main_title">КотоГенератор</h3>
          <Link className="main_link main_link-cats" to="/cats"></Link>
        </div>

        <div className="main_btn">
          <h3 className="main_title">Поиск аниме и вайфу</h3>
          <Link className="main_link main_link-anime" to="/anime"></Link>
        </div>
      </div>
    </div>
  );
}

export default App;
