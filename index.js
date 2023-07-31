
import ReactDOM  from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './home';
import About from './about';
import Shop from './joinus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
      </Routes>
  </Router>);

 