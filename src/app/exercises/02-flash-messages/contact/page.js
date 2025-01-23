'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ToastContext } from '../../../../components/ToastProvider';

function ContactPage() {
  const [name, setName] = React.useState('');
  const { createToast } = React.useContext(ToastContext);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    router.push('/exercises/02-flash-messages');

    createToast(
      `Thank you ${name}! Your message has been received! We'll get back to you shortly.`,
      'success'
    );
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          id='name'
          required={true}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor='message'>Message:</label>
        <textarea id='message' />

        <button>Submit</button>
      </form>
    </main>
  );
}

export default ContactPage;
