import './App.css';
import Home from './pages/Home/home';
import { BrowserRouter as  Router,Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SPI from './pages/index/spi'
import SSI from './pages/index/ssi'
import SRI from './pages/index/sri'
import Filters_spi from './pages/filters/filters_spi';
import Filters_sri from './pages/filters/filters_sri';
import Filters_ssi from './pages/filters/filters_ssi';
import Graph_spi from './pages/graph/spi_graph';
import Login from './components/login_comp/Login'
import Rx1_PPT_Extreme from './pages/Precipitation Extremes/rx1';
import AboutUsPage from './pages/aboutus/about';
import CWD_PPT_Extreme from './pages/Precipitation Extremes/cwd';
import R10_PPT_Extreme from './pages/Precipitation Extremes/r10';
import R20_PPT_Extreme from './pages/Precipitation Extremes/r20';
import R95_PPT_Extreme from './pages/Precipitation Extremes/r95';
import R99_PPT_Extreme from './pages/Precipitation Extremes/r99';
import SDII_PPT_Extreme from './pages/Precipitation Extremes/sdii';
import PRCPTOP_PPT_Extreme from './pages/Precipitation Extremes/prcptop';






function App() {
  return (
    <Router>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/spi" element={<SPI/>} />
        <Route exact path="/ssi" element={<SSI/>} />
        <Route exact path="/sri" element={<SRI/>} />
        <Route exact path="/search_spi" element={<Filters_spi/>} />
        <Route exact path="/search_sri" element={<Filters_sri/>} />

        <Route exact path="/search_ssi" element={<Filters_ssi/>} />
        <Route exact path="/graph_spi" element={<Graph_spi/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/rx1_extreme" element={<Rx1_PPT_Extreme/>} />
        <Route exact path="/cwd_extreme" element={<CWD_PPT_Extreme/>} />
        <Route exact path="/r10_extreme" element={<R10_PPT_Extreme/>} />
        <Route exact path="/r20_extreme" element={<R20_PPT_Extreme/>} />
        <Route exact path="/r95_extreme" element={<R95_PPT_Extreme/>} />
        <Route exact path="/r99_extreme" element={<R99_PPT_Extreme/>} />
        <Route exact path="/sdii_extreme" element={<SDII_PPT_Extreme/>} />
        <Route exact path="/prcptop_extreme" element={<PRCPTOP_PPT_Extreme/>} />







        <Route exact path="/aboutus" element={<AboutUsPage/>} />



        </Routes>
      
    </Router>  
  );
}

export default App;
