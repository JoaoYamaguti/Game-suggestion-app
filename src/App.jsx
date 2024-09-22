import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from "./pages/home/home.jsx";
import { Create } from './pages/create/create.jsx';
import { Sort } from './pages/sort/sort.jsx';

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/sort' element={<Sort />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
