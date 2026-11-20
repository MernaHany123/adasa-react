import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="notfound">

      <b>404</b>

      <Link className="primary" to="/">
        العودة للرئيسية ←
      </Link>

    </section>
  );
}