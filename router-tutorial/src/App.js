import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/"> HOME </Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
        <li>
          <Link to="profile/velopert">velopert profile</Link>
        </li>
        <li>
          <Link to="profile/gildong">gildong profile</Link>
        </li>
      </ul>
      <hr/>
      <Routes>
        <Route path ="/" element={<Home />} exact={true}/> {/**<Route>사용시 <Routes>로 묶어주어야 하며, component = {HOME}대신 element ={<Home />}처럼 사용 */}
        <Route path ="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </div>     
  );
};

export default App;