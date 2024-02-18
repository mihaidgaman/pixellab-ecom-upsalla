import { ContactForm, ContactInfo } from '@/components/cart/client';
import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact us</title>
      </Head>

      <main className="container px-4 lg:px-0 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between lg:w-full">
          <ContactInfo></ContactInfo>

          <ContactForm></ContactForm>
        </div>
      </main>
    </>
  );
}
