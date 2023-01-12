import { Link } from 'react-router-dom';
import '../styles/App.css';

function App() {
  return (
    <div>
      <Link to="/cats">КотоГенератор</Link>
      <Link to="/anime">Поиск аниме и вайфу</Link>
    </div>
  );
}

export default App;
