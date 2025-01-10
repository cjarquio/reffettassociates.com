import "@mantine/core/styles.css";
import { Image, Text, Container, Grid, Title } from "@mantine/core";
import { AboutBanner, BartellRecruitment } from "../../../assets/images";
import { ContactButtonSection } from "../../Contact";
import { Banner } from "../../Banner";

export interface PostingProps {
  image: string;
  jobName: string;
  company: string;
  location: string;
  postingDate: Date;
}

const Posting: React.FC<PostingProps> = (props: PostingProps) => {
  const { image, jobName, company, location, postingDate } = props;

  const getPostingDate = (date: Date) => {
    return date.toLocaleString("default", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <>
      <Container
        display={"flex"}
        style={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Title order={2} style={{ textAlign: "center" }}>
          Current Opportunities
        </Title>
        <Grid align="center">
          <Grid.Col span={3}>
            <Image fit="contain" src={image} />
          </Grid.Col>
          <Grid.Col span={3}>
            <Text>{jobName}</Text>
            <Text>{company}</Text>
          </Grid.Col>
          <Grid.Col span={3} />
          <Grid.Col span={3}>
            <Text>{location}</Text>
            <Text>{getPostingDate(postingDate)}</Text>
          </Grid.Col>
        </Grid>
        <ContactButtonSection />
      </Container>
    </>
  );
};

export const FeaturedRecruitments: React.FC = () => {
  return (
    <Container fluid w={"99.3vw"} p={0}>
      <Banner bannerImagePath={AboutBanner} page="Featured Recruitments" />
      <Posting
        image={BartellRecruitment}
        jobName="Job Name"
        company="Company"
        location="Location"
        postingDate={new Date()}
      />
    </Container>
  );
};

export default FeaturedRecruitments;
