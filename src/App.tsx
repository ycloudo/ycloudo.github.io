import Navbar from './Components/Navbar';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
