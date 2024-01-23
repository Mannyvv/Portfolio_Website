import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
