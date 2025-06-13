import '@mantine/core/styles.css';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Container, Title, Image } from '@mantine/core';
import classes from './Home.module.css';
import { Carousel } from '@mantine/carousel';
import {
  ArchitectOfTheCapitol,
  SEC,
} from '../../assets/images/companies/Government';
import {
  SeattleMariners,
  MetropolitanMarket,
  OakViewGroup,
} from '../../assets/images/companies/Retail';
import {
  ArmyHistoricalFoundation,
  CityOfSeattle,
} from '../../assets/images/companies/PublicSector';

const images = [
  ArchitectOfTheCapitol,
  SeattleMariners,
  MetropolitanMarket,
  OakViewGroup,
  CityOfSeattle,
  ArmyHistoricalFoundation,
  SEC,
];

export const FeaturedClientsCarousel: React.FC = () => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));

  const slides = images.map((url) => (
    <Carousel.Slide style={{ display: 'flex', width: '100%' }} key={url}>
      <Image style={{ objectFit: 'contain' }} src={url} />
    </Carousel.Slide>
  ));

  return (
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
  );
};

export default FeaturedClientsCarousel;
