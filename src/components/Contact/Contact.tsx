import { Container, Title } from '@mantine/core';
import ContactMap from './ContactMap';
import { ContactUsForm } from './ContactUsForm/ContactUsForm';
import { Banner } from '../Banner';
import { ContactBanner } from '../../assets/images';

export const Contact: React.FC = () => {
  return (
    <>
      <Banner bannerImagePath={ContactBanner} page="Contact Us" />
      <Container fluid w={'99vw'}>
        <Container size={'40%'}>
          <Title order={3} style={{ textAlign: 'center' }}>
            Contact Reffett Associates directly at 425.637.2993 or 703.351.5062
          </Title>
          <ContactMap />
        </Container>
        {/* Add Blue underline below title */}
        <Container size={'50%'}>
          <ContactUsForm />
        </Container>
      </Container>
    </>
  );
};

export default Contact;
