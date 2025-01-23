import React from 'react';
import ToastProvider from '../../../components/ToastProvider';

import './styles.css';
import ToastShelf from '../../../components/ToastShelf/ToastShelf';

function FlashMsgLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <ToastProvider>
          {children}
          <ToastShelf />
        </ToastProvider>
      </body>
    </html>
  );
}

export default FlashMsgLayout;
