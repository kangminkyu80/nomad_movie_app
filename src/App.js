import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './components/Navigation';
import "./App.css";

function App(){
    return (
      <BrowserRouter>
        <Navigation />
        <Route path="/" exact={true} component={Home} /> {/* exact={true} 정확히 매칭되는 URL 일때만 렌더링 됨 */}
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} />
      </BrowserRouter>
  )
}

export default App;
