import styled from 'styled-components';
import Photobox from '../Components/Photobox';
import AvatarImg from '../Assets/Avatar.jpg';
import Card from '../Components/Card';
import Container from '../Components/Container';

const Home = () => {
  return (
    <Container>
      <Card>
        <Photobox url={AvatarImg} width={9} height={8} radius={10} />
        <Text>
          <h2>My name is Yao Yun-Cheng, Eric</h2>
          <p>
            I am a master's degree student majoring in Management Information
            Systems at National Cheng Chi University.
          </p>
        </Text>
      </Card>
    </Container>
  );
};

const Text = styled.div`
  margin-left: 2rem;
`;

export default Home;
