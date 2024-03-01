import styled from 'styled-components';

interface PhotoboxProps {
  className?: string;
  url: string;
  width: number;
  height: number;
  radius: number;
}

const Container = ({
  className,
  url,
  height,
  width,
  radius,
}: PhotoboxProps) => {
  return <div className={className} />;
};

const Photobox = styled(Container)`
  background-image: url(${(p) => p.url});
  background-size: cover;
  background-position: center;
  width: ${(p) => p.width}rem;
  height: ${(p) => p.height}rem;
  border-radius: ${(p) => p.radius}px;
`;

export default Photobox;
