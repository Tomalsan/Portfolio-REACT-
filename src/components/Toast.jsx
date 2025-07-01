import React from 'react';

const Toast = ({ message, show }) => (
  <div className={`fixed top-51 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-white text-neutral-700 text-sm shadow-lg transition-all duration-200
    ${show ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
    {message}
  </div>
);

export default Toast;