import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ExperiencePage from './pages/ExperiencePage';
import SectorPage from './pages/SectorPage';
import InformationPage from './pages/InformationPage';
import TicketPage from './pages/TicketPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/experience' element={<ExperiencePage/>} />
      <Route path='/sectors' element={<SectorPage/>} />
      <Route path='/information' element={<InformationPage/>} />
      <Route path='/ticket' element={<TicketPage/>} />
      <Route path='/success' element={<SuccessPage/>} />
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
