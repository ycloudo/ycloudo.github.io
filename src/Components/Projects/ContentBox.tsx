import Card from '../Card';
import Photobox from '../Photobox';
import githublink from '../../Assets/github4project.png';
import styled from 'styled-components';

interface ContentDS {
  name: string;
  techniques: Array<string>;
  githubURL: string;
  snapshot: string | null;
}

const ContentBox = (props: { key: string; data: ContentDS }) => {
  const { data } = props;
  return (
    <CustomCard>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href={data.githubURL} style={{ marginRight: '0.5rem' }}>
          <Photobox url={githublink} width={1.5} height={1.5} radius={0} />
        </a>
        <b>{data.name}</b>
        {data.techniques.map((t): string => ` | ${t}`)}
      </div>
      {data.snapshot !== null ? (
        <CustomPhotoBox url={data.snapshot} width={40} height={20} radius={0} />
      ) : null}
    </CustomCard>
  );
};

const CustomCard = styled(Card)`
  flex-direction: column;
  gap: 1rem;
`;

const CustomPhotoBox = styled(Photobox)`
  background-size: contain;
  background-repeat: no-repeat;
`;

export default ContentBox;
