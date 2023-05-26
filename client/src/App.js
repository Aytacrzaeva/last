import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './pages/Add';
import Home from './pages/Home';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/add" element={<Add/>}></Route>
      <Route path="/:id" element={<Details/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
