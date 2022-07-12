import { Route, Routes } from 'react-router-dom';
import About from './About';
import Article from './Article';
import Articles from './Articles';
import Home from './Home';
import Profile from './Profile';
import Layout from './Layout';

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />} >
        <Route path="/articles/:id" element={<Article />} /> {/**중첩된 라우트는 Outlet 태그 사용으로 볼 수 있음 */}
      </Route>
    </Routes>
  );
};

export default App;