import {
  Button,
  Group,
  SimpleGrid,
  Textarea,
  TextInput,
  Title,
  // FileInput,
} from '@mantine/core';
// import { IconFileCv } from '@tabler/icons-react';
import emailjs from '@emailjs/browser';
import React, { useState, useRef } from 'react';

export const ContactUsForm: React.FC = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Need subscription to emailjs service to send attachments
  const sendEmail = () => {
    if (formRef.current) {
      emailjs
        .sendForm(
          'service_fjt15i9',
          'template_sw46zv9',
          formRef.current,
          'qEV-REVecmTzohSOt'
        )
        .then(
          (result) => {
            console.log('Email sent successfully:', result.text);
            setValues({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
          },
          (error) => {
            console.error('Error sending email:', error.text);
          }
        );
    }
  };

  return (
    <form ref={formRef}>
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
        People can contact us about our work or for coaching
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
        <TextInput
          label="Name"
          placeholder="Your name"
          name="name"
          variant="filled"
          onChange={handleChange}
          value={values.name}
          error={values.name.length > 0 && values.name.trim().length < 2}
        />
        <TextInput
          label="Email"
          placeholder="Your email"
          name="email"
          variant="filled"
          onChange={handleChange}
          value={values.email}
          error={values.email.length > 0 && !/^\S+@\S+$/.test(values.email)}
        />
      </SimpleGrid>
      <TextInput
        label="Subject"
        placeholder="Subject"
        mt="md"
        name="subject"
        variant="filled"
        onChange={handleChange}
        value={values.subject}
        error={values.subject.length > 0 && values.subject.trim().length === 0}
      />
      {/* <FileInput
        leftSection={<IconFileCv size={18} stroke={1.5} />}
        clearable
        accept="application/pdf, .doc, .docx"
        label="Upload files"
        placeholder="Upload files"
        {...form.getInputProps('file')}
      /> */}
      <Textarea
        mt="md"
        label="Message"
        placeholder="Your message"
        maxRows={10}
        minRows={5}
        autosize
        name="message"
        variant="filled"
        onChange={handleChange}
        value={values.message}
        error={values.message.length > 0 && values.message.trim().length === 0}
      />
      <Group justify="center" mt="xl">
        <Button
          disabled={
            values.email === '' &&
            values.name === '' &&
            values.subject === '' &&
            values.message === ''
          }
          onClick={sendEmail}
          size="md"
        >
          Send message
        </Button>
      </Group>
    </form>
  );
};
