import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ComingSoon from './pages/ComingSoon';

// Set VITE_COMING_SOON=true in .env to show coming soon page
const isComingSoon = import.meta.env.VITE_COMING_SOON === 'true';

function App() {
  if (isComingSoon) {
    return <ComingSoon />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
