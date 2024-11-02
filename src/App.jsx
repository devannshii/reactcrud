import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Update from './pages/Update';
import Read from './pages/Read';
import Edit from './pages/Edit';
import Insert from './pages/Insert';
import Search from './pages/Search';
import Layout from './Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />} >
      <Route path="home" index element={<Home />} />
        <Route path="update" element={<Update />} />
        <Route path="read/:id" element={<Read />} />
        <Route path="edit" element={<Edit/>} />
        <Route path="insert" element={<Insert />} />
        <Route path="search" element={<Search />} />
        
      
      </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
