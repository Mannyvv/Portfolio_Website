import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage'
import ContactPage from './Pages/ContactPage';
import 'shepherd.js/dist/css/shepherd.css';
import './App.scss';
import { steps, tourOptions } from './Features/ShepardTour';
import { ShepherdTour } from 'react-shepherd';

function App() {
  return (
    <>
      <ShepherdTour steps={steps} tourOptions={tourOptions}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/About' element={<AboutPage />} />
            <Route path='/Projects' element={<ProjectsPage />} />
            <Route path='/Contact' element={<ContactPage />} />
          </Route>
        </Routes>
      </ShepherdTour>
    </>
  );
}

export default App;
