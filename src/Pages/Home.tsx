import styled from 'styled-components';
import GitHubImg from '../Assets/github.png';
import LinkedInImg from '../Assets/linkedin.png';
import FBImg from '../Assets/fb.png';
import Avatar from '../Assets/avatar.jpg';
import Card from '../Components/Card';
import Photobox from '../Components/Photobox';
import Container from '../Components/Container';

const Home = () => {
  return (
    <CustomCtr>
      <CustomCard>
        <AvatarBox src={Avatar} alt="snapshot" />
        <Text>
          <h2>Hi, my name is Eric | Yao Yun-Cheng </h2>
          <p>
            I'm a master's degree student majoring in Management Information
            Systems at National Cheng Chi University.
          </p>
          <p>
            I possess experience in machine learning, frontend, and backend
            development. In my free time, I enjoy traveling, photography, and
            playing volleyball.
          </p>
        </Text>
      </CustomCard>
      <ContactBox>
        <a href="https://github.com/ycloudo" target="_blank" rel="noreferrer">
          <Photobox url={GitHubImg} width={45} height={45} radius={0} />
        </a>
        <a
          href="http://www.linkedin.com/in/cloudo"
          target="_blank"
          rel="noreferrer"
        >
          <Photobox url={LinkedInImg} width={45} height={45} radius={0} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100003822360344"
          target="_blank"
          rel="noreferrer"
        >
          <Photobox url={FBImg} width={45} height={45} radius={0} />
        </a>
      </ContactBox>
    </CustomCtr>
  );
};

const AvatarBox = styled.img`
  width: 20%;
  border-radius: 10px;
  @media screen and (max-width: 1000px) {
    width: 40%;
  }
`;

const Text = styled.div`
  margin-left: 2rem;
  font-size: 24px;
  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;

const CustomCard = styled(Card)`
  @media screen and (max-width: 1000px) {
    flex-direction: column;
  }
  align-items: center;
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
