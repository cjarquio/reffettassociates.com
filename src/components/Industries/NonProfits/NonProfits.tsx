import { Text } from '@mantine/core';
import { NonProfitBanner } from '../../../assets/images';
import {
  DiversityInc,
  TouchstoneEnergy,
  UnitedWayofKingCounty,
  NRECA,
  NBR,
  Naba,
  NAM,
  NSH,
  Pioneer,
  ACE,
  CliffordBeers,
  ICSC,
} from '../../../assets/images/companies/NonProfits';
import IndustryTemplate from '../IndustryTemplate/IndustryTemplate';

export const NonProfits: React.FC = () => {
  const retailCompanies = [
    {
      companyName: 'Touchstone Energy',
      image: TouchstoneEnergy,
    },
    {
      companyName: 'UnitedWay of King County',
      image: UnitedWayofKingCounty,
    },
    {
      companyName: 'Diversity Inc.',
      image: DiversityInc,
    },
    {
      companyName: 'NRECA',
      image: NRECA,
    },
    {
      companyName: 'National Bureau of Asian Research',
      image: NBR,
    },
    {
      companyName: 'National Association of Black Accountants',
      image: Naba,
    },
    {
      companyName: 'National Association of Manufacturers',
      image: NAM,
    },
    {
      companyName: 'National Society of Hispanic MBAs',
      image: NSH,
    },
    {
      companyName: 'Pioneer Human Services',
      image: Pioneer,
    },
    {
      companyName: 'American Council on Education',
      image: ACE,
    },
    {
      companyName: 'Clifford Beers Clinic',
      image: CliffordBeers,
    },
    {
      companyName: 'International Council of Shopping Centers',
      image: ICSC,
    },
  ];
  return (
    <IndustryTemplate
      pageTitle="Associations and Nonprofits"
      bannerPath={NonProfitBanner}
      industryCompanies={retailCompanies}
    >
      <Text>
        Outstanding leadership skills are developed over a lifetime of great
        opportunities and experiences. We are intimately familiar with
        association and not-for-profit organizations and the challenges they
        face every day.
      </Text>
      <Text>
        We are especially well qualified to identify that unique person to fit
        your organization's needs. As not-for-profit organizations begin
        operating more like businesses and implementing best practices and
        governance structures, effective leadership at the top is imperative.
        Reffett Associates will find the individuals who best fit your
        organization and will work towards the achievement of your
        organization's mission.
      </Text>
    </IndustryTemplate>
  );
};

export default NonProfits;
