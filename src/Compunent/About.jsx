import React from 'react';

export default function About({ name, email, roll }) {
  return (
    <div className="mb-4 p-2 border rounded">
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Roll:</strong> {roll}</p>
    </div>
  );
}
