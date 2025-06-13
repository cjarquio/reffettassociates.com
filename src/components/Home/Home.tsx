import '@mantine/core/styles.css';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Box, Container, Group, rem, Title, Image } from '@mantine/core';
import StockVideo from '../../../src/assets/videos/executiveStockVideo.mp4';
import classes from './Home.module.css';
import { IconSearch } from '@tabler/icons-react';
import { Carousel } from '@mantine/carousel';
import { ContactButtonSection } from '../Contact';
import { ACE, NRECA } from '../../assets/images/companies/NonProfits';
import { BECU } from '../../assets/images/companies/PrivateSector';
import {
  BartellDrugs,
  SeattleMariners,
} from '../../assets/images/companies/Retail';
import { VA } from '../../assets/images/companies/PublicSector';
import VOSB from '../../assets/images/veterans/VOSB.png';

const images = [ACE, BartellDrugs, BECU, NRECA, SeattleMariners, VA];

export const Home: React.FC = () => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  const slides = images.map((url) => (
    <Carousel.Slide style={{ display: 'flex', width: '100%' }} key={url}>
      <Image style={{ objectFit: 'contain' }} src={url} />
    </Carousel.Slide>
  ));

  return (
    <Box className={classes.root}>
      <video width={'100%'} autoPlay muted loop>
        <source src={StockVideo} type="video/mp4" />
      </video>
      <Container fluid className={classes.raAboutContainer}>
        <Group justify={'flex-start'} gap={'sm'} style={{ flexWrap: 'nowrap' }}>
          <Box className={classes.executiveSearchTitle}>
            <Title c={'#bb2a2c'} order={1}>
              Executive Search
            </Title>
            <IconSearch
              style={{ width: rem(80), height: rem(80) }}
              stroke={3}
              color={'#bb2a2c'}
            />
          </Box>
          <Box className={classes.executiveSearchDescriptionBox}>
            <Title
              c={'white'}
              order={4}
              className={classes.executiveSearchDescription}
            >
              Reffett Associates is a nationally recognized, fully retained
              executive search firm. As one of the premiere boutique firms in
              the executive search industry, we work with you to build a
              stronger organization by finding diverse candidates that fit your
              organization's cultures and values.
            </Title>
          </Box>
        </Group>
      </Container>
      <Container fluid className={classes.raAboutContainer}>
        <Group justify={'flex-end'} gap={'sm'} style={{ flexWrap: 'nowrap' }}>
          <Box className={classes.veteransDescriptionBox}>
            <Title
              c={'white'}
              order={4}
              className={classes.veteransDescription}
            >
              Reffett Associates is proudly veteran-owned and a certified
              Veteran Owned Small Business (VOSB). In addition, Reffett
              Associates is on the GSA Schedule and maintains a GSA contract
              (GS-02F-0194W). We are one of very few executive search firms to
              be awarded this prestigious qualification after having completed
              the GSA's extensive qualifications process.
            </Title>
          </Box>
          <Box className={classes.veteransTitle}>
            <Title c={'black'} order={1}>
              Veteran Owned
            </Title>
            <Image src={VOSB} p={'0.5rem'} w={rem(132)} h={rem(132)} />
          </Box>
        </Group>
      </Container>
      <Container size={'md'} className={classes.clientsContainer}>
        <Title order={2} style={{ textAlign: 'center', padding: '2rem' }}>
          Featured Clients
        </Title>
        <Carousel
          withControls={false}
          slideSize="33.3333333%"
          slideGap="lg"
          align="start"
          slidesToScroll={3}
          loop
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
        >
          {slides}
        </Carousel>
      </Container>
      <ContactButtonSection />
    </Box>
  );
};

export default Home;
