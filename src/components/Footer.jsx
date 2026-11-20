import { Link } from 'react-router-dom';
import { siteInfo } from '../data/siteInfo';

const categories = [
  'إضاءة',
  'بورتريه',
  'مناظر طبيعية',
  'تقنيات',
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">ع</span>
              <strong>عدسة</strong>
            </Link>
            <p>
              مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار
              المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            <div className="footer-socials" aria-label="روابط التواصل الاجتماعي">
              <a href={siteInfo.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">▶</a>
              <a href={siteInfo.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">GH</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">𝕏</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>استكشف</h4>
            <Link to="/">الرئيسية</Link>
            <Link to="/blog">المدونة</Link>
            <a href="#about">من نحن</a>
          </div>

          <div className="footer-column">
            <h4>التصنيفات</h4>
            {categories.map((category) => (
              <Link key={category} to="/blog">{category}</Link>
            ))}
          </div>

          <div className="footer-newsletter">
            <h4>ابقى على اطلاع</h4>
            <p>اشترك للحصول على أحدث المقالات والتحديثات.</p>
            <form onSubmit={(event) => event.preventDefault()}>
              <input type="email" placeholder="أدخل بريدك الإلكتروني" aria-label="البريد الإلكتروني" required />
              <button type="submit">اشترك</button>
            </form>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container copyright-inner">
          <p>© 2026 عدسة. صنع بكل <span>♥</span> جميع الحقوق محفوظة.</p>
          <div>
            <a href="#privacy">سياسة الخصوصية</a>
            <a href="#terms">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
