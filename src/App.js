import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPhotos from './components/AddPhotos';
import SearchPhotos from './components/SearchPhotos';
import DeletePhotos from './components/DeletePhotos';
import ViewAll from './components/ViewAll';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddPhotos/>}/>
      <Route path='/search' element={<SearchPhotos/>}/>
      <Route path='/delete' element={<DeletePhotos/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>


  );
}

export default App;
