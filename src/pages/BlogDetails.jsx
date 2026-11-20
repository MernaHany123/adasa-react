import { Link, useParams } from 'react-router-dom';

import data from '../data/posts.json';
import PostCard from '../components/PostCard';

export default function BlogDetails() {

  const { slug } = useParams();

  const post = data.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="notfound">
        <b>404</b>

        <h1>المقال غير موجود</h1>

        <Link className="primary" to="/blog">
          العودة للمدونة
        </Link>
      </section>
    );
  }

  const related = data.posts
    .filter(
      (p) => p.id !== post.id && p.category === post.category
    )
    .slice(0, 3);

  return (
    <>
      {/* Article Hero */}
      <section
        className="articlehero"
        style={{
          backgroundImage: `linear-gradient(90deg,#090909f5,#09090999),url(${post.image})`
        }}
      >
        <div className="container">

          <Link to="/blog" className="back">
             العودة إلى المقالات
          </Link>

          <p>
            {post.category}　•　{post.date}　•　{post.readTime}
          </p>

          <h1>{post.title}</h1>

          <div className="author">
            <img src={post.author.avatar} />

            <span>
              <b>{post.author.name}</b>
              <small>{post.author.role}</small>
            </span>
          </div>

        </div>
      </section>

      {/* Article Content */}
      <section className="container articlegrid">

        <article className="content">

          <img
            className="cover"
            src={post.image}
            alt={post.title}
          />

          <p className="lead">
            {post.excerpt}
          </p>

          {post.content
            .split('\n')
            .filter(Boolean)
            .map((line, i) =>
              line.startsWith('## ') ? (
                <h2 key={i}>
                  {line.slice(3)}
                </h2>
              ) : (
                <p key={i}>
                  {line}
                </p>
              )
            )}

          <div className="tags">
            {post.tags.map((t) => (
              <span key={t}>
                {t}
              </span>
            ))}
          </div>

        </article>

        {/* Sidebar */}
        <aside>

          <span className="eyebrow">
            عن المقال
          </span>

          <h3>{post.category}</h3>

          <p>
            دليل عملي من عدسة لمساعدتك على تطوير مهاراتك
            ورؤيتك الفوتوغرافية.
          </p>

          <hr />

          <small>مدة القراءة</small>
          <b>{post.readTime}</b>

          <hr />

          <small>تاريخ النشر</small>
          <b>{post.date}</b>

          <Link className="primary full" to="/blog">
           تصفح المزيد 
          </Link>

        </aside>

      </section>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="section darker">

          <div className="container">

            <Heading
              label="استكشف المزيد من المحتوى المميز"
              title="مقالات قد تعجبك"
            />

            <div className="cards">
              {related.map((p) => (
                <PostCard
                  key={p.id}
                  post={p}
                />
              ))}
            </div>

          </div>

        </section>
      )}
    </>
  );
}


// Heading Component
function Heading({ label, title }) {
  return (
    <div className="heading">

      <span >
        {label}
      </span>

      <h2>{title}</h2>

    </div>
  );
}