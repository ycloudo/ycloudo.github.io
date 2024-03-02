import Card from '../Card';
import Photobox from '../Photobox';
import githublink from '../../Assets/github4project.png';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

interface ContentDS {
  name: string;
  techniques: Array<string>;
  githubURL: string;
  snapshot: Array<string>;
}

const ContentBox = (props: { key: string; data: ContentDS }) => {
  const { data } = props;
  const s_len = data.snapshot.length;
  const s_width = `${100 / s_len}%`;
  return (
    <CustomCard>
      <div style={{ display: 'flex' }}>
        <a href={data.githubURL} style={{ marginRight: '0.5rem' }}>
          <Photobox url={githublink} width={30} height={30} radius={0} />
        </a>
        <b>{data.name}</b>
        {data.techniques.map((t): string => ` | ${t}`)}
      </div>
      <div style={{ display: 'flex' }}>
        {s_len !== 0
          ? data.snapshot.map((s) => (
              <img src={s} alt="snapshot" width={s_width} key={uuidv4()} />
            ))
          : null}
      </div>
    </CustomCard>
  );
};

const CustomCard = styled(Card)`
  flex-direction: column;
  gap: 1rem;
  font-size: 24px;
  @media screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;

export default ContentBox;
