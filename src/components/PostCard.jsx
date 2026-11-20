import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <article className="post">

      <Link to={'/blog/' + post.slug} className="thumb">
        <img src={post.image} alt={post.title} />
        <span>{post.category}</span>
      </Link>

      <div className="postbody">

        <small>
          {post.date}　•　{post.readTime}
        </small>

        <h3>
          <Link to={'/blog/' + post.slug}>
            {post.title}
          </Link>
        </h3>

        <p>
          {post.excerpt}
        </p>

        <div className="postfoot">

          <span>
            <img src={post.author.avatar} alt="" />
            {post.author.name}
          </span>

          <Link to={'/blog/' + post.slug}>
           ❯
          </Link>

        </div>

      </div>
    </article>
  );
}