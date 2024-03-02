import styled from 'styled-components';

interface PhotoboxProps {
  className?: string;
  url: string;
  width: number;
  height: number;
  radius: number;
}

const Box = ({ className, url, height, width, radius }: PhotoboxProps) => {
  return <div className={className} />;
};

const Photobox = styled(Box)`
  background-image: url(${(p) => p.url});
  background-size: contain;
  background-repeat: no-repeat;
  width: ${(p) => p.width}px;
  height: ${(p) => p.height}px;
  border-radius: ${(p) => p.radius}px;
  @media screen and (max-width: 1000px) {
    width: 25px;
    height: 25px;
  }
`;

export default Photobox;
