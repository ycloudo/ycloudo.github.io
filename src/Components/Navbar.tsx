// import { useEffect, } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Photobox from './Photobox';
import GitHubImg from '../Assets/github.png';
import LinkedInImg from '../Assets/linkedin.png';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };
  return (
    <Container>
      <CustomLink to="/" $active={isActive('/')}>
        Home
      </CustomLink>
      <CustomLink to="/project" $active={isActive('/project')}>
        Projects
      </CustomLink>
      <CustomLink to="/experience" $active={isActive('/experience')}>
        Experience
      </CustomLink>
      <ContactBox>
        <a href="https://github.com/">
          <Photobox url={GitHubImg} width={2} height={2} radius={0} />
        </a>
        <a href="https://github.com/">
          <Photobox url={LinkedInImg} width={2} height={2} radius={0} />
        </a>
      </ContactBox>
    </Container>
  );
};

const Container = styled.div`
  background-color: #8cb9bd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomLink = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  color: black;
  margin: 1rem;
  position: relative;

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

const ContactBox = styled.div`
  position: absolute;
  right: 1rem;
  gap: 0.5rem;
  display: flex;
  justify-content: space-evenly;
`;

export default Navbar;
