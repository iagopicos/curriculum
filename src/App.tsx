import './App.scss';
import Sidebar from './SideBar/Sidebar'
import './SideBar/Sidebar.scss'
import MainContent from './MainContet/MainContent';

function App() {
  return (
    <main className='App'>
      <Sidebar />  
      <MainContent/>
    </main>
  );
}

export default App;
