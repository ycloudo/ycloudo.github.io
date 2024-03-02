import styled from 'styled-components';
import GitHubImg from '../Assets/github.png';
import LinkedInImg from '../Assets/linkedin.png';
import FBImg from '../Assets/fb.png';
import Card from '../Components/Card';
import Photobox from '../Components/Photobox';
import Container from '../Components/Container';

const Home = () => {
  return (
    <CustomCtr>
      <Card>
        <Text>
          <h2>My name is Eric, Yao Yun-Cheng, </h2>
          <p>
            I am a master's degree student majoring in Management Information
            Systems at National Cheng Chi University.
          </p>
        </Text>
      </Card>
      <ContactBox>
        <a href="https://github.com/">
          <Photobox url={GitHubImg} width={45} height={45} radius={0} />
        </a>
        <a href="https://github.com/">
          <Photobox url={LinkedInImg} width={45} height={45} radius={0} />
        </a>
        <a href="https://github.com/">
          <Photobox url={FBImg} width={45} height={45} radius={0} />
        </a>
      </ContactBox>
    </CustomCtr>
  );
};

const Text = styled.div`
  margin-left: 2rem;
  font-size: 24px;
  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;

const CustomCtr = styled(Container)`
  gap: 2rem;
  justify-content: space-between;
  margin-top: 3rem;
  flex-direction: column;
`;

const ContactBox = styled.div`
  border-style: solid;
  border-width: 2px 0 0 0;
  width: 15%;
  border-color: #ecb159;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  gap: 0.5rem;
  display: flex;
  justify-content: center;
`;

export default Home;
