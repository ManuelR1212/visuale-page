import './styles/framework.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/home'
import Container from './pages/docs/layout/container';
import Grids from './pages/docs/layout/grids';
import Components from './pages/comps/components';
import Card from './pages/docs/layout/card';
import ColRo from './pages/docs/layout/col-ro';
import Height from './pages/docs/layout/height';
import Width from './pages/docs/layout/width';



function App() {
  return (
    <>
    <BrowserRouter basename='/visuale-page'>
       <Routes>
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/container" element={<Container/>} />
        <Route path="/grids" element={<Grids/>} />
        <Route path="/card" element={<Card/>} />
        <Route path="/components" element={<Components/>} />
        <Route path='/col-ro' element={<ColRo/>}/>
        <Route path='/height' element={<Height/>}/>
        <Route path='/width' element={<Width/>}/>
       </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
