import { Container, Title, Image, Box, Text, Card, Grid } from '@mantine/core';
import { RetailBanner } from '../../../assets/images';
import {
  BassProShops,
  BartellDrugs,
  BiLo,
  Burlington,
  Cabelas,
  DeanFoods,
  Dymatize,
  Hershey,
  KingsFoodMarket,
  Petco,
  Schwans,
  SeattleMariners,
  AAFEX,
  SportsAuthority,
  Strack,
  TheFreshMarket,
  Ahold,
  Giant,
  Homeland,
  KVAT,
  MetropolitanMarket,
  NorthgateMarket,
  OTG,
  Peekay,
  Post,
  VF,
  Xochitl,
} from '../../../assets/images/companies/Retail';
import { Banner } from '../../Banner';
import IndustryTemplate from '../IndustryTemplate/IndustryTemplate';

export const Retail: React.FC = () => {
  const retailCompanies = [
    {
      companyName: 'Bass Pro Shops',
      image: BassProShops,
    },
    {
      companyName: 'Bartell Drugs',
      image: BartellDrugs,
    },
    {
      companyName: 'Bi-Lo',
      image: BiLo,
    },
    {
      companyName: 'Burlington',
      image: Burlington,
    },
    {
      companyName: 'Cabelas',
      image: Cabelas,
    },
    {
      companyName: 'Dean Foods',
      image: DeanFoods,
    },
    {
      companyName: 'Dymatize',
      image: Dymatize,
    },
    {
      companyName: "Hershey's",
      image: Hershey,
    },
    {
      companyName: "King's Food Market",
      image: KingsFoodMarket,
    },
    {
      companyName: 'Petco',
      image: Petco,
    },
    {
      companyName: "Schwan's",
      image: Schwans,
    },
    {
      companyName: 'Seattle Mariners',
      image: SeattleMariners,
    },
    {
      companyName: 'Army and Air Force Exchange',
      image: AAFEX,
    },
    {
      companyName: 'Sports Authority',
      image: SportsAuthority,
    },
    {
      companyName: 'Strack',
      image: Strack,
    },
    {
      companyName: 'The Fresh Market',
      image: TheFreshMarket,
    },
    {
      companyName: 'Ahold USA',
      image: Ahold,
    },
    {
      companyName: 'Dean Foods',
      image: DeanFoods,
    },
    {
      companyName: 'Giant',
      image: Giant,
    },
    {
      companyName: 'Homeland',
      image: Homeland,
    },
    {
      companyName: 'KVAT',
      image: KVAT,
    },
    {
      companyName: 'Metropolitan Market',
      image: MetropolitanMarket,
    },
    {
      companyName: 'Northgate Market',
      image: NorthgateMarket,
    },
    {
      companyName: 'OTG',
      image: OTG,
    },
    {
      companyName: 'Peekay',
      image: Peekay,
    },
    {
      companyName: 'POST',
      image: Post,
    },
    {
      companyName: 'VF',
      image: VF,
    },
    {
      companyName: 'Xochitl',
      image: Xochitl,
    },
  ];
  return (
    <IndustryTemplate
      bannerPath={RetailBanner}
      pageTitle="Retail"
      industryCompanies={retailCompanies}
    >
      <Text>
        We understand the challenges that you face, and what is needed to drive
        success. In today's omni-channel retail world, leaders must be
        knowledgeable and versatile. This is not an environment for the timid.
      </Text>
      <Text>
        Our Managing Directors were selected based on their expertise in key
        leadership roles in the industries they serve. Our Retail / Consumer
        team is composed of senior executives who have been on “your side” of
        the desk. They understand the importance of identifying superior leaders
        and recruiting them to the organization. The search firm you select must
        have the same sense of urgency displayed by your organization -
        timeliness is essential to effective candidate placement.
      </Text>
      <Text>
        We have assisted companies in all areas of the Retail / Consumer world,
        such as traditional department stores, specialty retail companies,
        business to consumer, and on-line retailing. Each search engagement is
        specifically tailored to the needs of the client and is personally
        conducted by a Managing Director - from the beginning to its successful
        conclusion.
      </Text>
    </IndustryTemplate>
  );
};

export default Retail;
