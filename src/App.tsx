import './App.scss';
import Sidebar from './SideBar/Sidebar'
import './SideBar/Sidebar.scss'
import {Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Resumee from './Resumee/Resumee';


function App() {
  return (
    <main className='App'>
      <Sidebar />  
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resumee' element={<Resumee />} />
      </Routes>
    </main>
  );
}

export default App;
