import './styles/framework.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home'
import Container from './pages/docs/layout/container';
import Grids from './pages/docs/layout/grids';
import Components from './pages/comps/components';
import Card from './pages/docs/layout/card';
import ColRo from './pages/docs/layout/col-ro';
import Height from './pages/docs/layout/height';
import Width from './pages/docs/layout/width';
import Badge from './pages/comps/badge-page';
import Button from './pages/comps/button-page';
import FooterPage from './pages/comps/footer-page';
import SidebarPage from './pages/comps/sidebar-page';
import NavbarPage from './pages/comps/navbar-page';
import SearchbarPage from './pages/comps/searchbar-page';
import JumbotronPage from './pages/comps/jumbotron-page';
import BreadcrumbPage from './pages/comps/breadcrumb-page';
import ModalPage from './pages/comps/modal-page';
import ColorVariables from './pages/docs/variables/color-variables';
import SliderPage from './pages/comps/slider-page';
import DisplayBlock from './pages/docs/variables/display-block';
import DisplayFlex from './pages/docs/variables/dispaly-flex';
import DisplayNone from './pages/docs/variables/display-none';
import Border from './pages/simplifiers/borders';
import Radius from './pages/simplifiers/Radius';
import Shadow from './pages/simplifiers/shadow';
import TextColor from './pages/simplifiers/textcolor';
import Margin from './pages/simplifiers/margin';
import Padding from './pages/simplifiers/padding';
import TypoGraphy from './pages/simplifiers/typo';
import Tables from './pages/simplifiers/tables';


function App() {
  return (
    <>

      <BrowserRouter basename='/visuale-page'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/container" element={<Container />} />
          <Route path="/grids" element={<Grids />} />
          <Route path="/card" element={<Card />} />
          <Route path="/components" element={<Components />} />
          <Route path='/col-ro' element={<ColRo />} />
          <Route path='/height' element={<Height />} />
          <Route path='/width' element={<Width />} />
          <Route path='/badge' element={<Badge />} />
          <Route path='/button' element={<Button />} />
          <Route path='/footer' element={<FooterPage />} />
          <Route path='/sidebar' element={<SidebarPage />} />
          <Route path='/navbar' element={<NavbarPage />} />
          <Route path='/searchbar' element={<SearchbarPage />} />
          <Route path='/jumbotron' element={<JumbotronPage />} />
          <Route path='/breadcrumb' element={<BreadcrumbPage />} />
          <Route path='/modal' element={<ModalPage />} />
          <Route path='/variables' element={<ColorVariables />} />
          <Route path='/slider' element={<SliderPage/>} />
          <Route path='/displayblock' element={<DisplayBlock/>} />
          <Route path='/displayflex' element={<DisplayFlex/>} />
          <Route path='/displaynone' element={<DisplayNone/>} />
          <Route path='/border' element={<Border/>} />
          <Route path='/radius' element={<Radius/>} />
          <Route path='/shadow' element={<Shadow/>} />
          <Route path='/textcolor' element={<TextColor/>} />
          <Route path='/margin' element={<Margin/>} />
          <Route path='/padding' element={<Padding/>} />
          <Route path='/text' element={<TypoGraphy/>} />
          <Route path='/tables' element={<Tables/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
