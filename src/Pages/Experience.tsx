import React from 'react';
import Card from '../Components/Card';
import { v4 as uuidv4 } from 'uuid';
import Exp_data from '../Assets/Experience.json';
import TextBox from '../Components/Experience/TextBox';
import Container from '../Components/Container';

const Experience = () => {
  const datas = Exp_data;
  return (
    <Container>
      <Card>
        <ul>
          {datas.map((e) => (
            <TextBox key={uuidv4()} data={e} />
          ))}
        </ul>
      </Card>
    </Container>
  );
};

export default Experience;
