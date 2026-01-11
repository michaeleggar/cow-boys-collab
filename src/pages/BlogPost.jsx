import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { slug } = useParams();

  return (
    <article className="page page--blog-post">
      <h1 className="blog-post__title">Blog Post: {slug}</h1>
      {/* Render markdown content */}
    </article>
  );
}
