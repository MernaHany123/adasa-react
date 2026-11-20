import { Link } from 'react-router-dom';

import data from '../data/posts.json';
import PostCard from '../components/PostCard';

export default function Home() {

  const featured = data.posts
    .filter((p) => p.featured)
    .slice(0, 3);

  const latest = [...data.posts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="hero">

        <div className="container heroin">

          <span>
            ●　مرحباً بك في عدسة
          </span>

          <h1>
            اكتشف <em>فن</em>
            <br />
            التصوير الفوتوغرافي
          </h1>

          <p>
             انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>

          <Link className="primary" to="/blog">
            استكشف المقالات　←
          </Link>

          {/* Statistics */}
          <div className="stats">

            <div>
              <b>50+</b>
              <small>مقالة</small>
            </div>

            <div>
              <b>4</b>
              <small>تصنيفات</small>
            </div>

            <div>
              <b>+10ألف</b>
              <small>قارئ </small>
            </div>

             <div>
              <b>6</b>
              <small>كاتب </small>
            </div>

          </div>

        </div>

       

      </section>

      {/* Featured Articles */}
      <section className="section">

        <div className="container">

        <h3>
            ● مميز 
        </h3>
         <h1>
           مقالات مختارة
        </h1>

          <p>
            محتوى منتقى لبدء رحلة تعلمك
          </p>

          <div className="cards">
            {featured.map((p) => (
              <PostCard
                key={p.id}
                post={p}
              />
            ))}
          </div>

        </div>

      </section>

      {/* Categories Section */}
      <section className="section darker">

        <div className="container">

          <h3>
            ● التصنيفات
        </h3>
         <h1>
          استكشف حسب الموضوع
        </h1>

          <p>
           اعثر على محتوى مصمم حسب اهتماماتك
          </p>

          <div className="categories">

            {data.categories.map((c, i) => (
              <div className="cat" key={c.name}>

            

                <strong>{c.name}</strong>

                <small>
                  {c.count} مقالات
                </small>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Latest Articles */}
      <section className="section">

        <div className="container">
        <h3>
            ● الاحدث
        </h3>
         <h1>
         أحدث المقالات
        </h1>

          <p>
          محتوى جديد طازج من المطبعة
          </p>

          <div className="cards">
            {latest.map((p) => (
              <PostCard
                key={p.id}
                post={p}
              />
            ))}
          </div>

          <div className="center">
            <Link className="primary" to="/blog">
              عرض كل المقالات ←
            </Link>
          </div>

        </div>

      </section>
    </>
  );
}



 
