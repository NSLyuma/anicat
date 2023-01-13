import { Link } from 'react-router-dom';

export interface StandardComponentProps {
  link: string;
  text: string;
}

function Nav({ link, text }: StandardComponentProps) {
  return (
    <div>
      <nav className="nav">
        <Link to="/">Главная</Link>
        <Link to={`/${link}`}>{text}</Link>
      </nav>
    </div>
  );
}

export default Nav;
