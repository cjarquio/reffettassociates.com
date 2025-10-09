import { Text } from '@mantine/core';
import { HigherEducationBanner } from '../../../assets/images';
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

export const HigherEducation: React.FC = () => {
  // TODO: Add higher education companies
  const higherEducationCompanies = [
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
      pageTitle="Higher Education"
      bannerPath={HigherEducationBanner}
      industryCompanies={higherEducationCompanies}
    >
      <Text>
        Reffett Associates has a track record of successfully filing senior
        level and hard-to-fill positions for mission driven institutions of
        higher learning and related academic institutions. These positions
        include Superintendents, Presidents, Deans, Provost, Facilities
        Directors and more. Our higher education team has experience as
        administrators and in the classroom. Through our tailored approach to
        every recruitment, we are able to deliver top talent for every
        placement. We take the time to learn about our clients’ needs, wants,
        and unique cultures to find the right candidates to help make each
        recruitment a success.
      </Text>
    </IndustryTemplate>
  );
};

export default HigherEducation;
