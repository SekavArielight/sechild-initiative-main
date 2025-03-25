import { Box, Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/edu.png';
import Partnership from 'assets/key-feature/health.png';
import Subscription from 'assets/key-feature/child.png';
import Support from 'assets/key-feature/case.png';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Inclusive Education',
    title: 'Inclusive Education',
    text:
      'Providing access to quality education for children with special needs.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Healthcare Support',
    title: 'Healthcare Support',
    text:
      'Ensuring medical care and well-being for every child.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Community Engagement',
    title: 'Community Engagement',
    text:
      'Building awareness and advocacy for children with special needs.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Volunteer Programs',
    title: 'Volunteer Programs',
    text:
      'Encouraging people to make a difference through active participation.',
  },
];

export default function KeyFeature() {
  return (
    <Box sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Empowering Lives, Creating Opportunities"
          title="Our Commitment to Every Child's Future"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
