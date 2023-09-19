import React from 'react';

export default function Button({ bgColor, onClick, title }) {
  return (
    <button
      data-testid="button-cta"
      onClick={onClick}
      className={`${bgColor === 'green' ? 'bg-green-700' : 'bg-blue-600'} p-2 rounded-sm text-white`}
    >
      {title}
    </button>
  );
}
