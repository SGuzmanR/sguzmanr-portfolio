import * as React from 'react';

export const EmailTemplate = ({ firstName, message }) => (
  <div>
    <h1>New message from {firstName}!</h1>
    <p>{message}</p>
  </div>
);
