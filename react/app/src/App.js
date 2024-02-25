import './styles/framework.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home'
import Container from './pages/docs/layout/container';
import Grids from './pages/docs/layout/grids';
import Components from './pages/comps/components';



function App() {
  return (
    <>
    <Router>
       <Routes>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/container" element={<Container/>} />
        <Route path="/grids" element={<Grids/>} />
        <Route path="/components" element={<Components/>} />
       </Routes>
    </Router>

    </>
  );
}

export default App;
