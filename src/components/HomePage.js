import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators
} from 'reactstrap';
import practiceAreas from '../assets/data/services.json';
import { Typography } from '@mui/material';
import { isBrowser } from 'react-device-detect';

const styles = {
  root: {
    },
    officeCards: {
      height: 300,
      margin: 25
    },
    cardImage: {
      height: '100%'
    },
    banner: {
      width: '100%',
      height: isBrowser? '533px':'350px'
    },
    locations: {
      textAlign: 'center',
      color: '#0f2f5b',
      fontFamily: 'Georgia',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    caption: {
      color: 'white',
      textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
      position: 'absolute',
      top: '80%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: isBrowser ? '2em' : '1.5em',
      fontFamily: 'Georgia',
      textAlign: 'center'
    },
    controls: {
      backgroundColor: 'rgba(0,0,0,0.1)'
    }
}

export default function HomePage() {
  const history = useHistory();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const initialSlide = {
    "srcImg": "images/Home/ReffettAssociatesHome.jpg",
    "altText": "",
    "serviceArea": "",
    "url": "",
    "description": "",
    "clients": [],
    "subtitle": "",
    "subtitleList": []
  };
  const homeSlides = [initialSlide].concat(practiceAreas);

  const handleClickContact = () => {
    history.push("/contact");
  }

  const handleClickService = (serviceArea) => {
    history.push("/about/"+serviceArea);
  }

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === homeSlides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? homeSlides.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = homeSlides.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.altText}
      >
        {item === homeSlides[0]? <Typography variant='h5' className={styles.caption}>{item.serviceArea}</Typography>: <Typography variant='h5' className={styles.caption} style={{cursor: 'pointer'}} onClick={()=>handleClickService(item.url)}>{item.serviceArea} Clients Served</Typography>}
        {item === homeSlides[0]?<img src={item.srcImg} alt={item.altText} className={styles.banner} />:<img src={item.srcImg} alt={item.altText} className={styles.banner} style={{cursor: 'pointer'}} onClick={()=>handleClickService(item.url)} />}
      </CarouselItem>
    );
  });

  return (
    <div className={styles.root}>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={homeSlides} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl className={styles.controls} direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl className={styles.controls} direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      <h4 className={styles.locations} onClick={handleClickContact}>Seattle | Washington D.C. | New York | Dallas | Greensboro</h4>
    </div>
  );
}