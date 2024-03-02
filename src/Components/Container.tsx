import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ className, children }: ContainerProps) => {
  return <div className={className}>{children}</div>;
};

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledContainer;
