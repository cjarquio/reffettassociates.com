import React, { useState } from 'react';
import { Carousel, CarouselItem } from 'reactstrap';
import { createStyles, makeStyles } from '@material-ui/core/styles';

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

const items = [
  {
    src: '/images/HomeSlides/Crowd.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: '/images/HomeSlides/Diverse.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: '/images/HomeSlides/Efficient.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  },
  {
    src: '/images/HomeSlides/Expansive.jpg',
    altText: 'Slide 4',
    caption: 'Slide 4'
  }
];

export default function HomePage() {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const slides = items.map((item) => {
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
      <div className={classes.bannerImage}>
        <div className={classes.bannerText}>
          <h1>A LEADER IN EXECUTIVE SEARCH</h1>
        </div>
      </div>
      <br/><br/><br/>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={3000}
      >
        {slides}
      </Carousel>
    </div>
  );
}