import React from 'react';
import Card from '../Components/Card';
import { v4 as uuidv4 } from 'uuid';
import Exp_data from '../Assets/Experience.json';
import TextBox from '../Components/Experience/TextBox';
import Container from '../Components/Container';
import styled from 'styled-components';

const Experience = () => {
  const datas = Exp_data;
  return (
    <CustomCtr>
      <Card>
        <ul>
          {datas.map((e) => (
            <TextBox key={uuidv4()} data={e} />
          ))}
        </ul>
      </Card>
    </CustomCtr>
  );
};

const CustomCtr = styled(Container)`
  margin-top: 3rem;
`;

export default Experience;
