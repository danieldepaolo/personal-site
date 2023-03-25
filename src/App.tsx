import { useState } from 'react'
import { Outlet } from 'react-router-dom';

import Nav from './Nav';
import './styles/main.less';

function App() {
  const [count, setCount] = useState(0)

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
