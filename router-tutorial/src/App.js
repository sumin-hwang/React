import React from 'react';
import {Route, Routes} from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path ="/" element={<Home />} exact={true}/> {/**<Route>사용시 <Routes>로 묶어주어야 하며, component = {HOME}대신 element ={<Home />}처럼 사용 */}
        <Route path ="/about" element={<About />} />
      </Routes>
      <h1>
        test
      </h1>
    </div>
  );
};

export default App;