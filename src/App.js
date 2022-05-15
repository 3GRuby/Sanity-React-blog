import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import SinglePost from './components/pages/SinglePost';
import Error from './components/pages/Error';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog/:slug" element={<SinglePost />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
