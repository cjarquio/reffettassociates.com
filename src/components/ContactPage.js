import React from 'react';
import PageTitle from './PageTitle';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <div>
      <PageTitle
        title='Cotact Us'
        subtitle=''
      />
      Main Office (Seattle)
      <br/><br/>
      11900 NE 1st Street, Suite 300<br/>
      Bellevue, WA 98005<br/>
      Phone: (425) 637-2993<br/>
      Fax: (425) 869-5347
      <br/><br/>
      <ContactForm />
    </div>
  );
}