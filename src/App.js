import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProjectsPage from './Pages/ProjectsPage'

import './App.scss';


function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/About' element={<AboutPage/>}/>
        <Route path='/Projects' element={<ProjectsPage/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
