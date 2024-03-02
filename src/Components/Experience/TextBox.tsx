import styled from 'styled-components';

interface TextDS {
  Date: string;
  Company: string;
  Position: string;
}

const TextBox = (props: { key: string; data: TextDS }) => {
  const { data } = props;

  return (
    <Customli>
      <i>{data.Date}</i>
      {` : ${data.Position} in ${data.Company} `}
    </Customli>
  );
};

const Customli = styled.li`
  font-size: 24px;
  padding-bottom: 0.8rem;
`;

export default TextBox;
