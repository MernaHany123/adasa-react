import data from '../data/posts.json';
import PostCard from '../components/PostCard';

export default function Blog() {

  const posts = [...data.posts].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <>
      <section className="pageintro">
        <span>مدونتنا  </span>

        <h1>
          استكشف <em>مقالاتنا</em>
        </h1>

        <p>
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث      
       </p>
      </section>

      <section className="section">
        <div className="container">

          <div className="listing">
            <span>
              <strong>{posts.length}</strong> عرض مقالات
            </span>

           
          </div>

          <div className="cards">
            {posts.map((p) => (
              <PostCard
                key={p.id}
                post={p}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}