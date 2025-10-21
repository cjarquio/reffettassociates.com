import { Text } from '@mantine/core';
import { HigherEducationBanner } from '../../../assets/images';
import {
  AFRL,
  LibraryOfCongress,
  NationalBureauOfAsianResearch,
  NavalPostGraduateSchool,
  NavalWarCollege,
  PNNL,
  SnoIsleLibraryFoundation,
  UnitedStatesMerchantMarineAcademy,
  USAirForceSchoolOfAerospaceMedicine,
} from '../../../assets/images/companies/HigherEducation';
import IndustryTemplate from '../IndustryTemplate/IndustryTemplate';

export const HigherEducation: React.FC = () => {
  const higherEducationCompanies = [
    {
      companyName: 'The Air Force Research Laboratories',
      image: AFRL,
    },
    {
      companyName: 'The Library of Congress',
      image: LibraryOfCongress,
    },
    {
      companyName: 'National Bureau of Asian Research',
      image: NationalBureauOfAsianResearch,
    },
    {
      companyName: 'The Naval Post Graduate School',
      image: NavalPostGraduateSchool,
    },
    {
      companyName: 'The Naval War College',
      image: NavalWarCollege,
    },
    {
      companyName: 'Pacific Northwest National Laboratory ',
      image: PNNL,
    },
    {
      companyName: 'Sno-isle Library Foundation',
      image: SnoIsleLibraryFoundation,
    },
    {
      companyName: 'The United States Merchant Marine Academy ',
      image: UnitedStatesMerchantMarineAcademy,
    },
    {
      companyName: 'The United States Airforce School of Aerospace Medicine',
      image: USAirForceSchoolOfAerospaceMedicine,
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
