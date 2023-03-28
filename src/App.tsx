import { Outlet } from 'react-router-dom';

import Nav from './Nav';
import './styles/main.less';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default App
