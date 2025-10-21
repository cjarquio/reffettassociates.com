import { Text } from '@mantine/core';
import { ManufacturingBanner } from '../../../assets/images';
import {
  CastorAndPollux,
  CutterAndBuck,
  Emerald,
  Kaman,
  Lorillard,
  Post,
  Schwans,
  Xochitl,
  VF,
  ItgBrands,
  CoreScientific,
} from '../../../assets/images/companies/Manufacturing';
import IndustryTemplate from '../IndustryTemplate/IndustryTemplate';

export const Manufacturing: React.FC = () => {
  const manufacturingCompanies = [
    {
      companyName: 'Castor & Pollux',
      image: CastorAndPollux,
    },
    {
      companyName: 'Cutter & Buck',
      image: CutterAndBuck,
    },
    {
      companyName: 'Emerald Perfomance Materials',
      image: Emerald,
    },
    {
      companyName: 'Kaman',
      image: Kaman,
    },
    {
      companyName: 'Lorillard',
      image: Lorillard,
    },
    {
      companyName: 'POST',
      image: Post,
    },
    {
      companyName: "Schwan's",
      image: Schwans,
    },
    {
      companyName: 'Xochitl',
      image: Xochitl,
    },
    {
      companyName: 'VF Outlets',
      image: VF,
    },
    {
      companyName: 'itgBrands',
      image: ItgBrands,
    },
    {
      companyName: 'Core Scientific',
      image: CoreScientific,
    },
  ];
  return (
    <IndustryTemplate
      pageTitle="Manufacturing"
      bannerPath={ManufacturingBanner}
      industryCompanies={manufacturingCompanies}
    >
      <Text>
        Success in today's market requires leaders and executives who understand
        the nature of its rapidly changing landscape. Often this means
        leveraging external partners such as Reffett Associates to identify and
        attract exceptional talent that can make a significant business impact.
      </Text>
      <Text>
        The Reffett Associates team is uniquely positioned to understand our
        clients' needs. Having served as senior executives in major professional
        services and Fortune 500 companies, we possess deep expertise in
        providing business solutions to commercial and government clients. Our
        insight and consultative approach, combined with access to the best
        talent, ensures that the results we deliver to clients exceed their
        expectations.
      </Text>
    </IndustryTemplate>
  );
};

export default Manufacturing;
