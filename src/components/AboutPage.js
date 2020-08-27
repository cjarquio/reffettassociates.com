import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import {Button} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PageTitle from './PageTitle';
import areas from '../assets/data/aboutSlides.json'

const useStyles = makeStyles(() =>
  createStyles({
    officeCards: {
      height: 300,
      margin: 25
    },
    cardImage: {
      height: '100%'
    },
    banner: {
      width: '100%'
    },
    bannerImage: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('/images/Banner/Landscape.jpg')`,
      height: '50%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      paddingTop: 30,
      paddingBottom: 30
    },
    bannerText: {
      margin: 'auto',
      color: 'white',
      width: '60%',
      fontFamily: 'Georgia',
      fontStyle: 'italic'
    }
  })
);

const subtitle = `Reffett Associates is a nationally recognized, fully retained executive search firm. As one of the premiere boutique firms in the executive search industry, we work with you to build a stronger organization by finding diverse candidates that fit your organization’s cultures and values.
\n\n
Reffett Associates is proudly veteran-owned and a certified Veteran Owned Small Business (VOSB). In addition, Reffett Associates is on the GSA Schedule and maintains a GSA contract (GS-02F-0194W). We are one of very few executive search firms to be awarded this prestigious qualification after having completed the GSA’s extensive qualifications process.
\n\n
We have extensive experience across the public, private and non-profit sectors including retail and consumer packaged goods, private equity, commercial/retail and federal services, federals, state and municipal government sectors and associations and non-profits.
\n\n
Our team is comprised of former executives with tangible industry experience, possessing real world, relatable knowledge about the challenges executives face in managing talent in a competitive marketplace.
`;

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const classes = useStyles();

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === areas.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? areas.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = areas.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img className="d-block w-100" src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <PageTitle
        title='About: Diligent, Experienced, Relationship Focused'
        subtitle={subtitle}
      />
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={areas} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <h5>{areas[activeIndex].caption}</h5>
      <p>{areas[activeIndex].description}</p>
      <Button variant="contained">Learn More</Button>
    </div>
  );
}