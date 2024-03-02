import Navbar from './Components/Navbar';
import Router from './Router';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Router />
      </HashRouter>
    </div>
  );
}

export default App;
