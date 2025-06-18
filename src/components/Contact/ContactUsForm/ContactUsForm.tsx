import {
  Button,
  Group,
  SimpleGrid,
  Textarea,
  TextInput,
  Title,
  FileInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconFileCv } from '@tabler/icons-react';
import emailjs from '@emailjs/browser';

export const ContactUsForm: React.FC = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      subject: '',
      file: null as File | null,
      message: '',
    },
    validate: {
      name: (value: string) => value.trim().length < 2,
      email: (value: string) => !/^\S+@\S+$/.test(value),
      subject: (value: string) => value.trim().length === 0,
    },
  });

  // const sendEmail = () => {
  //   emailjs
  //     .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
  //       publicKey: 'YOUR_PUBLIC_KEY',
  //     })
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       }
  //     );
  // };

  return (
    <form
      onSubmit={form.onSubmit((values) => {
        console.log(values);
      })}
    >
      <Title
        order={2}
        size="h1"
        style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
        fw={900}
        ta="center"
      >
        Get in touch
      </Title>
      <Title order={4} style={{ textAlign: 'center' }}>
        People can contact us about our work, for coaching, or to submit a
        resume
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          {...form.getInputProps('name')}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          {...form.getInputProps('email')}
        />
      </SimpleGrid>
      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        {...form.getInputProps('subject')}
      />
      <FileInput
        leftSection={<IconFileCv size={18} stroke={1.5} />}
        clearable
        accept="application/pdf, .doc, .docx"
        label="Upload files"
        placeholder="Upload files"
        {...form.getInputProps('file')}
      />
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        {...form.getInputProps('message')}
      />
      <Group justify="center" mt="xl">
        <Button type="submit" size="md">
          Send message
        </Button>
      </Group>
    </form>
  );
};
