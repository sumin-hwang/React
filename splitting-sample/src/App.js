import React, {useState, Suspense} from 'react';
import logo from './logo.svg';
import './App.css';
// const SplitMe = React.lazy(() => import('./SplitMe'));
// import notify from './notify';
import loadable from '@loadable/copmponent';
const SplitMe = loadable(() => import('./SplitMe'), {
  fallback : <div>loading...</div>
});


function App() {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    // notify();
    // import ('./notify').then(result => result.default());
    setVisible(true);
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className ="App-logo" alt="logo " />
        <p onClick={onClick}> Hello React!</p>
        {/* <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe/>}
        </Suspense> */}
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
