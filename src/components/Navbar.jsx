import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="header">
      <nav className="container navbar">

        <Link to="/" className="brand">
          <b>ع</b>

          <span>
            <strong>عدسة</strong>
            <small>عالم التصوير الفوتوغرافي</small>
          </span>
        </Link>

        <div className="navlinks">
          <NavLink to="/" end>
            الرئيسية
          </NavLink>

          <NavLink to="/blog">
            المدونة
          </NavLink>
        </div>

        <Link to="/blog" className="navbtn">
         ابدأ القراءة 
        </Link>

      </nav>
    </header>
  );
}