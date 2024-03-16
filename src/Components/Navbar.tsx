// import { useEffect, } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../Components/Container';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };
  return (
    <CostumCtr>
      <CustomLink to="/" $active={isActive('/')}>
        Home
      </CustomLink>
      <CustomLink to="/experience" $active={isActive('/experience')}>
        Experience
      </CustomLink>
      <CustomLink to="/project" $active={isActive('/project')}>
        Projects
      </CustomLink>
    </CostumCtr>
  );
};

const CostumCtr = styled(Container)`
  background-color: #8cb9bd;
  width: auto;
`;

const CustomLink = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  color: black;
  margin: 1rem;
  position: relative;
  font-size: 26px;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: ${(p) => (p.$active ? '100%' : '0')};
    height: 2px;
    background-color: black;
  }

  &:hover:after {
    transition: width 0.3s ease;
    width: 100%;
  }
`;

export default Navbar;
