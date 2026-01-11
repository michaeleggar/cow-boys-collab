import { Link } from 'react-router-dom';

export default function BlogCard({ post, isLocked = false }) {
  return (
    <article className={`blog-card ${isLocked ? 'blog-card--locked' : ''}`}>
      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className="blog-card__image"
        />
      )}
      <div className="blog-card__content">
        <h3 className="blog-card__title">
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="blog-card__date">{post.date}</p>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        {isLocked && (
          <span className="blog-card__locked-badge">PATREON ONLY</span>
        )}
      </div>
    </article>
  );
}
