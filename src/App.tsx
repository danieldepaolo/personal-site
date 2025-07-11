import { Outlet } from 'react-router-dom';

import Nav from './components/Nav';
import './styles/main.less';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
}

export default App
