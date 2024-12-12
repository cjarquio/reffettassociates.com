import "@mantine/core/styles.css";
import { Image, Text, Container, Grid } from "@mantine/core";
import { BartellRecruitment } from "../../../assets/images";

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
    <Container size={"md"} fluid display={"flex"}>
      <Grid>
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
    </Container>
  );
};

export const FeaturedRecruitments: React.FC = () => {
  return (
    <Container size={"60%"}>
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
