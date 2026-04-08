import React from 'react';
import { Box, Image, Title, UnstyledButton } from '@mantine/core';
import jobs from './featuredActiveJobs'
import classes from './FeaturedJobs.module.css';

export const FeaturedJobs: React.FC = () => {
    return (
      jobs.map((item) => {
        return (
          <UnstyledButton
              className={classes.serviceButton}
              key={item.jobTitle}
              component='a'
              target='_blank'
              href={item.pdf}
            >
              <Box style={{
                display: "flex",
                flexDirection: 'row',
                alignItems: "center",
                justifyContent: "center"
                }}>
                <Image w={"50%"} pr={"sm"} src={item.companyLogo} alt='company logo' />
                <Box>
                  <Title order={4} className={classes.serviceTitle}>{item.companyName}</Title>
                  <Title order={5} className={classes.description}>{item.jobTitle}</Title>
                </Box>
              </Box>
            </UnstyledButton>
        );
      })
    );
}

export default FeaturedJobs;