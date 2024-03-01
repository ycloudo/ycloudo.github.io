import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Experience from '../Pages/Experience';
import Project from '../Pages/Project';

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
};

export default Router;
