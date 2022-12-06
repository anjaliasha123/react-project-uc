import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/button/Button';
import Graph from './components/grap/Graph';
import Calculator from './components/calculator/Calculator';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function App() {
  const [graphStatus, setPage2] = useState(false);
  useEffect(() => {
    setPage2(()=>false);
  },[graphStatus]);

  let getButtonStatus = (status, event) => {
    event.target.className.indexOf('page2') && setPage2(true);
  }

  return (

    <div className="App">
      <Router>
        <Link to={'/'} className="nav-link">Home Button</Link> |
        <Link to={'/graph'} className="nav-link">Graph</Link> |
        <Link to={'/calculator'} className="nav-link">Calculator</Link>
        <Routes>
          <Route path='/'
            element={<Button getButtonStatus={getButtonStatus} h1Msg={'Reusable Button'} btnMsg={'Click'} txtMsg={'Hello World!'} gly={'glyphicon glyphicon-hand-up'} style={{ fontWeight: 'bold' }} name={"page1"} />}></Route>
          <Route path='/graph' element={<Graph btnMsg={'Draw'} getButtonStatus={getButtonStatus} genGraph={graphStatus} itterations={10} />}></Route>
          <Route path='/calculator' element={<Calculator />}></Route>
        </Routes>
      </Router>
    </div>
  );


}


export default App;
