import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import PageTitle from './PageTitle';

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

const subtitle = `Reffett Associates believes that diversity in the workforce should be a priority of all organizations.  With every executive search assignment, our firm makes a conscious effort to contact, develop and present a slate of candidates who represent every race, gender, ethnic background, physical challenge, religion, sexual orientation and age.   
\n\n
All consideration is given to full inclusion of candidates of all backgrounds and diversity. Our Clients will affirm that Reffett Associates is all-inclusive in presenting candidates that represent diverse races, religions, and nationalities. The firm keeps on file all research, interview notes, background checks and reference checks conducted to ensure that all information is readily available should the need to produce it arise. 
\n\n
Reffett Associates does not ask for, nor does it record, personal information regarding a candidate’s race, color, religion, sex, or national origin, and in instances where that information is disclosed in the course of the search process, we will not allow it have any bearing on a candidate’s ability to progress through the search process.`;

const items = [
  {
    src: '/images/HomeSlides/Crowd.JPG',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: '/images/HomeSlides/Diverse.JPG',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: '/images/HomeSlides/Efficient.JPG',
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
      <PageTitle
        title='OUR COMMITMENT TO EQUITY AND DIVERSITY IN RECRUITING'
        subtitle={subtitle}
      />
      <h4>Our Pursuit of Equity in Recruiting Practices</h4>
      <p>
        Furthermore, Reffett Associates has a commitment to equity and equitable search practices. We recognize that often, and particularly for leadership positions, there are systemic barriers that prevent potential applicants from being aware of an opportunity or be willing to apply for a potential opportunity. Through our recruitment process we seek to ensure that any barriers to potential candidates or search techniques that exist that would artificially limit our pool of potential candidates are identified and eliminated to create the broadest possible applicant pool for our Client.
      </p>
      <h4>Preventing Bias in Candidate Presentation</h4>
      <p>
        In an effort to eliminate bias in the presentation of candidates either by Reffett Associates staff or a Search/Selection committee, Reffett Associates has created a reviewable anti-bias process. This process will be available to you for review at any time. The goal of this anti-bias process is that any authorized member of your organization can at any time check the status of any applicant for your position ensuring that all applicants receive equitable consideration.
      </p>
      <br /><br /><br />
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={3000}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}