import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Container from '../Components/Container';
import { pData } from '../Assets/Project.js';
import ContentBox from '../Components/Projects/ContentBox';

const Project = () => {
  const datas = pData;
  return (
    <CustomCtr>
      {datas.map((e) => (
        <ContentBox key={uuidv4()} data={e} />
      ))}
    </CustomCtr>
  );
};

const CustomCtr = styled(Container)`
  margin-top: 3rem;
  flex-direction: column;
  gap: 10px;
`;

export default Project;
