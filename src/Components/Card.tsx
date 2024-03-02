import React from 'react';
import styled from 'styled-components';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return <div className={className}>{children}</div>;
};

const Content = styled(Card)`
  display: flex;
  justify-content: start;
  width: 60%;
  background-color: aliceblue;
  padding: 1rem;
  border-radius: 10px;
`;
export default Content;
