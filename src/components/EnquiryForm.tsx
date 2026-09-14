import React from 'react';

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScb1_01fgeZCcG7vUr3v-5tLB7rd6y_H8bHQtVNpJr4Eh78fg/viewform';

export const EnquiryForm: React.FC = () => (
  <div className="w-full min-w-0 space-y-4">
    <iframe
      title="JB3Ai enquiry form"
      src={`${FORM_URL}?embedded=true`}
      width="640"
      height="1485"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      className="block w-full max-w-[640px] mx-auto border-0 bg-white"
    >
      Loading…
    </iframe>
    <p className="text-center text-sm text-gray-400">
      Having trouble loading the form?{' '}
      <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4">
        Open it in a new tab
      </a>
    </p>
  </div>
);
