import { Text } from '@mantine/core';
import { GovernmentContractingBanner } from '../../../assets/images';
import {
  Battelle,
  DynCorp,
  Fluor,
  Hitachi,
  PointBlank,
  TASC,
  NRECA,
  SOC,
} from '../../../assets/images/companies/Government';
import IndustryTemplate from '../IndustryTemplate/IndustryTemplate';

export const GovernmentContracting: React.FC = () => {
  const governmentContractingCompanies = [
    {
      companyName: 'Battelle',
      image: Battelle,
    },
    {
      companyName: 'Fluor',
      image: Fluor,
    },
    {
      companyName: 'Hitachi Consulting',
      image: Hitachi,
    },
    {
      companyName: 'Point Blank Enterprises',
      image: PointBlank,
    },
    {
      companyName: 'TASC',
      image: TASC,
    },
    {
      companyName: 'DynCorp International',
      image: DynCorp,
    },
    {
      companyName: 'NRECA',
      image: NRECA,
    },
    {
      companyName: 'SOC',
      image: SOC,
    },
  ];
  return (
    <IndustryTemplate
      pageTitle="Government Contracting"
      bannerPath={GovernmentContractingBanner}
      industryCompanies={governmentContractingCompanies}
    >
      <Text>
        Success in today's Federal, State and Local Government markets requires
        leaders and executives who understand this rapidly changing marketplace.
        Our group of Managing Directors has a deep understanding of your needs,
        and how to navigate the intricacies of doing business with the
        government.
      </Text>
      <Text>
        With experience at all levels of Federal Government contracting and
        broad experience in working with the top Federal, State and Local
        Government service providers, we understand the unique requirements for
        senior leaders and executives with experience in government contracting
        and program management. This includes contractors performing work
        overseas and in combat zones in support of US Forces.
      </Text>
      <Text>
        Our experience encompasses the entire Federal Government, and a majority
        of the top 100 Federal contractors.
      </Text>
    </IndustryTemplate>
  );
};

export default GovernmentContracting;
